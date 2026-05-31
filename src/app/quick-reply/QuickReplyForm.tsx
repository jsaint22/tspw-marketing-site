"use client";

// =============================================================================
// TSPW quick-reply (light capture) — client component
// =============================================================================
//
// Per funnel-reversal canon (`references/tspw-funnel-rework-spec-2026-05-30.md`
// §3 + memory `project_tspw_funnel_call_first_canon` hybrid carve-out).
//
// 5 fields: first_name + email + current_team + agent_represented +
// preferred_time_to_chat. Consent gates the submit button. No deep intake
// fields — this is cold-walk-in capture only.
//
// Submits to /api/quick-reply/submit which:
//   - Validates against shared zod schema (quick-reply-schema.ts)
//   - Upstash rate-limit (reuses same limiter as deep intake)
//   - Inserts row into client_data.tspw_prospects with status='light_capture'
//   - Fires `tspw/light-capture.submitted` event
//   - Returns {ok, prospect_id}
//
// VOICE ATTESTED 2026-05-30 — funnel-reversal hybrid path. No anti-patterns
// per Phase 1 Batch 2 canon. Low-pressure low-friction by design.
// =============================================================================

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  tspwQuickReplySchema,
  type TspwQuickReplyInput,
} from "@/lib/intake/quick-reply-schema";

const inputClass =
  "w-full rounded-md border border-neutral-dark/20 px-3 py-2 bg-white text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function QuickReplyForm() {
  const [submitState, setSubmitState] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success" }
    | { kind: "error" }
  >({ kind: "idle" });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TspwQuickReplyInput>({
    resolver: zodResolver(tspwQuickReplySchema),
    mode: "onTouched",
    defaultValues: {
      consent_marketing_communications: false,
      consent_data_processing: false,
      ai_opt_out: false,
    },
  });

  const consentMarketing = watch("consent_marketing_communications");
  const consentDataProcessing = watch("consent_data_processing");
  const consentOk = consentMarketing === true && consentDataProcessing === true;

  const onSubmit: SubmitHandler<TspwQuickReplyInput> = async (values) => {
    setSubmitState({ kind: "submitting" });
    try {
      const res = await fetch("/api/quick-reply/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        setSubmitState({ kind: "error" });
        return;
      }
      const json = (await res.json()) as { ok: boolean };
      setSubmitState({ kind: json.ok ? "success" : "error" });
    } catch {
      setSubmitState({ kind: "error" });
    }
  };

  if (submitState.kind === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 text-center">
        {/* Voice attested 2026-05-30 — funnel-reversal hybrid success state.
            EXTRAPOLATION from DNA #10 + Batch 1 trade-day "I'm here if you
            need me" pattern. First-person Josh voice. */}
        <h2 className="text-2xl font-bold text-primary mb-3">Got it.</h2>
        <p className="text-neutral-dark/70 max-w-lg mx-auto">
          I&rsquo;ll reach out personally to set up an Opening Faceoff when you
          want one. No follow-up pressure between now and then &mdash; this is
          on your timing.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 space-y-5"
      noValidate
    >
      <Field label="First name" error={errors.first_name?.message} required>
        <input className={inputClass} {...register("first_name")} />
      </Field>

      <Field label="Email" error={errors.email?.message} required>
        <input type="email" className={inputClass} {...register("email")} />
      </Field>

      <Field
        label="Current team"
        hint="If you'd like to share."
        error={errors.current_team?.message}
      >
        <input
          className={inputClass}
          placeholder="Team / league"
          {...register("current_team")}
        />
      </Field>

      <Checkbox
        label="I'm represented by an agent"
        {...register("agent_represented")}
      />

      <Field
        label="When would be a good time to talk?"
        hint="Anything from a specific date/time to 'after the season ends' works."
        error={errors.preferred_time_to_chat?.message}
      >
        <textarea
          className={inputClass}
          rows={3}
          {...register("preferred_time_to_chat")}
        />
      </Field>

      {/* Consent */}
      <div className="border-t border-neutral-dark/10 pt-5 mt-2 space-y-3">
        <p className="text-sm font-semibold text-primary">Consent</p>
        <Checkbox
          label={
            <>
              I consent to TSPW processing the information I&rsquo;ve provided
              for the purpose of following up.{" "}
              <a href="/privacy" className="text-primary underline">
                Privacy Policy
              </a>{" "}
              ·{" "}
              <a href="/terms" className="text-primary underline">
                Terms
              </a>
            </>
          }
          error={errors.consent_data_processing?.message}
          {...register("consent_data_processing")}
        />
        <Checkbox
          label="I consent to receive follow-up communications from TSPW."
          error={errors.consent_marketing_communications?.message}
          {...register("consent_marketing_communications")}
        />
        <Checkbox
          label={
            <>
              Opt OUT of AI processing of my information.{" "}
              <span className="text-xs text-neutral-dark/60">
                (Default: opt-in.)
              </span>
            </>
          }
          {...register("ai_opt_out")}
        />
      </div>

      <div className="flex items-center justify-end pt-4 border-t border-neutral-dark/10">
        <button
          type="submit"
          disabled={
            !consentOk || isSubmitting || submitState.kind === "submitting"
          }
          className="px-6 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
          title={!consentOk ? "Please check both consent boxes to continue." : undefined}
        >
          {submitState.kind === "submitting" ? "Sending…" : "Send"}
        </button>
      </div>

      {submitState.kind === "error" && (
        <p className="text-sm text-rose-600 text-center" role="alert">
          {/* Voice attested 2026-05-30 — funnel-reversal hybrid error state.
              EXTRAPOLATION from DNA #10. First-person Josh voice. */}
          Something didn&rsquo;t go through. Please try again, or email me
          directly at{" "}
          <a href="mailto:josh@topshelfprivatewealth.com" className="underline">
            josh@topshelfprivatewealth.com
          </a>
          .
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  required?: boolean;
}

function Field({ label, error, hint, children, required }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-primary mb-1.5">
        {label}
        {required ? <span className="text-rose-600 ml-1">*</span> : null}
      </span>
      {children}
      {hint ? <span className="block text-xs text-neutral-dark/60 mt-1">{hint}</span> : null}
      {error ? (
        <span className="block text-xs text-rose-600 mt-1" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

function Checkbox({ label, error, ...rest }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="mt-1 w-4 h-4 rounded border-neutral-dark/30 text-primary focus:ring-primary"
        {...rest}
      />
      <span className="text-sm text-neutral-dark/80">{label}</span>
      {error ? (
        <span className="block text-xs text-rose-600 mt-1" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
