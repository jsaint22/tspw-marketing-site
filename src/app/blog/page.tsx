import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Financial planning insights for professional hockey players — jock tax, cross-border planning, compressed earning windows, and more.",
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
}

function getPosts(): PostMeta[] {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        author: data.author || "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Financial planning for the players who need it most.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            No jargon. No generic advice. Just practical insights built for
            professional hockey players.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-steel">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-neutral-bg rounded-xl p-6 sm:p-8 border border-neutral-bg hover:shadow-md transition-shadow"
                >
                  <p className="text-xs text-steel uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {post.author && ` · ${post.author}`}
                  </p>
                  <h2 className="text-xl font-bold text-primary mt-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="inline-block mt-3 text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
