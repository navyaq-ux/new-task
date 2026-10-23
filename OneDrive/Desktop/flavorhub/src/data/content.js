import {
  ChefHat,
  Heart,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Soup,
  Users,
} from 'lucide-react'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    subtitle: 'Always fresh & high quality',
  },
  {
    icon: ChefHat,
    title: 'Experienced Chefs',
    subtitle: 'Delicious & authentic taste',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    subtitle: 'Clean & safe for everyone',
  },
  {
    icon: Heart,
    title: 'Cozy Ambiance',
    subtitle: 'Perfect for family & friends',
  },
]

export const dishes = [
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    description: 'Juicy patty with fresh veggies and special sauce.',
    price: 249,
    image: '/images/dish-burger.jpg',
    alt: 'Juicy cheeseburger with lettuce, tomato and a sesame seed bun',
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'Loaded with fresh tomatoes, mozzarella and basil.',
    price: 399,
    image: '/images/dish-pizza.jpg',
    alt: 'Freshly baked Margherita pizza with mozzarella and basil',
  },
  {
    id: 'pasta-alfredo',
    name: 'Pasta Alfredo',
    description: 'Creamy pasta with rich cheese and herbs.',
    price: 299,
    image: '/images/dish-pasta.jpg',
    alt: 'Creamy penne pasta with cheese and fresh herbs',
  },
  {
    id: 'choco-lava-cake',
    name: 'Choco Lava Cake',
    description: 'Warm chocolate cake with a molten center.',
    price: 199,
    image: '/images/dish-dessert.jpg',
    alt: 'Warm chocolate lava cake with a molten center',
  },
]

export const aboutBenefits = [
  {
    icon: Soup,
    title: 'Authentic Taste',
    subtitle: 'Traditional & modern recipes',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    subtitle: 'Perfect for all ages',
  },
  {
    icon: HeartHandshake,
    title: 'Memorable Experience',
    subtitle: 'More than just food',
  },
]

export const galleryImages = [
  {
    src: '/images/gallery-interior.jpg',
    alt: 'Elegant restaurant interior with warm lighting',
    caption: 'Our dining room',
  },
  {
    src: '/images/gallery-plated.jpg',
    alt: 'Beautifully plated food with fresh ingredients',
    caption: 'Chef’s plate',
  },
  {
    src: '/images/gallery-dining.jpg',
    alt: 'Cozy restaurant dining area prepared for guests',
    caption: 'Cozy corners',
  },
  {
    src: '/images/gallery-dessert.jpg',
    alt: 'Chocolate dessert with fresh berries',
    caption: 'Sweet endings',
  },
  {
    src: '/images/gallery-warm.jpg',
    alt: 'Warmly lit restaurant interior at dinner time',
    caption: 'Evening glow',
  },
]

export const menuCategories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Desserts',
  'Beverages',
]
