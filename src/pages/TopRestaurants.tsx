import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";
import { ArrowRight, Star, MapPin } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const TopRestaurants = () => (
  <>
    <SEO
      title="Top Restaurants Near LPU | Best Student Food Spots | Student Bites"
      description="The top restaurants near LPU for students — ranked by taste, price and hygiene. Find the best places to eat around Lovely Professional University, Phagwara."
      canonical="/top-restaurants-lpu"
      keywords="top restaurants near LPU, best restaurants near LPU, student food near LPU, best food near LPU, affordable meals LPU, restaurants near Lovely Professional University"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroFood} alt="Top restaurants near LPU — best places for student food in Phagwara" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      <div className="container mx-auto py-24 md:py-32 text-primary-foreground">
        <span className="inline-flex items-center gap-2 bg-background/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium">
          <Star className="w-4 h-4" /> Student-rated picks
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          Top Restaurants Near Lovely Professional University (LPU)
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-95">
          The definitive list of <strong>top restaurants near LPU</strong> — ranked by LPU students for taste, price, hygiene and overall vibe.
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
        <h2 className="text-4xl md:text-5xl">Best Food Places for Students Around LPU</h2>
        <p>
          The list of <strong>top restaurants near LPU</strong> changes a little every semester, but the names that consistently stay at the top are the ones that respect student budgets and student schedules. From the early-morning chai stalls at Law Gate to the late-night dhabas opposite Uni Mall, the LPU food scene is built almost entirely around the rhythm of campus life.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Top Budget-Friendly Restaurants Near LPU</h2>
        <p>
          When students are asked which restaurants they'd recommend to a junior, three names come up again and again. Leading the pack is <Link to="/" className="text-primary underline">Student Bites</Link>, the long-standing favourite for <strong>affordable meals LPU</strong> students grew up on. Close behind are the Punjabi-style dhabas near Law Gate and the Indo-Chinese counters around Uni Mall — all serving generous portions at honest prices.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Cheap Eats Near LPU Under ₹200</h2>
        <p>
          Even among the <strong>best restaurants near LPU</strong>, value is what wins repeat customers. Most top picks here serve full meals under ₹200, including the famous ₹99 thali, ₹120 chole bhature plates, and ₹150 paneer combos. For a deeper dive into prices, head to our <Link to="/cheap-eats-lpu" className="text-primary underline">cheap eats near LPU under ₹200</Link> guide.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">How we rank the top student food near LPU</h2>
        <p>
          Each restaurant in this list is judged on five criteria: average price per meal, hygiene of the kitchen, portion size, opening hours, and student reviews. A spot only makes it onto the <strong>top restaurants near LPU</strong> shortlist if it scores well on all five — not just one or two. That's why this list is short, but every name on it is genuinely worth your time and money.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Tips to enjoy the best food near LPU on a budget</h2>
        <p>
          Visit popular spots in pairs or small groups so you can split combos. Always try the daily special — it's usually the freshest dish in the kitchen. Ask for the "student rate" at smaller dhabas; many quietly offer it. And once you find your favourite, become a regular — the best food near LPU always tastes a little better when the cook already knows your order.
        </p>

        <div className="flex flex-wrap gap-3 pt-6">
          <Button asChild variant="hero" size="lg"><Link to="/best-food-near-lpu">Best Food Near LPU</Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/menu">Browse Menu</Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default TopRestaurants;