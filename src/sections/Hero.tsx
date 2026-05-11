import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/1402234/pexels-photo-1402234.jpeg?auto=compress&cs=tinysrgb&w=1920"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-pouring-a-cup-of-coffee-5897/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-cafe-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-cafe-black/40 via-transparent to-cafe-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto rounded-full border border-cafe-gold/30 bg-cafe-gold/5 flex items-center justify-center">
            <span className="font-playfair text-3xl font-bold gold-text">B</span>
          </div>
        </motion.div>

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-cafe-cream leading-tight max-w-4xl"
        >
          Coffee, Culture
          <br />
          <span className="gold-text">&amp; Conversations.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-poppins text-lg md:text-xl text-cafe-cream/60 max-w-xl leading-relaxed"
        >
          A peaceful premium coffee experience in the heart of Dhangadhi.
          Where every cup tells a story.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#reservation" className="btn-primary text-center">
            Reserve Table
          </a>
          <a href="#menu" className="btn-outline text-center">
            Explore Menu
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-poppins text-xs tracking-widest uppercase text-cafe-cream/40">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 text-cafe-gold/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-px h-8 bg-gradient-to-b from-transparent via-cafe-gold/20 to-transparent"
          />
        ))}
      </div>
    </section>
  );
}
