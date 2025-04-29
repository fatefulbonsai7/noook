"use client";

export default function GrantsPage() {
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24 }}>Apply for a Grant</h1>
      <p style={{ fontSize: 18, marginBottom: 32 }}>
        Non-profit organizations can apply for a Noook Foundation grant using the form below. We support creative projects that empower families!
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdIfGg_n-gPSSikLWfzSbddFFW_OmgLwiqcKU9UKewHl1eTIA/viewform?embedded=true"
        width="100%"
        height="1200"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Noook Foundation Grant Application"
        style={{ border: "none", borderRadius: 8, minHeight: 1200 }}
      >
        Loading…
      </iframe>
    </main>
  );
}