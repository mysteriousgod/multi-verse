// src/components/Chat/MessageBubble.tsx
import React from 'react';
import { Message } from '../../type';

export const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    return (
      <div className={`flex ${message.sent ? 'justify-end' : 'justify-start'} mb-2 sm:mb-4`}>
        <div
          className={`max-w-[85%] sm:max-w-[70%] p-2 sm:p-3 rounded-lg ${
            message.sent
              ? 'bg-green-500 text-white rounded-tr-none'
              : 'bg-white rounded-tl-none'
          }`}
        >
          <p className="text-sm sm:text-base">{message.text}</p>
          <p className="text-xs mt-1 opacity-70">{message.time}</p>
        </div>
      </div>
    );
  };