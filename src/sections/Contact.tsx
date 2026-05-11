import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Dhangadhi-12, Jugeda Kailali, Nepal',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '9749723433',
    href: 'tel:+9779749723433',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@bhupencaffee.com',
    href: 'mailto:hello@bhupencaffee.com',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Sun–Fri: 7:00 AM – 10:00 PM',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-cafe-dark/50">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cafe-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Get in Touch"
          title="Visit Us Today"
          description="We'd love to welcome you. Drop by or reach out — we're always here for you."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-cafe-gold/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-cafe-gold/10 border border-cafe-gold/20 flex items-center justify-center shrink-0 group-hover:bg-cafe-gold/15 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-cafe-gold" />
                </div>
                <div>
                  <p className="font-poppins text-xs text-cafe-cream/40 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-poppins text-sm text-cafe-cream hover:text-cafe-gold transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-poppins text-sm text-cafe-cream">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden h-80 lg:h-auto"
          >
            <iframe
              title="Bhupen Caffee Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13930.98!2d80.59!3d28.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDhangadhi%2C%20Nepal!5e0!3m2!1sen!2snp!4v1"
              className="w-full h-full min-h-[320px] border-0 opacity-70 hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
