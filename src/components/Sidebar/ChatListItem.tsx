// src/components/Sidebar/ChatListItem.tsx
import React from 'react';
import { Chat } from '../../type';


interface ChatListItemProps {
  chat: Chat;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({ chat, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(chat.id)}
      className={`flex items-center p-4 border-b hover:bg-gray-50 cursor-pointer ${
        isSelected ? 'bg-gray-100' : ''
      }`}
    >
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">{chat.name}</h3>
          <span className="text-sm text-gray-500">{chat.time}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          {chat.unread > 0 && (
            <span className="bg-green-500 text-white rounded-full px-2 text-xs">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};