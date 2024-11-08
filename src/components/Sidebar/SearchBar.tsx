// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { ChatListItem } from './ChatListItem';
import { SearchBar } from './Sidebar';
import { Chat } from '../../type';

interface SidebarProps {
    chats: Chat[];
    selectedChat: number;
    onSelectChat: (id: number) => void;
  }
  
  export const Sidebar: React.FC<SidebarProps> = ({ chats, selectedChat, onSelectChat }) => {
    return (
      <div className="h-full bg-white border-r flex flex-col">
        <SidebarHeader />
        <SearchBar />
        <div className="overflow-y-auto flex-1">
          {chats.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isSelected={selectedChat === chat.id}
              onClick={onSelectChat}
            />
          ))}
        </div>
      </div>
    );
  };