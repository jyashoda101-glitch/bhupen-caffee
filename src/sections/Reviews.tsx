import SectionHeading from '../components/SectionHeading';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/menu';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-cafe-dark/50">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cafe-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Guests Say"
          description="Real stories from the people who make Bhupen Caffee their second home."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
