import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export default function BlogPage() {
  // Directory where Decap CMS writes blog posts
  const postsDir = path.join(process.cwd(), "src/content/blog");
  let posts: BlogPost[] = [];
  if (fs.existsSync(postsDir)) {
    const filenames = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
    posts = filenames.map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        image: data.image || undefined,
      };
    });
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--accent-dark)", marginBottom: 24 }}>
        Blog
      </h1>
      {posts.length === 0 && <p>No blog posts found.</p>}
      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, color: "var(--accent)" }}>{post.title}</h2>
          <p style={{ color: "#888", fontSize: 14 }}>{post.date ? new Date(post.date).toLocaleDateString() : ""}</p>
          {post.image && (
            <img src={post.image} alt={post.title} style={{ maxWidth: "100%", marginBottom: 12 }} />
          )}
          <p>{post.excerpt}</p>
        </div>
      ))}
    </main>
  );
}

