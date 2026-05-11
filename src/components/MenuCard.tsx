import { motion } from 'framer-motion';
import type { MenuItem } from '../data/menu';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden hover-lift"
    >
      {/* Card */}
      <div className="relative h-80 glass-card rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cafe-black via-cafe-black/60 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Icon badge */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon className="w-5 h-5 text-cafe-gold" />
          </div>

          {/* Info */}
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="font-playfair text-2xl font-bold text-cafe-cream mb-1">
              {item.name}
            </h3>
            <p className="font-poppins text-sm text-cafe-cream/60 mb-3 line-clamp-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-poppins text-lg font-semibold gold-text">
                {item.price}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 text-xs font-poppins font-medium bg-cafe-gold/10 border border-cafe-gold/30 text-cafe-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cafe-gold/20"
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-cafe-gold/0 group-hover:border-cafe-gold/20 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}
