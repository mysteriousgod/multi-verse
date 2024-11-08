// src/components/Sidebar/SidebarHeader.tsx
import { Menu, MessageSquare, MoreVertical } from 'lucide-react';
import React from 'react';


export const SidebarHeader: React.FC = () => {
  return (
    <div className="p-4 border-b flex justify-between items-center bg-gray-50">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      <div className="flex gap-4">
        <MessageSquare className="w-6 h-6 text-gray-600" />
        <Menu className="w-6 h-6 text-gray-600" />
        <MoreVertical className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};