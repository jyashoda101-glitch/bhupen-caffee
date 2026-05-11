import { motion } from 'framer-motion';
import { Coffee, Wifi, Users, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const highlights = [
  { icon: Coffee, label: 'Premium Coffee', desc: 'Hand-selected beans from the hills of Nepal' },
  { icon: Wifi, label: 'Fast WiFi', desc: 'High-speed internet for work and study' },
  { icon: Users, label: 'Community Space', desc: 'A welcoming place for everyone' },
  { icon: Heart, label: 'Made with Love', desc: 'Every cup crafted with passion' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cafe-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Story"
          title="Where Coffee Meets Culture"
          description="Nestled in the heart of Dhangadhi, Bhupen Caffee is more than a cafe — it's a sanctuary for coffee lovers, thinkers, and dreamers."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/894395/pexels-photo-894395.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bhupen Caffee interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-black/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl"
            >
              <p className="font-playfair text-3xl font-bold gold-text">5+</p>
              <p className="font-poppins text-xs text-cafe-cream/60">Years of serving</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-base text-cafe-cream/70 leading-relaxed mb-6">
              At Bhupen Caffee, we believe that great coffee brings people together.
              Located in Dhangadhi-12, Jugeda Kailali, our cafe offers a peaceful retreat
              from the bustle of everyday life — a place where students can focus,
              families can bond, and remote workers can thrive.
            </p>
            <p className="font-poppins text-base text-cafe-cream/70 leading-relaxed mb-10">
              With premium coffee sourced from the finest Nepali hills, fast WiFi,
              comfortable modern seating, and a relaxing environment, we've created
              a space that feels like home — but better.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card rounded-xl p-4 group hover:border-cafe-gold/20 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-cafe-gold mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-poppins text-sm font-semibold text-cafe-cream mb-1">
                    {item.label}
                  </p>
                  <p className="font-poppins text-xs text-cafe-cream/40">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
