// =============================================================================
// TSPW intake — access-token gate wire-contract tests
// =============================================================================
//
// Hardening (2026-07-08): POST /api/intake/submit now requires the same
// post-call access token the /intake VIEW is gated on (forwarded via the
// x-tspw-intake-token header — see src/lib/intake/constants.ts +
// src/app/api/intake/submit/route.ts §"4. Access-token gate").
//
// src/lib/intake/access-token.ts (and everything it transitively pulls in —
// supabase.ts, ratelimit.ts, inngest.ts) is guarded by `import "server-only"`.
// That package's default export unconditionally throws unless the import is
// resolved under Next's build-time "react-server" condition, which plain
// `node --test` does not set up. That's why intake-validation.test.ts (the
// only other test file in this repo) tests schema.ts only — schema.ts is the
// one intake module with no server-only import. Importing access-token.ts
// directly here would throw at module-load time regardless of test content,
// so full behavioral coverage of validateIntakeAccessToken (format/expiry/
// status checks) is exercised instead via a live request against `next dev`
// (see session notes) rather than a unit test — it's not reachable from this
// harness without restructuring the source. This file covers what IS safely
// unit-testable: the wire contract between client and server.
// =============================================================================

import { test } from "node:test";
import { strict as assert } from "node:assert";

import { INTAKE_ACCESS_TOKEN_HEADER } from "../lib/intake/constants";

test("the access-token header name is stable", () => {
  // IntakeForm.tsx (client) and route.ts (server) both import this constant
  // rather than hardcoding the header string. This test guards against an
  // accidental rename on one side silently breaking the real submit flow —
  // the client would stop sending the token and the server would reject
  // every legitimate submission with 401.
  assert.equal(INTAKE_ACCESS_TOKEN_HEADER, "x-tspw-intake-token");
});

test("the header name is a valid HTTP header token", () => {
  // Guards against a future edit introducing spaces/colons/uppercase-with-
  // underscores or other characters `fetch()`/`Headers` would reject.
  assert.match(INTAKE_ACCESS_TOKEN_HEADER, /^[a-z0-9-]+$/);
});
