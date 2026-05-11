import SectionHeading from '../components/SectionHeading';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menu';

export default function FeaturedMenu() {
  return (
    <section id="menu" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cafe-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Menu"
          title="Crafted with Passion"
          description="From aromatic coffees to savory bites, every item on our menu is made with the finest ingredients and served with love."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="mt-12 text-center">
          <button className="btn-outline">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
