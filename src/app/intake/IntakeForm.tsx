"use client";

// =============================================================================
// TSPW intake — client component (multi-step form, 5 sections)
// =============================================================================
//
// Per references/tspw-intake-build-spec-2026-05-30.md §"Form UI":
//   - 5-step progression: Identity → Hockey → Financial → Family + Life → Goals
//   - React Hook Form + zod resolver (shared schema with /api/intake/submit)
//   - Consent checkboxes gate submit
//   - Progress indicator
//   - Voice-LOCK markers on every field LABEL (Window 6 fills final voice)
//   - Substantiation discipline: no factual claims about TSPW outcomes
//
// VOICE-LOCK MARKERS PRESENT throughout — Window 6 (ovn-window-6-voice)
// replaces marker blocks with voice-canon-attested final copy.
// =============================================================================

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  tspwIntakeSchema,
  type TspwIntakeInput,
  INCOME_RANGES,
  CONTRACT_TYPES,
  CURRENT_ADVISOR_INTENTS,
} from "@/lib/intake/schema";

type Step = 0 | 1 | 2 | 3 | 4;

const STEPS: { title: string; description: string }[] = [
  // VOICE-LOCK: step titles + descriptions — Window 6 fills.
  { title: "Identity", description: "Who you are and how to reach you." },
  { title: "Hockey context", description: "Your career stage and situation." },
  { title: "Financial picture", description: "What's in place today." },
  { title: "Family + life", description: "Who else is in the picture." },
  { title: "Goals", description: "What you're hoping to figure out." },
];

const incomeRangeLabel: Record<(typeof INCOME_RANGES)[number], string> = {
  under_500k: "Under $500K",
  "500k_1m": "$500K – $1M",
  "1m_3m": "$1M – $3M",
  "3m_5m": "$3M – $5M",
  "5m_10m": "$5M – $10M",
  "10m_plus": "$10M+",
};

const contractTypeLabel: Record<(typeof CONTRACT_TYPES)[number], string> = {
  one_way: "One-way",
  two_way: "Two-way",
  ELC: "Entry-Level Contract (ELC)",
  standard: "Standard",
};

const advisorIntentLabel: Record<(typeof CURRENT_ADVISOR_INTENTS)[number], string> = {
  replace: "Looking to replace them",
  add: "Looking to add a specialist",
  explore: "Just exploring options",
};

interface FieldShellProps {
  label: string;
  voiceLockNote?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  required?: boolean;
}

