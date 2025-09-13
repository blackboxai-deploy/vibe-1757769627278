export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert';
  rating: number;
  image: string;
  featured: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'wagyu-beef',
    name: 'Wagyu Beef Tenderloin',
    description: 'Premium wagyu A5 dengan truffle sauce, asparagus panggang, dan kentang duchess. Dimasak sempurna medium-rare.',
    price: 2850000,
    category: 'main',
    rating: 5,
    image: 'wagyu',
    featured: true
  },
  {
    id: 'lobster-thermidor',
    name: 'Lobster Thermidor',
    description: 'Lobster Boston segar dengan saus thermidor klasik, keju gruyere, dan microgreens. Dipanggang hingga golden brown.',
    price: 1950000,
    category: 'main',
    rating: 5,
    image: 'lobster',
    featured: true
  },
  {
    id: 'foie-gras',
    name: 'Foie Gras Poêlé',
    description: 'Foie gras pan-seared dengan brioche toast, fig compote, dan balsamic reduction. Disajikan dengan microgreens segar.',
    price: 1650000,
    category: 'appetizer',
    rating: 5,
    image: 'foiegras',
    featured: true
  },
  {
    id: 'caviar-service',
    name: 'Ossetra Caviar Service',
    description: 'Caviar Ossetra premium 30g dengan blinis tradisional, crème fraîche, dan chives. Disajikan dengan mother-of-pearl spoon.',
    price: 3200000,
    category: 'appetizer',
    rating: 5,
    image: 'caviar',
    featured: true
  },
  {
    id: 'tuna-tartare',
    name: 'Bluefin Tuna Tartare',
    description: 'Tuna bluefin sashimi grade dengan avocado mousse, quail egg, dan sesame oil. Disajikan dengan ponzu reduction.',
    price: 1450000,
    category: 'appetizer',
    rating: 5,
    image: 'tuna',
    featured: true
  },
  {
    id: 'chocolate-souffle',
    name: 'Valrhona Chocolate Soufflé',
    description: 'Soufflé cokelat Valrhona 70% dengan vanilla bean ice cream dan raspberry coulis. Dibuat fresh setelah order.',
    price: 485000,
    category: 'dessert',
    rating: 5,
    image: 'souffle',
    featured: true
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};