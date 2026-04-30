import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";
import { ArrowRight, Star, MapPin, Clock, IndianRupee, Flame, Salad, Coffee } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import { menu } from "@/data/menu";
import { reviews } from "@/data/reviews";

const featured = menu.filter(m => ["thali", "samosa", "paneer", "chai", "chowmein", "burger"].includes(m.id));

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Student Bites",
  image: "https://studentbites.in/og-image.jpg",
  "@id": "https://studentbites.in",
  url: "https://studentbites.in",
  telephone: "+91-98765-43210",
  priceRange: "₹",
  servesCuisine: ["Indian", "Punjabi", "Indo-Chinese", "Snacks"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Law Gate, Near LPU",
    addressLocality: "Phagwara",
    addressRegion: "Punjab",
    postalCode: "144411",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.2560, longitude: 75.7050 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00", closes: "01:00",
  }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1284" },
};

const Home = () => {
  return (
    <>
      <SEO
        title="Best Student Food Near LPU | Affordable Meals | Student Bites"
        description="Discover the best and cheapest food options near Lovely Professional University (LPU). Explore student-friendly restaurants, affordable meals, and top food spots."
        canonical="/"
        keywords="student food near LPU, cheap food near LPU, best restaurants near LPU, affordable meals LPU, best food near LPU, top restaurants near LPU, cheap eats LPU, ₹99 thali near LPU, snacks under 100 near LPU, late night food near LPU, food near Lovely Professional University, restaurants near LPU campus, dhaba near LPU, cafe near LPU, food near LPU Law Gate, food near LPU hostel, food delivery near LPU, student combo meal near LPU, best restaurant in Phagwara Punjab"
        jsonLd={restaurantSchema}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroFood} alt="Best budget restaurant near LPU Punjab — Indian thali, samosa, paneer and lassi" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="container mx-auto py-24 md:py-36 text-primary-foreground">
          <span className="inline-flex items-center gap-2 bg-background/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium">
            <MapPin className="w-4 h-4" /> Law Gate, Phagwara — 2 min from LPU
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-balance leading-[1.05]">
            Affordable Student Food Near Lovely Professional University (LPU)
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-95">
            The best budget restaurant near LPU Punjab. Hot thalis from ₹99, snacks under ₹100, masala chai at ₹20 — served fresh till 1 AM, every single day.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl" className="bg-background text-primary hover:bg-background/90">
              <Link to="/top-restaurants-lpu">Explore Restaurants <ArrowRight className="w-5 h-5"/></Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-transparent border-background/60 text-primary-foreground hover:bg-background/15">
              <Link to="/cheap-eats-lpu">Find Cheap Food Near You</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-current"/> 4.8 / 5 (1,284 students)</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> Open till 1 AM</div>
            <div className="flex items-center gap-2"><IndianRupee className="w-4 h-4"/> Meals from ₹49</div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: IndianRupee, title: "Truly Student Pricing", text: "Every dish is built around an LPU student's wallet. No hidden charges, no inflated café prices — just honest, cheap food near LPU Punjab." },
            { icon: Flame, title: "Fresh Punjabi Flavours", text: "Spices ground in-house, dough kneaded daily, and recipes from a Phagwara family kitchen. The best restaurant in Phagwara Punjab for desi taste." },
            { icon: Clock, title: "Open Till 1 AM", text: "Late-night assignment? We've got you covered with hot maggi, chai and snacks long after most restaurants near LPU campus close." },
          ].map((f) => (
            <article key={f.title} className="bg-card rounded-3xl p-8 shadow-card hover:shadow-warm transition-smooth hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl gradient-spice grid place-items-center text-primary-foreground mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="container mx-auto py-12">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Featured</p>
            <h2 className="text-4xl md:text-5xl mt-2">Most-loved dishes by LPU students</h2>
          </div>
          <Button asChild variant="soft" size="lg"><Link to="/menu">View Full Menu <ArrowRight className="w-4 h-4"/></Link></Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((d) => (
            <article key={d.id} className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.alt} loading="lazy" width={800} height={600}
                     className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl">{d.name}</h3>
                  <span className="font-bold text-primary">₹{d.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{d.description}</p>
                {d.tag && <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-secondary/30 text-secondary-foreground font-medium">{d.tag}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEO CONTENT — long form */}
      <section className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto prose-content space-y-6 text-lg leading-relaxed text-foreground/90">
          <h2 className="text-4xl md:text-5xl">Why Student Bites is the Best Budget Restaurant Near LPU Punjab</h2>
          <p>
            Lovely Professional University attracts students from every corner of India, and along with new friends and lectures comes one universal question — <strong>where do I eat cheap food near LPU Punjab without compromising on taste?</strong> Student Bites was built specifically to answer that question. Located right at Law Gate in Phagwara, just two minutes from the LPU campus, we serve fresh, home-style Indian food at prices a student can actually afford.
          </p>
          <h3 className="text-2xl mt-8">An affordable restaurant near LPU built around student life</h3>
          <p>
            Our story started in 2019 when our founder, a former LPU student himself, realised how hard it was to find an <strong>affordable restaurant near LPU</strong> that didn't either skimp on portions or charge café prices. Most restaurants near LPU campus push fancy menus that look great on Instagram but leave a hostelite's wallet empty by the 15th of the month. Student Bites flipped that idea — we make our menu around what students actually want: hot, filling, spicy meals that cost less than a movie ticket.
          </p>
          <h3 className="text-2xl mt-8">Best student meals under ₹100 near LPU</h3>
          <p>
            Our most-ordered dish is the Student Special Thali at just ₹99. With dal, sabzi, two soft rotis, rice, raita and a sweet bite, it's easily the <strong>best student meal under ₹100 near LPU</strong>. Pair it with our ₹20 tandoori masala chai and you have a complete meal under ₹120 — something even your hostel mess can't match. We also rotate weekly specials like rajma chawal, kadhi chawal and choley kulche so your daily lunch never feels repetitive.
          </p>
          <h3 className="text-2xl mt-8">Cheap eats near LPU Punjab — snacks under ₹100</h3>
          <p>
            Between classes, our snack menu is where the magic happens. Crispy Punjabi samosas at ₹25, hostel-style cheese maggi at ₹70, veg hakka chowmein at ₹80 and the famous aloo tikki burger at ₹60 — all of them are <strong>snacks under ₹100 near LPU</strong> that have become daily essentials for thousands of LPU students. No matter how late you walk in, the kadhai stays hot till 1 AM, making us the go-to <strong>student restaurant near LPU</strong> for night-owls and assignment warriors.
          </p>
          <h3 className="text-2xl mt-8">Where to eat cheap food near LPU Punjab — and why we top the list</h3>
          <p>
            Phagwara has dozens of options, but the question of <strong>where to eat cheap food near LPU Punjab</strong> always comes back to three things: hygiene, consistency and price. Our open kitchen is visible from the seating area, our staff follows daily hygiene checks, and our pricing has barely moved in three years. That's why students consistently rate us the <strong>best restaurant in Phagwara Punjab</strong> for budget dining.
          </p>
          <h3 className="text-2xl mt-8">Built for the LPU community</h3>
          <p>
            We're more than a restaurant — we're part of the LPU food ecosystem. We host monthly student combos during exam weeks, free chai refills on rainy days, and special discounts for first-year students still figuring out Phagwara. If you're searching for the <strong>best budget restaurant for students near LPU</strong>, swing by Law Gate today. One meal and you'll understand why thousands of LPU students call Student Bites their second mess.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild variant="hero" size="lg"><Link to="/menu">Browse Menu</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/blog">Read Student Food Guides</Link></Button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Student Reviews</p>
            <h2 className="text-4xl md:text-5xl mt-2">Loved by LPU students</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <article key={r.name} className="bg-card rounded-3xl p-6 shadow-card hover:shadow-warm transition-smooth">
                <div className="flex gap-1 text-secondary mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                </div>
                <p className="text-foreground/90 mb-4 italic">"{r.text}"</p>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.course}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-20">
        <div className="rounded-3xl gradient-spice p-10 md:p-16 text-primary-foreground shadow-warm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl mb-2">Hungry already?</h2>
            <p className="opacity-90">Order from the best budget restaurant near LPU Punjab — your thali is 99 rupees away.</p>
          </div>
          <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90">
            <Link to="/menu">Order Now <ArrowRight/></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
