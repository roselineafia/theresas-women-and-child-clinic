"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { enquiryCategories, isEnquiryCategory, type EnquiryCategory } from "@/data/enquiry";
import { cn } from "@/lib/cn";
import { Button } from "@/components/button";

type Values = {
  fullName: string;
  phone: string;
  email: string;
  category: EnquiryCategory | "";
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const emptyValues: Values = {
  fullName: "",
  phone: "",
  email: "",
  category: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  consent: false,
};

function todayIso() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function validate(values: Values, minDate: string): Errors {
  const errors: Errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = "Enter your full name.";
  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) errors.phone = "Enter a phone number.";
  else if (digits.length < 9 || digits.length > 15) errors.phone = "Enter a phone number with the area code.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email, or leave this field blank.";
  }
  if (!values.category) errors.category = "Choose what the enquiry is about.";
  if (!values.preferredDate) errors.preferredDate = "Choose a preferred date.";
  else if (minDate && values.preferredDate < minDate) errors.preferredDate = "Choose today or a future date.";
  if (!values.preferredTime) errors.preferredTime = "Choose a preferred time.";
  if (values.message.trim().length > 400) errors.message = "Please shorten the note to 400 characters or fewer.";
  if (!values.consent) {
    errors.consent = "Tick the box to confirm you understand this demonstration and agree to be contacted when a real enquiry is made.";
  }
  return errors;
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink outline-none";

export function AppointmentEnquiryForm() {
  const formId = useId();
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [minDate, setMinDate] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setMinDate(todayIso());
    const category = new URLSearchParams(window.location.search).get("category");
    if (isEnquiryCategory(category)) {
      setValues((current) => ({ ...current, category }));
    }
  }, []);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, minDate || todayIso());
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setDone(false);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setDone(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (done) {
    return (
      <div className="rounded-[1.8rem] border border-mint bg-white p-6 shadow-card sm:p-8">
        <h2 ref={successRef} tabIndex={-1} className="text-3xl text-plum outline-none">
          Enquiry checked
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          Your enquiry has been checked in this demonstration. It has not been sent to the clinic, and no appointment has been booked. Please contact the clinic directly to confirm availability.
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setDone(false);
            setValues(emptyValues);
            setErrors({});
          }}
        >
          Start another demonstration
        </Button>
      </div>
    );
  }

  const errorEntries = Object.entries(errors) as Array<[keyof Values, string]>;

  return (
    <form id="enquiry" onSubmit={onSubmit} noValidate className="rounded-[1.8rem] border border-line bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-3xl text-plum">Appointment enquiry</h2>
      <p className="mt-3 leading-relaxed text-muted">
        Tell us how to reach you and what the conversation is about. Please do not include a detailed medical history.
      </p>
      <p className="mt-4 rounded-2xl bg-peach px-4 py-3 text-sm leading-relaxed text-ink" role="note">
        This form is a demonstration. It does not send your details to the clinic and it does not book an appointment.
      </p>

      {errorEntries.length > 0 ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mt-5 rounded-2xl border border-coral bg-peach px-4 py-3 outline-none">
          <p className="font-extrabold text-ink">Please check these fields:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {errorEntries.map(([key, message]) => (
              <li key={key}>
                <a href={`#${formId}-${key}`} className="font-bold text-plum underline-offset-4 hover:underline">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <Field id={`${formId}-fullName`} label="Full name" error={errors.fullName} required>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className={cn(inputClass, errors.fullName && "border-coral-deep")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
          />
        </Field>
        <Field id={`${formId}-phone`} label="Phone number" error={errors.phone} required>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={cn(inputClass, errors.phone && "border-coral-deep")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          />
        </Field>
        <Field id={`${formId}-email`} label="Email" hint="Optional." error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={cn(inputClass, errors.email && "border-coral-deep")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : `${formId}-email-hint`}
          />
        </Field>
        <Field id={`${formId}-category`} label="Enquiry category" error={errors.category} required>
          <select
            id={`${formId}-category`}
            name="category"
            value={values.category}
            onChange={(event) => update("category", event.target.value as Values["category"])}
            className={cn(inputClass, "select-chevron appearance-none pr-12", errors.category && "border-coral-deep")}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? `${formId}-category-error` : undefined}
          >
            <option value="">Choose a category</option>
            {enquiryCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={`${formId}-preferredDate`} label="Preferred date" error={errors.preferredDate} required>
            <input
              id={`${formId}-preferredDate`}
              name="preferredDate"
              type="date"
              min={minDate || undefined}
              value={values.preferredDate}
              onChange={(event) => update("preferredDate", event.target.value)}
              className={cn(inputClass, errors.preferredDate && "border-coral-deep")}
              aria-invalid={Boolean(errors.preferredDate)}
              aria-describedby={errors.preferredDate ? `${formId}-preferredDate-error` : undefined}
            />
          </Field>
          <Field id={`${formId}-preferredTime`} label="Preferred time" error={errors.preferredTime} required>
            <input
              id={`${formId}-preferredTime`}
              name="preferredTime"
              type="time"
              value={values.preferredTime}
              onChange={(event) => update("preferredTime", event.target.value)}
              className={cn(inputClass, errors.preferredTime && "border-coral-deep")}
              aria-invalid={Boolean(errors.preferredTime)}
              aria-describedby={errors.preferredTime ? `${formId}-preferredTime-error` : undefined}
            />
          </Field>
        </div>
        <Field id={`${formId}-message`} label="Short message" hint="Optional. Skip detailed symptoms and medical history." error={errors.message}>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            maxLength={400}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className={cn(inputClass, "resize-y", errors.message && "border-coral-deep")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${formId}-message-error` : `${formId}-message-hint`}
          />
        </Field>
        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink" htmlFor={`${formId}-consent`}>
            <input
              id={`${formId}-consent`}
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={(event) => update("consent", event.target.checked)}
              className="mt-1 h-5 w-5 accent-plum"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
            />
            <span>I agree to be contacted about this enquiry. I understand this demonstration does not send my details or book an appointment.</span>
          </label>
          {errors.consent ? (
            <p id={`${formId}-consent-error`} className="mt-2 text-sm font-bold text-coral-deep">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>
      <Button type="submit" className="mt-6">
        Check enquiry
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-extrabold text-ink">
        {label}
        {required ? <span className="text-coral-deep"> *</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-bold text-coral-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
