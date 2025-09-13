'use client';

import React from 'react';
import { MenuItem, formatPrice } from '@/lib/menu-data';
import { getIllustrationComponent } from './svg-illustrations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  const IllustrationComponent = getIllustrationComponent(item.image);
  
  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  return (
    <div className="dish-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group">
      <div className="text-center mb-6">
        <IllustrationComponent className="w-32 h-32 mx-auto mb-4" />
        {item.featured && (
          <Badge variant="secondary" className="mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
            Chef's Special
          </Badge>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-playfair text-2xl font-bold text-white mb-3">
            {item.name}
          </h3>
          <p className="font-inter text-gray-300 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="gold-accent font-playfair text-xl font-bold">
            {formatPrice(item.price)}
          </span>
          <span className="text-yellow-400 text-sm">
            {renderStars(item.rating)}
          </span>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium transition-all duration-300 transform hover:scale-105"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;