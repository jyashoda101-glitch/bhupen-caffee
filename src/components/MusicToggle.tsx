import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass flex items-center justify-center text-cafe-gold hover:bg-cafe-gold/10 transition-colors duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5 opacity-60" />
      )}

      {/* Sound wave animation */}
      {isPlaying && (
        <div className="absolute inset-0 rounded-full">
          <motion.div
            className="absolute inset-0 rounded-full border border-cafe-gold/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      )}
    </motion.button>
  );
}
