// src/components/Chat/MessageInput.tsx
import React, { useState } from 'react';
import { Smile, Paperclip, Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-2 sm:p-4 border-t bg-white">
      <div className="flex items-center gap-2 sm:gap-4">
        <Smile className="w-6 h-6 text-gray-600 hidden sm:block" />
        <Paperclip className="w-6 h-6 text-gray-600 hidden sm:block" />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-3 sm:px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Send 
          className="w-6 h-6 text-gray-600 cursor-pointer" 
          onClick={handleSend}
        />
      </div>
    </div>
  );
};