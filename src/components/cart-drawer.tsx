'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MenuItem, formatPrice } from '@/lib/menu-data';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartDrawerProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="fixed top-6 right-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 z-50"
        >
          <span className="mr-2">🛒</span>
          Cart ({totalItems})
          {totalItems > 0 && (
            <Badge variant="secondary" className="ml-2 bg-yellow-400 text-black">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="bg-slate-900 border-slate-700 text-white w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="text-white font-playfair text-2xl">
            Your <span className="gold-accent">Order</span>
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              Your cart is empty. Add some delicious items!
            </p>
          ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-inter font-medium">{item.name}</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      >
                        ✕
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">
                        {formatPrice(item.price)} each
                      </span>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 p-0 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          -
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-right">
                      <span className="font-medium text-yellow-400">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="bg-white/20" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg font-medium">
                  <span>Total:</span>
                  <span className="gold-accent font-playfair text-xl">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3"
                >
                  Proceed to Reservation
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;