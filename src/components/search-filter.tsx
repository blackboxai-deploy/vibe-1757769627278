'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="search" className="block text-white font-inter text-sm mb-2">
            Search Menu
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-white font-inter text-sm mb-2">
            Filter by Category
          </label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-yellow-400 focus:border-yellow-400">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="all" className="text-white hover:bg-slate-700">All Categories</SelectItem>
              <SelectItem value="appetizer" className="text-white hover:bg-slate-700">Appetizer</SelectItem>
              <SelectItem value="main" className="text-white hover:bg-slate-700">Main Course</SelectItem>
              <SelectItem value="dessert" className="text-white hover:bg-slate-700">Dessert</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;