function FieldShell({ label, error, hint, children, required }: FieldShellProps) {
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

const inputClass =
  "w-full rounded-md border border-neutral-dark/20 px-3 py-2 bg-white text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function IntakeForm() {
  const [step, setStep] = useState<Step>(0);
  const [submitState, setSubmitState] = useState<
    { kind: "idle" } | { kind: "submitting" } | { kind: "success"; prospectId: string } | { kind: "error" }
  >({ kind: "idle" });

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TspwIntakeInput>({
    resolver: zodResolver(tspwIntakeSchema),
    mode: "onTouched",
    defaultValues: {
      consent_marketing_communications: false,
      consent_data_processing: false,
      ai_opt_out: false,
      jurisdictions_played_this_season: [],
    },
  });

  const consentMarketing = watch("consent_marketing_communications");
  const consentDataProcessing = watch("consent_data_processing");
  const consentOk = consentMarketing === true && consentDataProcessing === true;
  const hasCurrentAdvisor = watch("has_current_advisor");

  const stepFields: Array<Array<keyof TspwIntakeInput>> = [
    ["first_name", "last_name", "email", "phone", "birthday", "preferred_name"],
    [
      "current_league",
      "current_team",
      "contract_salary_annual",
      "contract_years_remaining",
      "agent_represented",
      "agent_name",
      "annual_hockey_income_range",
      "has_signing_bonuses",
      "has_endorsement_income",
      "contract_type",
      "current_escrow_pct",
    ],
    [
      "has_existing_investment_accounts",
      "has_property_real_estate",
      "has_current_advisor",
      "current_advisor_intent",
      "has_accountant_tax_professional",
      "has_existing_legal_arrangements",
      "has_disability_injury_insurance",
      "has_will_trust_estate_docs",
      "has_career_ending_injury_history",
      "has_career_ending_financial_plan",
    ],
    [
      "relationship_status",
      "has_children_dependents",
      "financially_supports_family",
      "other_involved_parties",
    ],
    [
      "financial_success_after_hockey",
      "top_3_financial_priorities",
      "confidence_rating",
      "unanswered_question",
      "anything_else",
      "how_did_you_hear",
      "preferred_meeting_format",
    ],
  ];

  async function handleNext() {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) setStep((s) => (Math.min(s + 1, 4) as Step));
  }

  const onSubmit: SubmitHandler<TspwIntakeInput> = async (values) => {
    setSubmitState({ kind: "submitting" });
    try {
      const res = await fetch("/api/intake/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        setSubmitState({ kind: "error" });
        return;
      }
      const json = (await res.json()) as { ok: boolean; prospect_id?: string };
      if (json.ok && json.prospect_id) {
        setSubmitState({ kind: "success", prospectId: json.prospect_id });
      } else {
        setSubmitState({ kind: "error" });
      }
    } catch {
      setSubmitState({ kind: "error" });
    }
  };

  if (submitState.kind === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 text-center">
        {/* VOICE-LOCK: TSPW intake success state copy — Window 6 fills.
            Substantiation: confirm receipt only; no outcome promises. */}
        <h2 className="text-2xl font-bold text-primary mb-3">Got it.</h2>
        <p className="text-neutral-dark/70 max-w-xl mx-auto">
          Your intake is in. Josh will review and follow up personally with next steps —
          usually within one business day.
        </p>
        <p className="text-sm text-neutral-dark/50 mt-6">
          Reference: <span className="font-mono">{submitState.prospectId.slice(0, 8)}</span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 space-y-6"
      noValidate
    >
      {/* Progress indicator */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((s, idx) => (
            <div key={s.title} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  idx <= step
                    ? "bg-primary text-white"
                    : "bg-neutral-dark/10 text-neutral-dark/40"
                }`}
                aria-current={idx === step ? "step" : undefined}
              >
                {idx + 1}
              </div>
              <p
                className={`text-[10px] sm:text-xs mt-1 text-center ${
                  idx <= step ? "text-primary font-medium" : "text-neutral-dark/40"
                }`}
              >
                {s.title}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-dark/60 text-center">
          Step {step + 1} of {STEPS.length} — {STEPS[step].description}
        </p>
      </div>

      {/* Step 0: Identity */}
      {step === 0 && (
        <div className="space-y-4">
          <FieldShell label="First name" error={errors.first_name?.message} required>
            <input className={inputClass} {...register("first_name")} />
          </FieldShell>
          <FieldShell label="Last name" error={errors.last_name?.message} required>
            <input className={inputClass} {...register("last_name")} />
          </FieldShell>
          <FieldShell label="Email" error={errors.email?.message} required>
            <input type="email" className={inputClass} {...register("email")} />
          </FieldShell>
          <FieldShell label="Phone" error={errors.phone?.message}>
            <input type="tel" className={inputClass} {...register("phone")} />
          </FieldShell>
          <FieldShell label="Birthday" error={errors.birthday?.message}>
            <input type="date" className={inputClass} {...register("birthday")} />
          </FieldShell>
          <FieldShell
            label="What do you go by?"
            hint="If different from first name."
            error={errors.preferred_name?.message}
          >
            <input className={inputClass} {...register("preferred_name")} />
          </FieldShell>
        </div>
      )}

      {/* Step 1: Hockey context */}
      {step === 1 && (
        <div className="space-y-4">
          <FieldShell label="Current league" error={errors.current_league?.message}>
            <input
              className={inputClass}
              placeholder="NHL, AHL, KHL, NCAA, etc."
              {...register("current_league")}
            />
          </FieldShell>
          <FieldShell label="Current team" error={errors.current_team?.message}>
            <input className={inputClass} {...register("current_team")} />
          </FieldShell>
          <FieldShell
            label="Annual hockey income"
            hint="Rough bracket — we'll get specifics later."
            error={errors.annual_hockey_income_range?.message}
          >
            <select className={inputClass} defaultValue="" {...register("annual_hockey_income_range")}>
              <option value="">— Select a range —</option>
              {INCOME_RANGES.map((r) => (
                <option key={r} value={r}>
                  {incomeRangeLabel[r]}
                </option>
              ))}
            </select>
          </FieldShell>
          <FieldShell label="Annual salary (current contract)" error={errors.contract_salary_annual?.message}>
            <input type="number" min={0} step="1000" className={inputClass} {...register("contract_salary_annual")} />
          </FieldShell>
          <FieldShell label="Years remaining on contract" error={errors.contract_years_remaining?.message}>
            <input type="number" min={0} max={20} className={inputClass} {...register("contract_years_remaining")} />
          </FieldShell>
          <FieldShell label="Contract type" error={errors.contract_type?.message}>
            <select className={inputClass} defaultValue="" {...register("contract_type")}>
              <option value="">— Select —</option>
              {CONTRACT_TYPES.map((c) => (
                <option key={c} value={c}>
                  {contractTypeLabel[c]}
                </option>
              ))}
            </select>
          </FieldShell>
          <FieldShell
            label="Current escrow percentage"
            hint="Approximate — last known."
            error={errors.current_escrow_pct?.message}
          >
            <input type="number" min={0} max={100} step="0.1" className={inputClass} {...register("current_escrow_pct")} />
          </FieldShell>
          <Checkbox label="I have signing bonuses" {...register("has_signing_bonuses")} />
          <Checkbox label="I have endorsement income" {...register("has_endorsement_income")} />
          <Checkbox label="I'm represented by an agent" {...register("agent_represented")} />
          <FieldShell label="Agent name" error={errors.agent_name?.message}>
            <input className={inputClass} {...register("agent_name")} />
          </FieldShell>
        </div>
      )}

      {/* Step 2: Financial */}
      {step === 2 && (
        <div className="space-y-3">
          <Checkbox label="I have existing investment accounts" {...register("has_existing_investment_accounts")} />
          <Checkbox label="I own property or real estate" {...register("has_property_real_estate")} />
          <Checkbox label="I currently work with a financial advisor" {...register("has_current_advisor")} />
          {hasCurrentAdvisor ? (
            <FieldShell
              label="What's your intent?"
              error={errors.current_advisor_intent?.message}
            >
              <select className={inputClass} defaultValue="" {...register("current_advisor_intent")}>
                <option value="">— Select —</option>
                {CURRENT_ADVISOR_INTENTS.map((i) => (
                  <option key={i} value={i}>
                    {advisorIntentLabel[i]}
                  </option>
                ))}
              </select>
            </FieldShell>
          ) : null}
          <Checkbox label="I work with an accountant or tax professional" {...register("has_accountant_tax_professional")} />
          <Checkbox label="I have existing legal arrangements (trusts, LLCs, etc.)" {...register("has_existing_legal_arrangements")} />
          <Checkbox label="I have disability or career-injury insurance" {...register("has_disability_injury_insurance")} />
          <Checkbox label="I have a will, trust, or estate documents" {...register("has_will_trust_estate_docs")} />
          <Checkbox label="I've had a career-impacting injury before" {...register("has_career_ending_injury_history")} />
          <Checkbox label="I have a financial plan for if my career ended tomorrow" {...register("has_career_ending_financial_plan")} />
        </div>
      )}

      {/* Step 3: Family + Life */}
      {step === 3 && (
        <div className="space-y-4">
          <FieldShell label="Relationship status" error={errors.relationship_status?.message}>
            <input className={inputClass} placeholder="Single, married, etc." {...register("relationship_status")} />
          </FieldShell>
          <Checkbox label="I have children or dependents" {...register("has_children_dependents")} />
          <Checkbox label="I financially support family members" {...register("financially_supports_family")} />
          <FieldShell
            label="Who else should we know about?"
            hint="Spouse, parents, siblings, business partners — anyone whose situation is connected to yours."
            error={errors.other_involved_parties?.message}
          >
            <textarea className={inputClass} rows={3} {...register("other_involved_parties")} />
          </FieldShell>
        </div>
      )}

      {/* Step 4: Goals */}
      {step === 4 && (
        <div className="space-y-4">
          {/* VOICE-LOCK: TSPW intake goals-section labels — Window 6 voice attestation pending.
              Substantiation: open-ended capture only; no claim or projection. */}
          <FieldShell
            label="What does financial success look like after hockey?"
            error={errors.financial_success_after_hockey?.message}
          >
            <textarea className={inputClass} rows={3} {...register("financial_success_after_hockey")} />
          </FieldShell>
          <FieldShell
            label="Your top 3 financial priorities right now"
            error={errors.top_3_financial_priorities?.message}
          >
            <textarea className={inputClass} rows={3} {...register("top_3_financial_priorities")} />
          </FieldShell>
          <FieldShell
            label="How confident are you in your current financial situation? (1–5)"
            error={errors.confidence_rating?.message}
          >
            <input type="number" min={1} max={5} className={inputClass} {...register("confidence_rating")} />
          </FieldShell>
          <FieldShell
            label="What's a question no advisor has answered for you yet?"
            error={errors.unanswered_question?.message}
          >
            <textarea className={inputClass} rows={3} {...register("unanswered_question")} />
          </FieldShell>
          <FieldShell label="Anything else?" error={errors.anything_else?.message}>
            <textarea className={inputClass} rows={3} {...register("anything_else")} />
          </FieldShell>
          <FieldShell label="How did you hear about us?" error={errors.how_did_you_hear?.message}>
            <input className={inputClass} {...register("how_did_you_hear")} />
          </FieldShell>
          <FieldShell label="Preferred meeting format" error={errors.preferred_meeting_format?.message}>
            <input className={inputClass} placeholder="Video, phone, in-person" {...register("preferred_meeting_format")} />
          </FieldShell>

          {/* Consent block */}
          <div className="border-t border-neutral-dark/10 pt-5 mt-6 space-y-3">
            <p className="text-sm font-semibold text-primary">Consent</p>
            <Checkbox
              label={
                <>
                  I consent to TSPW processing the information I've provided for the
                  purpose of evaluating fit and following up.{" "}
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
              label="I consent to receive follow-up communications from TSPW about my intake."
              error={errors.consent_marketing_communications?.message}
              {...register("consent_marketing_communications")}
            />
            <Checkbox
              label={
                <>
                  Opt OUT of AI processing of my information.{" "}
                  <span className="text-xs text-neutral-dark/60">
                    (Default: opt-in. Check this if you do not want AI tools used in
                    preparing for our conversations.)
                  </span>
                </>
              }
              {...register("ai_opt_out")}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-dark/10">
        <button
          type="button"
          onClick={() => setStep((s) => (Math.max(s - 1, 0) as Step))}
          disabled={step === 0 || isSubmitting}
          className="px-5 py-2.5 rounded-md text-sm font-medium text-neutral-dark/70 hover:text-primary disabled:opacity-30"
        >
          ← Back
        </button>

        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90"
          >
            Continue →
          </button>
        ) : (
          <button
            type="submit"
            disabled={!consentOk || isSubmitting || submitState.kind === "submitting"}
            className="px-6 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
            title={!consentOk ? "Please check both consent boxes to continue." : undefined}
          >
            {submitState.kind === "submitting" ? "Submitting…" : "Submit intake"}
          </button>
        )}
      </div>

      {submitState.kind === "error" && (
        <p className="text-sm text-rose-600 text-center" role="alert">
          {/* VOICE-LOCK: TSPW intake error-retry copy — Window 6 voice attestation pending.
              Substantiation: friendly retry only; no error detail leak. */}
          Something went wrong submitting your intake. Please try again, or email{" "}
          <a href="mailto:josh@topshelfprivatewealth.com" className="underline">
            josh@topshelfprivatewealth.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
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
