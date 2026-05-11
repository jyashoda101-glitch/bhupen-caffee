import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ subtitle, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="inline-block font-poppins text-sm font-medium tracking-[0.2em] uppercase text-cafe-gold/80 mb-3">
        {subtitle}
      </span>
      <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cafe-cream leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-poppins text-base text-cafe-cream/60 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 flex items-center gap-3 justify-center">
        <div className="w-8 h-px bg-cafe-gold/40" />
        <div className="w-2 h-2 rounded-full bg-cafe-gold" />
        <div className="w-8 h-px bg-cafe-gold/40" />
      </div>
    </motion.div>
  );
}
