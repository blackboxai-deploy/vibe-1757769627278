'use client';

import React, { useState, useMemo } from 'react';
import { menuItems, MenuItem } from '@/lib/menu-data';
import MenuCard from '@/components/menu-card';
import SearchFilter from '@/components/search-filter';
import CartDrawer from '@/components/cart-drawer';
import ReservationDialog from '@/components/reservation-dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


interface CartItem extends MenuItem {
  quantity: number;
}

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Filter menu items based on search and category
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    // Show success feedback (would use toast in production)
    console.log(`${item.name} added to cart!`);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    console.log('Item removed from cart');
  };

  const handleCheckout = () => {
    // This would normally integrate with the reservation system
    console.log('Redirecting to reservation...');
  };

  const handleReservation = (data: ReservationData) => {
    // This would normally send to backend API
    console.log('Reservation data:', data);
    console.log(`Reservation confirmed for ${data.name} on ${data.date} at ${data.time}!`);
  };

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'appetizer':
        return 'Appetizers';
      case 'main':
        return 'Main Courses';
      case 'dessert':
        return 'Desserts';
      default:
        return 'All Menu';
    }
  };

  return (
    <div className="elegant-bg min-h-screen">
      {/* Header */}
      <header className="text-center py-12 px-6 relative">
        <CartDrawer
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="gold-accent">Culinary</span> Excellence
        </h1>
        <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          Pengalaman kuliner eksklusif dengan cita rasa internasional dan presentasi yang memukau
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-8"></div>
        
        <ReservationDialog
          trigger={
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium px-8 py-3 text-lg">
              Reserve Table
            </Button>
          }
          onSubmit={handleReservation}
        />
      </header>

      {/* Search and Filter */}
      <div className="container mx-auto px-6">
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Menu Gallery */}
      <main className="container mx-auto px-6 pb-16">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="font-playfair text-3xl font-bold text-white">
              {getCategoryDisplayName(selectedCategory)}
            </h2>
            <Badge variant="secondary" className="bg-white/10 text-white">
              {filteredMenuItems.length} dishes
            </Badge>
          </div>
        </div>

        {filteredMenuItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl mb-4">No dishes found</p>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredMenuItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* Chef's Note */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h2 className="font-playfair text-3xl font-bold text-white mb-4">
              <span className="gold-accent">Chef's</span> Philosophy
            </h2>
            <p className="font-inter text-gray-300 text-lg leading-relaxed mb-6">
              "Setiap hidangan adalah karya seni yang menggabungkan teknik kuliner terbaik dunia dengan bahan-bahan premium pilihan. 
              Kami berkomitmen menghadirkan pengalaman gastronomi yang tak terlupakan dengan standar hotel bintang lima internasional."
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <span className="gold-accent font-playfair text-xl font-bold">Executive Chef</span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="font-playfair text-xl font-bold text-white mb-3">Location</h3>
            <p className="font-inter text-gray-300">
              Grand Hotel Jakarta<br />
              Jl. Thamrin No. 1<br />
              Jakarta Pusat 10310
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="font-playfair text-xl font-bold text-white mb-3">Reservations</h3>
            <p className="font-inter text-gray-300">
              Phone: +62 21 2358 0000<br />
              Email: dining@grandhotel.com<br />
              WhatsApp: +62 812 3456 7890
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="font-playfair text-xl font-bold text-white mb-3">Hours</h3>
            <p className="font-inter text-gray-300">
              Dinner: 6:00 PM - 10:30 PM<br />
              Tuesday - Sunday<br />
              Closed Mondays
            </p>
          </div>
        </div>
      </main>


    </div>
  );
}