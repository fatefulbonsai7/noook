export default function MembershipPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 24 }}>Join Club Noook</h1>
      <p style={{ fontSize: 18, marginBottom: 32 }}>
        Become a member for $5/month to receive our newsletter and join our in-person crochet club! Secure checkout via Zeffy.
      </p>
      <iframe
        src="https://www.zeffy.com/en-US/ticketing/club-noook"
        title="Club Noook Membership via Zeffy"
        width="100%"
        height="900"
        style={{ border: "none", borderRadius: 8, minHeight: 900 }}
        allowFullScreen
      />
    </main>
  );
}

