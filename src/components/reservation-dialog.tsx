'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

interface ReservationDialogProps {
  trigger: React.ReactNode;
  onSubmit: (data: ReservationData) => void;
}

const ReservationDialog: React.FC<ReservationDialogProps> = ({ trigger, onSubmit }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: '',
    });
  };

  const handleInputChange = (field: keyof ReservationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">
            Make a <span className="gold-accent">Reservation</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Reserve your table for an unforgettable dining experience
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="text-white">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-white">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="+62 xxx xxxx xxxx"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="text-white">Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={today}
                required
                className="bg-white/10 border-white/20 text-white focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            
            <div>
              <Label htmlFor="time" className="text-white">Time *</Label>
              <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-yellow-400 focus:border-yellow-400">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="18:00" className="text-white hover:bg-slate-700">6:00 PM</SelectItem>
                  <SelectItem value="18:30" className="text-white hover:bg-slate-700">6:30 PM</SelectItem>
                  <SelectItem value="19:00" className="text-white hover:bg-slate-700">7:00 PM</SelectItem>
                  <SelectItem value="19:30" className="text-white hover:bg-slate-700">7:30 PM</SelectItem>
                  <SelectItem value="20:00" className="text-white hover:bg-slate-700">8:00 PM</SelectItem>
                  <SelectItem value="20:30" className="text-white hover:bg-slate-700">8:30 PM</SelectItem>
                  <SelectItem value="21:00" className="text-white hover:bg-slate-700">9:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="guests" className="text-white">Number of Guests *</Label>
            <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-yellow-400 focus:border-yellow-400">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="1" className="text-white hover:bg-slate-700">1 Guest</SelectItem>
                <SelectItem value="2" className="text-white hover:bg-slate-700">2 Guests</SelectItem>
                <SelectItem value="3" className="text-white hover:bg-slate-700">3 Guests</SelectItem>
                <SelectItem value="4" className="text-white hover:bg-slate-700">4 Guests</SelectItem>
                <SelectItem value="5" className="text-white hover:bg-slate-700">5 Guests</SelectItem>
                <SelectItem value="6" className="text-white hover:bg-slate-700">6 Guests</SelectItem>
                <SelectItem value="7" className="text-white hover:bg-slate-700">7 Guests</SelectItem>
                <SelectItem value="8" className="text-white hover:bg-slate-700">8 Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="specialRequests" className="text-white">Special Requests</Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Dietary restrictions, celebrations, etc."
              rows={3}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-medium py-3"
          >
            Confirm Reservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;