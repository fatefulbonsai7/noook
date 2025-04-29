export default function AboutPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 24 }}>About Us</h1>
      <section style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 22, fontWeight: 600, color: "#2e7d32", marginBottom: 8 }}>
          NOOOK Foundation is a youth-powered non-profit dedicated to creating change, one stitch at a time.
        </p>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          Through the art of crochet, young hands craft beautiful items that help raise funds for youth and families in need.
        </p>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          Every handmade item is a promise: that love is alive, that communities can rise, and that new beginnings are possible.
        </p>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          We believe that even the smallest hands can shape a brighter world.
        </p>
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Our Beneficiaries</h2>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          NOOOK continues to support organizations that align with our cause. Our commitment is to assist these beneficiaries through long-term fund-raising efforts.
        </p>
        <ul style={{ fontSize: 18, marginLeft: 24, marginBottom: 8 }}>
          <li>Mary’s Place</li>
          <li>Vision House</li>
          <li>Clothes for Kids</li>
          <li>AVID</li>
        </ul>
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Contact Us</h2>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          NOOOK Foundation is a 501(c)(3) non-profit organization led by women and youths.
        </p>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          We support beneficiaries of all races, colors, religions, national origins, genders, family status, sexual preference, and physical or mental disability.
        </p>
        <div style={{ fontSize: 18, marginBottom: 8 }}>
          <strong>Email:</strong> <a href="mailto:NOOOK.secretary@gmail.com">NOOOK.secretary@gmail.com</a><br />
          <strong>Instagram:</strong> <a href="https://instagram.com/ehzzo" target="_blank" rel="noopener noreferrer">@ehzzo</a><br />
          <strong>Address:</strong> 7231 196th St SW, Lynnwood WA 98036
        </div>
      </section>
      <section style={{ marginTop: 32, padding: 24, background: "#f1f8e9", borderRadius: 12, textAlign: "center" }}>
        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Together, we crochet a future of hope.</h3>
      </section>
    </main>
  );
}

