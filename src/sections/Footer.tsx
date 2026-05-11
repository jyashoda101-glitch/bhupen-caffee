import { Coffee, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Workspace', href: '#workspace' },
  { label: 'Reserve', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cafe-black border-t border-cafe-gold/10">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-cafe-gold/10 border border-cafe-gold/30 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-cafe-gold" />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-cafe-cream">Bhupen</span>
                <span className="font-playfair text-xl font-bold gold-text ml-1">Caffee</span>
              </div>
            </div>
            <p className="font-poppins text-sm text-cafe-cream/40 leading-relaxed max-w-xs">
              Coffee, Culture & Conversations. A premium cafe experience in the heart of Dhangadhi.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-cafe-cream/50 hover:text-cafe-gold hover:border-cafe-gold/30 transition-colors duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-cafe-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm text-cafe-cream/40 hover:text-cafe-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-cafe-cream mb-4">Visit Us</h4>
            <div className="space-y-3 font-poppins text-sm text-cafe-cream/40">
              <p>Dhangadhi-12, Jugeda Kailali, Nepal</p>
              <p>
                Phone:{' '}
                <a href="tel:+9779749723433" className="hover:text-cafe-gold transition-colors">
                  9749723433
                </a>
              </p>
              <p>Hours: Sun–Fri, 7:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cafe-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-cafe-cream/30">
            &copy; {new Date().getFullYear()} Bhupen Caffee. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-cafe-cream/40 hover:text-cafe-gold hover:border-cafe-gold/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
