import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";
import { ArrowRight, MapPin, Star, IndianRupee } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const BestFood = () => (
  <>
    <SEO
      title="Best Food Near LPU | Top Student Restaurants Phagwara | Student Bites"
      description="Explore the best food near LPU. A curated guide to top student restaurants, must-try dishes and affordable meals near Lovely Professional University, Phagwara."
      canonical="/best-food-near-lpu"
      keywords="best food near LPU, best restaurants near LPU, student food near LPU, top food places near LPU, food near Lovely Professional University, affordable meals near me"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroFood} alt="Best food near LPU — top student restaurants in Phagwara" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      <div className="container mx-auto py-24 md:py-32 text-primary-foreground">
        <span className="inline-flex items-center gap-2 bg-background/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium">
          <MapPin className="w-4 h-4" /> Phagwara, Punjab
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          Best Food Near Lovely Professional University (LPU)
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-95">
          A student-tested guide to the best food near LPU — from ₹99 thalis to late-night maggi, find every great bite around the LPU campus in Phagwara.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl" className="bg-background text-primary hover:bg-background/90">
            <Link to="/menu">Explore Restaurants <ArrowRight className="w-5 h-5"/></Link>
          </Button>
          <Button asChild variant="outline" size="xl" className="bg-transparent border-background/60 text-primary-foreground hover:bg-background/15">
            <Link to="/cheap-eats-lpu">Find Cheap Food Near You</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/90">
        <h2 className="text-4xl md:text-5xl">Top Budget-Friendly Restaurants Near LPU</h2>
        <p>
          Searching for the <strong>best food near LPU</strong> can feel overwhelming when there are dozens of dhabas, cafés and quick-bite joints lining Law Gate, Uni Mall and the Jalandhar–Phagwara highway. This guide narrows down the most loved <strong>student food near LPU</strong> based on price, taste, hygiene and how friendly each spot is to a student wallet.
        </p>
        <p>
          At the top of nearly every list is <Link to="/" className="text-primary underline">Student Bites at Law Gate</Link> — known for its ₹99 thali, late-night kitchen and consistently fresh Punjabi cooking. It's one of the few <strong>best restaurants near LPU</strong> built specifically for hostelites, day-scholars and PG students who want filling meals without paying café prices. Other strong picks include local dhabas serving rajma chawal, North-Indian tiffin services, and Indo-Chinese stalls that stay open well past midnight.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Best Food Places for Students Around LPU</h2>
        <p>
          The food scene around LPU has grown into a small ecosystem of its own. From quick samosa-chai stops between lectures to sit-down family-style dinners, students can find something that fits every mood and budget. Cafés near Uni Mall are great for group study sessions, while dhabas closer to the hostel gates are perfect for hot tandoori rotis after late-night assignment crunches.
        </p>
        <p>
          When ranking the <strong>best food near LPU</strong>, we look at four things: portion size, price, hygiene, and consistency. A restaurant that delivers tasty food once is good — one that does it for three years straight is what makes it a true student favourite. Student Bites earns its spot by ticking all four boxes day after day, year after year.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Why students need affordable meals near LPU</h2>
        <p>
          Most LPU students live on a fixed monthly budget. Tuition, hostel fees and books already eat up the bigger numbers, so daily food spending becomes the variable that decides whether the month ends comfortably. Choosing <strong>affordable meals near me</strong> students can rely on — instead of expensive cafés or food apps with delivery charges — can easily save ₹2,000–₹4,000 a month.
        </p>
        <p>
          That's why this guide focuses on real, walkable, sit-down options near the LPU campus. Whether you want the <strong>best restaurants near LPU</strong> for a Sunday treat or quick <strong>cheap food near LPU</strong> on a Tuesday afternoon, the spots covered here have been chosen for value first, taste second, and never compromise either.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Tips to find the best student food near LPU</h2>
        <p>
          1. Walk before you scroll — the best dhabas are rarely on food apps. 2. Ask seniors; they've already tested every plate. 3. Look for places with a visible kitchen — open kitchens usually mean better hygiene. 4. Stick to thalis and combos for the best price-per-bite ratio. 5. Avoid peak hours (1–2 PM) at the most popular spots so your food comes hot and fresh.
        </p>

        <div className="flex flex-wrap gap-3 pt-6">
          <Button asChild variant="hero" size="lg"><Link to="/cheap-eats-lpu">See Cheap Eats Under ₹200</Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/top-restaurants-lpu">Top Restaurants Near LPU</Link></Button>
        </div>
      </div>
    </section>

    <section className="container mx-auto pb-20">
      <div className="rounded-3xl gradient-spice p-10 md:p-14 text-primary-foreground shadow-warm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl mb-2 flex items-center gap-2"><Star className="w-7 h-7"/> Try the #1 Pick</h2>
          <p className="opacity-95">Student Bites — voted the best food near LPU by 1,200+ students. Thalis from ₹99, open till 1 AM.</p>
        </div>
        <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90">
          <Link to="/menu">Explore Menu <IndianRupee className="w-5 h-5"/></Link>
        </Button>
      </div>
    </section>
  </>
);

export default BestFood;