import { Link } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";

const cheap = menu.filter(m => m.price <= 100);

const CheapFood = () => (
  <>
    <SEO
      title="Cheap Food Near LPU Punjab | Snacks & Meals Under ₹100"
      description="The cheapest food near LPU Punjab. See every snack and student meal under ₹100 at Student Bites — the best budget restaurant near LPU campus."
      canonical="/cheap-food-near-lpu"
      keywords="cheap food near LPU Punjab, best snacks under 100 near LPU, where to eat cheap food near LPU Punjab, student meals under 100 near LPU, budget food near LPU, pocket friendly restaurant near LPU, ₹99 thali near LPU, ₹20 chai near LPU, hostel food near LPU, late night cheap food near LPU, midnight snacks near LPU, food under 50 near LPU, food under 100 near LPU Phagwara, cheapest dhaba near LPU, affordable veg restaurant near LPU, value for money restaurant near LPU, student discount restaurant near LPU"
    />
    <section className="gradient-warm">
      <div className="container mx-auto py-16 md:py-20 max-w-4xl">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Under ₹100</p>
        <h1 className="text-4xl md:text-6xl mt-2 mb-4 text-balance">Cheap Food Near LPU Punjab — Everything Under ₹100</h1>
        <p className="text-lg text-muted-foreground">
          Hunting for where to eat cheap food near LPU Punjab? This page lists every snack and student meal at Student Bites priced under ₹100 — the easiest way for LPU students to plan a full day of eating without crossing budget.
        </p>
      </div>
    </section>

    <section className="container mx-auto py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cheap.map(d => (
          <article key={d.id} className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth">
            <img src={d.image} alt={d.alt} loading="lazy" width={800} height={600} className="w-full aspect-[4/3] object-cover"/>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl">{d.name}</h2>
                <span className="font-bold text-primary">₹{d.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{d.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto space-y-4 text-lg leading-relaxed text-foreground/90">
        <h2 className="text-3xl">Best snacks under ₹100 near LPU</h2>
        <p>
          Our snacks menu is purposely engineered for LPU students rushing between blocks. The samosa-chai combo at ₹45 is the cheapest energy refill on Law Gate, while the ₹70 cheese maggi has become a hostel-room legend. Whether you want a quick bite or a sit-down catch-up with friends, every option here qualifies as <strong>best snacks under ₹100 near LPU</strong>.
        </p>
        <h2 className="text-3xl mt-8">Student meals under ₹100 near LPU</h2>
        <p>
          Our headline ₹99 thali is the best student meal under ₹100 near LPU — a complete plate with dal, sabzi, rotis, rice and raita. Add chole bhature at ₹90 and veg chowmein at ₹80, and you have three full meals a day under ₹300. That's the kind of math that makes Student Bites the most affordable restaurant near LPU.
        </p>
        <div className="pt-4">
          <Button asChild variant="hero" size="lg"><Link to="/menu">See Full Menu</Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default CheapFood;
