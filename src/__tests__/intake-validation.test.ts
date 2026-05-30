// =============================================================================
// TSPW intake — zod schema validation tests
// =============================================================================
//
// Verifies the shared schema in src/lib/intake/schema.ts:
//   - Required identity fields enforced
//   - Email validation
//   - Both consent flags required true
//   - Enum domains match Supabase CHECK constraints
//   - Numeric preprocess accepts both numbers and empty strings (form inputs)
//   - ai_opt_out defaults false
// =============================================================================

import { test } from "node:test";
import { strict as assert } from "node:assert";

import { tspwIntakeSchema } from "../lib/intake/schema";

const validMinimal = {
  first_name: "Alex",
  last_name: "Player",
  email: "alex@example.com",
  consent_marketing_communications: true,
  consent_data_processing: true,
};

test("rejects when first_name missing", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, first_name: "" });
  assert.equal(r.success, false);
});

test("rejects malformed email", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, email: "not-an-email" });
  assert.equal(r.success, false);
});

test("rejects when marketing consent is false", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    consent_marketing_communications: false,
  });
  assert.equal(r.success, false);
});

test("rejects when data-processing consent is false", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    consent_data_processing: false,
  });
  assert.equal(r.success, false);
});

test("accepts minimal valid payload", () => {
  const r = tspwIntakeSchema.safeParse(validMinimal);
  assert.equal(r.success, true);
  if (r.success) {
    assert.equal(r.data.ai_opt_out, false);
  }
});

test("rejects invalid income range", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    annual_hockey_income_range: "bogus_range",
  });
  assert.equal(r.success, false);
});

test("accepts valid income range", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    annual_hockey_income_range: "1m_3m",
  });
  assert.equal(r.success, true);
});

test("rejects invalid contract_type", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, contract_type: "bogus" });
  assert.equal(r.success, false);
});

test("accepts ELC contract type", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, contract_type: "ELC" });
  assert.equal(r.success, true);
});

test("preprocesses empty-string numeric to undefined", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    contract_salary_annual: "",
  });
  assert.equal(r.success, true);
  if (r.success) {
    assert.equal(r.data.contract_salary_annual, undefined);
  }
});

test("preprocesses numeric strings to numbers", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    contract_salary_annual: "850000",
  });
  assert.equal(r.success, true);
  if (r.success) {
    assert.equal(r.data.contract_salary_annual, 850000);
  }
});

test("rejects confidence_rating out of 1-5", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, confidence_rating: 7 });
  assert.equal(r.success, false);
});

test("rejects current_escrow_pct above 100", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, current_escrow_pct: 105 });
  assert.equal(r.success, false);
});

test("accepts jurisdictions array", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    jurisdictions_played_this_season: ["CA", "NY", "ON"],
  });
  assert.equal(r.success, true);
});

test("respects ai_opt_out=true when explicitly set", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, ai_opt_out: true });
  assert.equal(r.success, true);
  if (r.success) {
    assert.equal(r.data.ai_opt_out, true);
  }
});

test("empty-string select coerces to undefined for annual_hockey_income_range", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    annual_hockey_income_range: "",
  });
  assert.equal(r.success, true, "empty-string from placeholder option must not fail");
  if (r.success) {
    assert.equal(r.data.annual_hockey_income_range, undefined);
  }
});

test("empty-string select coerces to undefined for contract_type", () => {
  const r = tspwIntakeSchema.safeParse({ ...validMinimal, contract_type: "" });
  assert.equal(r.success, true);
  if (r.success) {
    assert.equal(r.data.contract_type, undefined);
  }
});

test("empty-string select coerces to undefined for current_advisor_intent", () => {
  const r = tspwIntakeSchema.safeParse({
    ...validMinimal,
    current_advisor_intent: "",
  });
  assert.equal(r.success, true);
  if (r.success) {
    assert.equal(r.data.current_advisor_intent, undefined);
  }
});
