// src/components/Chat/ChatArea.tsx
import React from 'react';
import { ChatMessages } from './ChatMessages';
import { MessageInput } from './MessageInput';
import { Chat, Message } from '../../type';
import { ChatHeader } from './ChatHeader';

interface ChatAreaProps {
    currentChat: Chat;
    messages: Message[];
    onSendMessage: (message: string) => void;
    setIsSidebarOpen: (isOpen: boolean) => void;
  }
  
  export const ChatArea: React.FC<ChatAreaProps> = ({ currentChat, messages, onSendMessage, setIsSidebarOpen }) => {
    return (
      <div className="h-full flex flex-col">
        <ChatHeader  name={currentChat.name} setIsSidebarOpen={setIsSidebarOpen}/>
        <ChatMessages messages={messages} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    );
  };