import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-cafe-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 rounded-full border-2 border-cafe-gold/30 flex items-center justify-center mb-6"
      >
        <Coffee className="w-10 h-10 text-cafe-gold" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-playfair text-2xl font-bold text-cafe-cream"
      >
        Bhupen <span className="gold-text">Caffee</span>
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
        className="h-0.5 bg-gradient-to-r from-transparent via-cafe-gold to-transparent mt-4"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="font-poppins text-xs text-cafe-cream/40 mt-3 tracking-widest uppercase"
      >
        Loading experience...
      </motion.p>
    </motion.div>
  );
}
