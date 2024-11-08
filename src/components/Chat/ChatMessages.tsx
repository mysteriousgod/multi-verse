// src/components/Chat/ChatMessages.tsx
import React, { useEffect, useRef } from 'react';
import { Message } from '../../type';
import { MessageBubble } from './MessageBubble';

interface ChatMessagesProps {
    messages: Message[];
  }
  
  export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    return (
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-100">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    );
  };