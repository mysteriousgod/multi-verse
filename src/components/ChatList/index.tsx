// src/ChatList.tsx
import React from 'react';

const ChatList = () => {
  return (
    <div className="p-4">
      {[1, 2, 3, 4, 5].map((chatId) => (
        <div key={chatId} className="mb-4 last:mb-0 flex items-center justify-between">
          <img src={`https://picsum.photos/200?random=${chatId}`} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-lg font-bold mb-1">Chat {chatId}</h2>
            <p className="text-gray-600 text-sm">Last seen: 5 minutes ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;