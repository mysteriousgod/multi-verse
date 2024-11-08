// src/components/Chat/ChatHeader.tsx
import React from 'react';
import { Phone, VideoIcon, Search, MoreVertical,ArrowLeft } from 'lucide-react';

interface ChatHeaderProps {
  name: string;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ name ,setIsSidebarOpen}) => {
  return (
    <div className="p-4 border-b flex justify-between items-center bg-gray-50">
        
      <div className="flex items-center">
        <ArrowLeft onClick={() => setIsSidebarOpen(true)}/>
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Phone className="w-6 h-6 text-gray-600" />
        <VideoIcon className="w-6 h-6 text-gray-600" />
        <Search className="w-6 h-6 text-gray-600" />
        <MoreVertical className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};
