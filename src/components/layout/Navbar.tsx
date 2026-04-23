import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/cheap-food-near-lpu", label: "Cheap Eats" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-smooth ${scrolled ? "bg-background/90 backdrop-blur shadow-soft" : "bg-background/60 backdrop-blur-sm"}`}>
      <nav className="container mx-auto flex items-center justify-between py-4" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl" aria-label="Student Bites home">
          <span className="grid place-items-center w-10 h-10 rounded-full gradient-spice text-primary-foreground shadow-soft">
            <UtensilsCrossed className="w-5 h-5" />
          </span>
          <span className="font-[Playfair_Display] text-2xl">Student <span className="text-primary">Bites</span></span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-smooth hover:bg-muted ${isActive ? "text-primary" : "text-foreground"}`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/menu">Order Now</Link>
          </Button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="container mx-auto py-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg ${isActive ? "bg-muted text-primary" : ""}`
                  }
                  end={l.to === "/"}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button asChild variant="hero" className="w-full mt-2">
                <Link to="/menu" onClick={() => setOpen(false)}>Order Now</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
