import { motion } from 'framer-motion';
import { Wifi, Plug, Armchair, Volume2, Laptop, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const features = [
  {
    icon: Wifi,
    title: 'Fast WiFi',
    desc: 'High-speed fiber internet for seamless video calls, streaming, and downloads.',
  },
  {
    icon: Plug,
    title: 'Charging Ports',
    desc: 'Power outlets at every seat so your devices never run out of juice.',
  },
  {
    icon: Armchair,
    title: 'Comfortable Seating',
    desc: 'Ergonomic chairs and cozy corners designed for extended work sessions.',
  },
  {
    icon: Volume2,
    title: 'Quiet Environment',
    desc: 'A peaceful atmosphere that helps you focus and be productive.',
  },
  {
    icon: Laptop,
    title: 'Freelancer Friendly',
    desc: 'Open workspace areas with ample table space for laptops and notebooks.',
  },
  {
    icon: BookOpen,
    title: 'Student Haven',
    desc: 'The perfect study spot with a calm vibe and all-day coffee refills.',
  },
];

export default function Workspace() {
  return (
    <section id="workspace" className="section-padding relative overflow-hidden bg-cafe-dark/50">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cafe-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Work & Study"
          title="Your Productive Haven"
          description="Designed for the modern worker and student — a space where creativity flows and focus comes naturally."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover-lift relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cafe-gold/10 border border-cafe-gold/20 flex items-center justify-center mb-5 group-hover:bg-cafe-gold/15 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-cafe-gold" />
              </div>

              <h3 className="font-playfair text-xl font-bold text-cafe-cream mb-2">
                {feature.title}
              </h3>
              <p className="font-poppins text-sm text-cafe-cream/50 leading-relaxed">
                {feature.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cafe-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-cafe-cream mb-3">
              Ready to be productive?
            </h3>
            <p className="font-poppins text-sm text-cafe-cream/50 mb-6">
              Reserve your favorite spot and enjoy a perfect work-from-cafe day.
            </p>
            <a href="#reservation" className="btn-primary inline-block">
              Reserve a Spot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
