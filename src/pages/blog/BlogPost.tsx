import { useParams, Link, Navigate } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const firstImg = post.body.find(b => b.type === "img") as { type: "img"; src: string; alt: string } | undefined;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: firstImg ? [firstImg.src] : undefined,
    author: { "@type": "Organization", name: "Student Bites" },
    publisher: { "@type": "Organization", name: "Student Bites" },
    mainEntityOfPage: `https://student-bites-lpu.lovable.app/blog/${post.slug}`,
  };

  return (
    <>
      <SEO title={`${post.title} | Student Bites`} description={post.excerpt}
           canonical={`/blog/${post.slug}`} jsonLd={articleSchema} />
      <article className="container mx-auto py-16 max-w-3xl">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Student Food Guide</p>
        <h1 className="text-4xl md:text-5xl mt-2 mb-6 text-balance">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">{new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "long" })} · {post.readTime}</p>
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="text-2xl md:text-3xl mt-8">{block.text}</h2>;
            if (block.type === "img") return (
              <img key={i} src={block.src} alt={block.alt} loading="lazy" width={1200} height={800}
                   className="w-full rounded-2xl shadow-card my-6" />
            );
            return <p key={i}>{block.text}</p>;
          })}
        </div>
        <div className="mt-12 flex gap-3">
          <Button asChild variant="hero" size="lg"><Link to="/menu">Browse the Menu</Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/blog">More Guides</Link></Button>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
