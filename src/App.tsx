// src/App.tsx
import React, { useState }from 'react';
import ChatApp from './components/ChatApp';
import { Navbar } from './components/Navigation/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('Chats');
  return (
    <div className="flex w-full h-screen">
      {/* <Navbar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      <div className="flex-1">
        <ChatApp />
      </div>
    </div>
  );
}

export default App;