import { SEO } from "@/components/seo/SEO";
import interior from "@/assets/restaurant-interior.jpg";
import { Heart, Users, Sparkles } from "lucide-react";

const About = () => (
  <>
    <SEO
      title="About Student Bites | Affordable Restaurant Near LPU Punjab"
      description="Learn the story of Student Bites — an affordable restaurant near LPU built by an ex-LPU student to serve quality, cheap food near LPU Punjab."
      canonical="/about"
      keywords="affordable restaurant near LPU, student restaurant near LPU, best restaurant in Phagwara Punjab"
    />
    <section className="container mx-auto py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Story</p>
        <h1 className="text-4xl md:text-6xl mt-2 mb-6">Built by an LPU student. Cooked for LPU students.</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Student Bites started in 2019 inside a tiny one-room kitchen at Law Gate. Our founder, Arjun, was a final-year LPU student who couldn't find a single affordable restaurant near LPU that served filling, hygienic, home-style food at student prices.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          So he opened one. He started with two dishes — chole bhature and a ₹50 mini-thali. Five years later, we serve over 800 LPU students every single day and are consistently rated the best budget restaurant near LPU Punjab.
        </p>
        <p className="text-lg text-muted-foreground">
          We still cook the way Arjun's mother taught him: fresh ingredients, hand-ground masalas, and portions sized for hungry college students.
        </p>
      </div>
      <img src={interior} alt="Student Bites restaurant interior near LPU Phagwara Punjab" loading="lazy"
           width={1400} height={900} className="rounded-3xl shadow-warm w-full h-auto" />
    </section>

    <section className="bg-muted/40 py-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {[
          { icon: Heart, title: "Quality first", text: "Fresh produce sourced daily from Phagwara mandi. Nothing pre-cooked, nothing reheated." },
          { icon: Users, title: "Student-led pricing", text: "Every quarter we review our menu and lower prices wherever we can. Students > margins." },
          { icon: Sparkles, title: "Hygienic kitchen", text: "Open kitchen, daily hygiene checks and FSSAI-certified processes you can see for yourself." },
        ].map(v => (
          <article key={v.title} className="bg-card rounded-3xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-2xl gradient-spice grid place-items-center text-primary-foreground mb-4">
              <v.icon className="w-6 h-6"/>
            </div>
            <h2 className="text-2xl mb-2">{v.title}</h2>
            <p className="text-muted-foreground">{v.text}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default About;
