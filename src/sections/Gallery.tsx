import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { galleryImages } from '../data/menu';

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const totalSlides = galleryImages.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [totalSlides]);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Instagram"
          title="Visual Stories"
          description="A glimpse into the Bhupen Caffee experience — follow us @bhupencaffee"
        />

        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '1/2' : '1/1' }}
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cafe-black/0 group-hover:bg-cafe-black/40 transition-colors duration-300" />

              {/* Instagram icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-8 h-8 text-cafe-cream" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-sliding indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-cafe-gold' : 'bg-cafe-cream/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-cafe-gold font-poppins text-sm font-medium hover:bg-cafe-gold/10 transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            Follow @bhupencaffee
          </a>
        </motion.div>
      </div>
    </section>
  );
}
