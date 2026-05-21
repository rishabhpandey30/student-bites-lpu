import { SEO } from "@/components/seo/SEO";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => (
  <>
    <SEO
      title="Contact | Student Bites Restaurant Near LPU Campus"
      description="Visit Student Bites at Law Gate near LPU campus, Phagwara, Punjab. Open 9 AM – 1 AM daily. Call +91 98765 43210 to order cheap food near LPU Punjab."
      canonical="/contact"
      keywords="student meals near lpu, snacks under 100 near LPU, late night food near LPU, affordable restaurants near me, cheap meals near me, cheap food options near me, best affordable restaurants near me"
    />
    <section className="gradient-warm">
      <div className="container mx-auto py-16 md:py-20">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm">Visit / Call</p>
        <h1 className="text-4xl md:text-6xl mt-2 max-w-3xl">Find Student Bites near LPU campus, Phagwara</h1>
      </div>
    </section>
    <section className="container mx-auto py-16 grid lg:grid-cols-2 gap-10">
      <div className="space-y-6">
        {[
          { icon: MapPin, title: "Address", text: "Law Gate, Near Lovely Professional University, Phagwara, Punjab 144411, India" },
          { icon: Phone, title: "Phone", text: "+91 98765 43210", href: "tel:+919876543210" },
          { icon: Mail, title: "Email", text: "hello@studentbites.in", href: "mailto:hello@studentbites.in" },
          { icon: Clock, title: "Opening Hours", text: "Monday – Sunday · 9:00 AM – 1:00 AM" },
        ].map(c => (
          <div key={c.title} className="flex gap-4 bg-card p-6 rounded-2xl shadow-card">
            <div className="w-12 h-12 rounded-xl gradient-spice grid place-items-center text-primary-foreground shrink-0">
              <c.icon className="w-5 h-5"/>
            </div>
            <div>
              <h2 className="text-xl">{c.title}</h2>
              {c.href ? <a className="text-muted-foreground hover:text-primary" href={c.href}>{c.text}</a> : <p className="text-muted-foreground">{c.text}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-3xl overflow-hidden shadow-warm aspect-square lg:aspect-auto min-h-[400px]">
        <iframe
          title="Student Bites location near LPU Phagwara"
          src="https://www.google.com/maps?q=Lovely+Professional+University,+Phagwara,+Punjab&output=embed"
          loading="lazy"
          className="w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </>
);

export default Contact;
