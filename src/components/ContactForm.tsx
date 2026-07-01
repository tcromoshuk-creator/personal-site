"use client";

import { FormEvent, useState } from "react";

const reasons = [
  "Full-time role",
  "Fractional consulting",
  "Advisory",
  "Project",
  "Speaking/podcast",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const subject = encodeURIComponent(
      `Personal site inquiry: ${String(payload.reason || "Contact")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${payload.name || ""}`,
        `Email: ${payload.email || ""}`,
        `Company: ${payload.company || ""}`,
        `Role/title: ${payload.role || ""}`,
        `Reason: ${payload.reason || ""}`,
        "",
        String(payload.message || ""),
      ].join("\n"),
    );

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
    if (endpoint) {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Form endpoint failed");
          setStatus("Thanks. Your message was sent.");
          form.reset();
        })
        .catch(() => {
          window.location.href = `mailto:tcromoshuk@gmail.com?subject=${subject}&body=${body}`;
          setStatus("Opening your email client as a fallback.");
        });
      return;
    }

    window.location.href = `mailto:tcromoshuk@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client to finish sending.");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="grid two-col">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="grid two-col">
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="form-field">
          <label htmlFor="role">Role/title</label>
          <input id="role" name="role" autoComplete="organization-title" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="reason">Reason for reaching out</label>
        <select id="reason" name="reason" required defaultValue="">
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
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="button primary" type="submit">
        Start a conversation
      </button>
      <p className="form-note">
        For launch, the form opens a pre-filled email unless a form endpoint is
        configured in Vercel.
      </p>
      {status && <p className="status" role="status">{status}</p>}
    </form>
  );
}
