export default function StorePage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 24 }}>Noook Shop</h1>
      <p style={{ fontSize: 18, marginBottom: 32 }}>
        Shop our latest merchandise and support Noook Foundation! Secure checkout powered by Zeffy.
      </p>
      <iframe
        src="https://www.zeffy.com/en-US/ticketing/noook-shop"
        title="Noook Shop via Zeffy"
        width="100%"
        height="900"
        style={{ border: "none", borderRadius: 8, minHeight: 900 }}
        allowFullScreen
      />
    </main>
  );
}

