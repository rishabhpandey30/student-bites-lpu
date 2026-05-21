import { Link } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { posts } from "@/data/posts";
import { ArrowRight } from "lucide-react";

const Blog = () => (
  <>
    <SEO
      title="Blog | Cheap Eats & Student Food Guides Near LPU Punjab"
      description="Student food guides for LPU — top cheap eats near LPU Punjab, best student meals under ₹100, and where to eat cheap food near LPU campus."
      canonical="/blog"
      keywords="student meals near lpu, snacks under 100 near LPU, late night food near LPU, affordable restaurants near me, cheap meals near me, cheap food options near me, best affordable restaurants near me"
    />
    <section className="gradient-warm">
      <div className="container mx-auto py-16 md:py-20">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Student Food Blog</p>
        <h1 className="text-4xl md:text-6xl mt-2 max-w-3xl">Guides to the cheapest, tastiest eats near LPU</h1>
      </div>
    </section>
    <section className="container mx-auto py-16 grid md:grid-cols-3 gap-8">
      {posts.map(p => (
        <article key={p.slug} className="bg-card rounded-3xl p-8 shadow-card hover:shadow-warm transition-smooth">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{new Date(p.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} · {p.readTime}</p>
          <h2 className="text-2xl mt-3 mb-3">{p.title}</h2>
          <p className="text-muted-foreground mb-5">{p.excerpt}</p>
          <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-smooth">
            Read article <ArrowRight className="w-4 h-4"/>
          </Link>
        </article>
      ))}
    </section>
  </>
);

export default Blog;
