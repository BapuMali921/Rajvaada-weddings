import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-32 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
          <div className="md:col-span-5 space-y-10">
            <div className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-white">
              Rajvaada<span className="text-gold">.</span>
            </div>
            <p className="text-white/60 font-light leading-loose text-lg max-w-md">
              Orchestrating bespoke royal weddings inspired by the heritage of Rajasthan. We turn historical grandeur into timeless modern celebrations.
            </p>
            <div className="flex space-x-8 pt-4">
              <a href="#" className="text-white/40 hover:text-gold transition-all hover:scale-110">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-all hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-10">
            <h4 className="text-xs font-bold tracking-[0.5em] uppercase text-gold opacity-80">The Palace</h4>
            <ul className="space-y-6 font-light text-white/70 text-lg">
              <li className="flex items-start space-x-4">
                <MapPin size={22} className="mt-1 text-gold/50 shrink-0" />
                <span className="leading-relaxed">
                  Civil Lines, Jaipur<br />
                  Rajasthan, India 302006
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={22} className="text-gold/50 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={22} className="text-gold/50 shrink-0" />
                <span>weddings@rajvaada.com</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-10">
            <h4 className="text-xs font-bold tracking-[0.5em] uppercase text-gold opacity-80">Discover</h4>
            <ul className="space-y-5 font-light text-white/70 text-lg">
              <li><a href="#about" className="hover:text-gold transition-all hover:pl-2">Our Story</a></li>
              <li><a href="#services" className="hover:text-gold transition-all hover:pl-2">Experiences</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-all hover:pl-2">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-all hover:pl-2">Inquiry</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.2em] uppercase font-bold text-white/20">
          <p>&copy; {new Date().getFullYear()} Rajvaada Weddings</p>
          <p className="mt-4 md:mt-0">Legacy of Luxury</p>
        </div>
      </div>
    </footer>
  );
}
