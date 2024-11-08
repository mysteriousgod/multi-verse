// src/components/Sidebar/SearchBar.tsx
import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  return (
    <div className="p-3">
      <div className="relative">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none"
        />
        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
      </div>
    </div>
  );
};