import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";
import { ArrowRight, IndianRupee, MapPin } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const CheapEats = () => (
  <>
    <SEO
      title="Cheap Eats Near LPU Under ₹200 | Affordable Meals | Student Bites"
      description="The ultimate list of cheap eats near LPU under ₹200. Affordable meals, snacks and student combos around Lovely Professional University, Phagwara."
      canonical="/cheap-eats-lpu"
      keywords="cheap eats LPU, cheap food near LPU, affordable meals LPU, student food near LPU, snacks under 100 near LPU, ₹99 thali near LPU, budget food near LPU"
    />

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroFood} alt="Cheap eats near LPU under ₹200 — affordable meals for students" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      <div className="container mx-auto py-24 md:py-32 text-primary-foreground">
        <span className="inline-flex items-center gap-2 bg-background/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium">
          <IndianRupee className="w-4 h-4" /> Under ₹200
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          Cheap Eats Near LPU Under ₹200
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-95">
          A complete list of <strong>cheap food near LPU</strong> — every dish, combo and chai under ₹200, hand-picked for hungry LPU students.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl" className="bg-background text-primary hover:bg-background/90">
            <Link to="/menu">Find Cheap Food Near You <ArrowRight className="w-5 h-5"/></Link>
          </Button>
          <Button asChild variant="outline" size="xl" className="bg-transparent border-background/60 text-primary-foreground hover:bg-background/15">
            <Link to="/best-food-near-lpu">Best Food Near LPU</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/90">
        <h2 className="text-4xl md:text-5xl">Cheap Eats Near LPU Under ₹200</h2>
        <p>
          Living near campus shouldn't drain your wallet. This guide rounds up the best <strong>cheap eats LPU</strong> students rely on every single day — from ₹25 samosas to ₹99 thalis, ₹70 maggi bowls and ₹180 combo platters that include a drink. Every option here is real, walkable from the LPU gates, and proven by hundreds of student orders.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Top Budget-Friendly Restaurants Near LPU</h2>
        <p>
          The <strong>cheap food near LPU</strong> scene is dominated by three categories: dhabas, snack stalls and student-focused restaurants. Dhabas like the ones around Law Gate serve full North-Indian thalis at ₹99–₹150. Snack stalls near Uni Mall offer momos, rolls, and chowmein in the ₹50–₹100 range. And student-focused spots like Student Bites combine both — full meals plus snacks plus chai, all under ₹200.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Why students need affordable food near LPU</h2>
        <p>
          A typical LPU hostelite spends ₹150–₹300 on food per day. Multiply that by 30 days and food alone becomes a ₹6,000–₹9,000 monthly bill. Choosing <strong>affordable meals LPU</strong> students actually enjoy — instead of overpriced food apps — can cut that nearly in half. That's a phone EMI, a Goa trip, or three months of Netflix saved every semester.
        </p>

        <h2 className="text-4xl md:text-5xl mt-10">Popular cheap food options near LPU</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>₹99 Student Thali</strong> — dal, sabzi, 2 rotis, rice, raita, sweet</li>
          <li><strong>Cheese Maggi</strong> — ₹70, perfect for late-night assignments</li>
          <li><strong>Veg Hakka Chowmein</strong> — ₹80, full plate</li>
          <li><strong>Aloo Tikki Burger</strong> — ₹60, hostel favourite</li>
          <li><strong>Masala Chai + Samosa Combo</strong> — ₹45</li>
          <li><strong>Chole Bhature</strong> — ₹120, weekend special</li>
          <li><strong>Paneer Roll</strong> — ₹90, post-class snack</li>
        </ul>

        <h2 className="text-4xl md:text-5xl mt-10">Tips to save money on food near LPU</h2>
        <p>
          Group orders unlock combo discounts. Eating at off-peak hours often gets you fresher food and faster service. Sticking to thalis instead of à-la-carte saves 30–40%. And building a habit at one or two trusted spots — like Student Bites — usually means free chai refills, loyalty perks, and the kind of treatment food apps will never offer.
        </p>

        <div className="flex flex-wrap gap-3 pt-6">
          <Button asChild variant="hero" size="lg"><Link to="/menu">Explore Restaurants</Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/top-restaurants-lpu">Top Restaurants Near LPU</Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default CheapEats;