import { useMemo, useState } from "react";
import { SEO } from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from "lucide-react";
import { menu, type Category } from "@/data/menu";
import { toast } from "@/hooks/use-toast";

const categories: ("All" | Category)[] = ["All", "Snacks", "Meals", "Beverages"];

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Student Bites Menu — Cheap Food Near LPU Punjab",
  hasMenuSection: ["Snacks", "Meals", "Beverages"].map(section => ({
    "@type": "MenuSection",
    name: section,
    hasMenuItem: menu.filter(m => m.category === section).map(m => ({
      "@type": "MenuItem",
      name: m.name,
      description: m.description,
      offers: { "@type": "Offer", price: m.price, priceCurrency: "INR" }
    }))
  }))
};

const Menu = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return menu.filter(m =>
      (active === "All" || m.category === active) &&
      (q.trim() === "" || m.name.toLowerCase().includes(q.toLowerCase()) || m.description.toLowerCase().includes(q.toLowerCase()))
    );
  }, [active, q]);

  return (
    <>
      <SEO
        title="Menu | Affordable Student Meals & Snacks Under ₹100 Near LPU"
        description="Explore the Student Bites menu — cheap food near LPU Punjab including snacks, full meals and beverages. Affordable student meals starting at ₹20."
        canonical="/menu"
        keywords="student meals under 100 near LPU, snacks under 100 near LPU, cheap food near LPU Punjab, affordable restaurant near LPU"
        jsonLd={menuSchema}
      />

      <section className="gradient-warm">
        <div className="container mx-auto py-16 md:py-20">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Menu</p>
          <h1 className="text-4xl md:text-6xl mt-2 max-w-3xl">Cheap food near LPU Punjab — built for students</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            From ₹20 tandoori chai to a ₹99 student thali, every item on our menu is priced for LPU students. Search, filter and order your favourite affordable meal.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the menu…"
                     className="pl-11 h-12 rounded-full bg-background" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button key={c} onClick={() => setActive(c)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${active === c ? "gradient-spice text-primary-foreground shadow-soft" : "bg-background hover:bg-muted"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No dishes match — try another search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(d => (
              <article key={d.id} className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={d.image} alt={d.alt} loading="lazy" width={800} height={600}
                       className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                  {d.tag && <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-background/95 font-semibold text-primary">{d.tag}</span>}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h2 className="text-xl">{d.name}</h2>
                    <span className="font-bold text-primary text-lg whitespace-nowrap">₹{d.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{d.description}</p>
                  <Button variant="hero" size="sm" className="w-full"
                          onClick={() => toast({ title: "Added to cart", description: `${d.name} — ₹${d.price}` })}>
                    <ShoppingBag className="w-4 h-4"/> Order Now
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Menu;
