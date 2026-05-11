import { Coffee, GlassWater, Leaf, UtensilsCrossed, Pizza, Beef, CakeSlice } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  icon: LucideIcon;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Coffee',
    description: 'Rich, aromatic blends crafted from premium beans',
    price: 'Rs. 120',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Coffee,
  },
  {
    id: 2,
    name: 'Cold Coffee',
    description: 'Chilled perfection for warm afternoons',
    price: 'Rs. 180',
    image: 'https://images.pexels.com/photos/324977/pexels-photo-324977.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: GlassWater,
  },
  {
    id: 3,
    name: 'Tea',
    description: 'Traditional Nepali chiya with authentic spices',
    price: 'Rs. 60',
    image: 'https://images.pexels.com/photos/757678/pexels-photo-757678.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Leaf,
  },
  {
    id: 4,
    name: 'Momo',
    description: 'Steamed dumplings with authentic Nepali filling',
    price: 'Rs. 150',
    image: 'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: UtensilsCrossed,
  },
  {
    id: 5,
    name: 'Pizza',
    description: 'Wood-fired goodness with fresh toppings',
    price: 'Rs. 350',
    image: 'https://images.pexels.com/photos/15668379/pexels-photo-15668379.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Pizza,
  },
  {
    id: 6,
    name: 'Burger',
    description: 'Juicy gourmet burgers with premium ingredients',
    price: 'Rs. 250',
    image: 'https://images.pexels.com/photos/1639772/pexels-photo-1639772.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Beef,
  },
  {
    id: 7,
    name: 'Cake',
    description: 'Freshly baked artisan cakes and pastries',
    price: 'Rs. 200',
    image: 'https://images.pexels.com/photos/291532/pexels-photo-291532.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: CakeSlice,
  },
];

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Freelance Developer',
    text: 'The best cafe in Dhangadhi for remote work. Fast WiFi, great coffee, and the ambiance is just perfect for productivity.',
    rating: 5,
    avatar: 'AS',
  },
  {
    id: 2,
    name: 'Priya Bhatta',
    role: 'University Student',
    text: 'My go-to study spot! The comfortable seating and quiet environment make it ideal for long study sessions.',
    rating: 5,
    avatar: 'PB',
  },
  {
    id: 3,
    name: 'Rajesh Chaudhary',
    role: 'Family Visit',
    text: 'Brought my family here for weekend brunch. The momos are incredible and the kids loved the cake. Will definitely return!',
    rating: 5,
    avatar: 'RC',
  },
  {
    id: 4,
    name: 'Sita Thapa',
    role: 'Content Creator',
    text: 'The aesthetic of this place is unmatched. Every corner is Instagram-worthy and the cold coffee is to die for.',
    rating: 4,
    avatar: 'ST',
  },
];

export const galleryImages = [
  'https://images.pexels.com/photos/1402234/pexels-photo-1402234.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/894395/pexels-photo-894395.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1124215/pexels-photo-1124215.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2396221/pexels-photo-2396221.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2604392/pexels-photo-2604392.jpeg?auto=compress&cs=tinysrgb&w=400',
];
