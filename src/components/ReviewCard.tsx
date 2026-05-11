import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Review } from '../data/menu';

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-2xl p-8 hover-lift relative overflow-hidden"
    >
      {/* Decorative quote */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-cafe-gold/10" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? 'text-cafe-gold fill-cafe-gold' : 'text-cafe-cream/20'
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="font-poppins text-sm text-cafe-cream/70 leading-relaxed mb-6">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cafe-gold/10 border border-cafe-gold/20 flex items-center justify-center">
          <span className="font-poppins text-xs font-semibold text-cafe-gold">
            {review.avatar}
          </span>
        </div>
        <div>
          <p className="font-poppins text-sm font-semibold text-cafe-cream">
            {review.name}
          </p>
          <p className="font-poppins text-xs text-cafe-cream/40">{review.role}</p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cafe-gold/20 to-transparent" />
    </motion.div>
  );
}
