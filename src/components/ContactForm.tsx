"use client";

import { FormEvent, useState } from "react";
import { getSafePagePath, trackEvent } from "@/lib/analytics";

const contactEmail = "tcromoshuk@gmail.com";

const reasons = [
  "Full-time leadership role",
  "Fractional/advisory work",
  "Case study / project discussion",
  "Speaking / podcast / media",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const reason = String(payload.reason || "Other");
    trackEvent("generate_lead", {
      lead_source: "contact_form",
      reason_type: reason,
      page_path: getSafePagePath(),
    });
    const subject = encodeURIComponent(
      `Growth conversation: ${reason}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${payload.name || ""}`,
        `Email: ${payload.email || ""}`,
        `Company: ${payload.company || ""}`,
        `Reason: ${reason}`,
        "",
        "Message:",
        String(payload.message || ""),
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client to finish sending.");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="grid two-col">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
      </div>
      <div className="grid two-col">
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="form-field">
          <label htmlFor="reason">Reason for reaching out</label>
          <select id="reason" name="reason" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </div>
      <button className="button primary" type="submit">
        Start a Conversation
      </button>
      {status && <p className="status" role="status">{status}</p>}
    </form>
  );
}
