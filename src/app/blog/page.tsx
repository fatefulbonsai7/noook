'use client';
import { useEffect, useState } from 'react';
import Parser from 'rss-parser';

interface BlogPost {
  title: string;
  date: string;
  link: string;
  excerpt: string;
  image?: string;
}

const RSS_FEED_URL = 'https://fatefulbonsai7.github.io/noook-blog/feed.xml';
const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const parser = new Parser();
        const feed = await parser.parseURL(RSS_FEED_URL);
        setPosts((feed.items || []).map((item) => {
          // Try to extract image from common RSS fields
          let image = '';
          // media:content
          if (item['media:content'] && item['media:content']['$'] && item['media:content']['$'].url) {
            image = item['media:content']['$'].url;
          }
          // enclosure
          else if (item.enclosure && item.enclosure.url) {
            image = item.enclosure.url;
          }
          // custom image field
          else if (item.image) {
            image = item.image;
          }
          // Open Graph image in content (rare)
          else if (item.content && typeof item.content === 'string') {
            const match = item.content.match(/<img[^>]+src=["']([^"']+)["']/);
            if (match) image = match[1];
          }
          return {
            title: item.title || '',
            date: item.pubDate || '',
            link: item.link || '',
            excerpt: item.contentSnippet || '',
            image,
          };
        }));
      } catch (err: any) {
        setError('Work in progress.');
        // setError('Failed to load blog posts.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);
  const canLoadMore = visibleCount < posts.length;

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--accent-dark)", marginBottom: 24 }}>
        Blog
      </h1>
      {loading && <p>Loading blog posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && visiblePosts.length === 0 && <p>No blog posts found.</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {visiblePosts.map((post, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 2px 12px 0 #f8bbd0',
              padding: 28,
              transition: 'box-shadow 0.2s',
              border: '1px solid #f8bbd0',
            }}
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: '100%',
                  maxHeight: 260,
                  objectFit: 'cover',
                  borderRadius: 10,
                  marginBottom: 16,
                  boxShadow: '0 1px 6px 0 #f8bbd0',
                  background: '#eee',
                }}
                loading="lazy"
              />
            )}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <h2
                style={{
                  fontSize: 26,
                  color: 'var(--accent)',
                  fontWeight: 800,
                  marginBottom: 6,
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#ad1457')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--accent)')}
              >
                {post.title}
              </h2>
            </a>
            <p style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>
              {post.date ? new Date(post.date).toLocaleDateString() : ''}
            </p>
            <p style={{ fontSize: 18, color: '#ad1457', marginBottom: 0 }}>{post.excerpt}</p>
          </div>
        ))}
      </div>
      {canLoadMore && !loading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <button
            onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            style={{
              background: '#f8bbd0',
              color: '#ad1457',
              fontWeight: 700,
              fontSize: 18,
              padding: '12px 32px',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 #f8bbd0',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#ad1457';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#f8bbd0';
              e.currentTarget.style.color = '#ad1457';
            }}
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}

