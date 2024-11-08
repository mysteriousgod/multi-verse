import React, { useState } from 'react';
import { Call, CallType, Chat, Message, SidebarState, Update, UpdateStatus } from '../type';
import { Sidebar } from './Sidebar/SearchBar';
import { ChatArea } from './Chat/ChatArea';
import { Menu, X } from 'lucide-react';
import { Navbar } from './Navigation/Navbar';
import Tools from './Navigation/tools';
import Updates from './Navigation/Update';
import Calls from './Navigation/Call';

const ChatApp: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState<SidebarState['isSidebarOpen']>(true);
  const [activeTab, setActiveTab] = useState<string>('Chats');

  const chats: Chat[] = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: '9:45 AM', unread: 0 },
    { id: 3, name: 'Tech Group', lastMessage: 'Alice: Great idea!', time: 'Yesterday', unread: 5 },
    { id: 4, name: 'Bob Brown', lastMessage: 'Hey guys!', time: '8:15 PM', unread: 1 },
    { id: 5, name: 'Emma Davis', lastMessage: 'Looking forward to it.', time: '2:45 PM', unread: 0 },
    { id: 6, name: 'Sports Team', lastMessage: 'Let\'s go win!', time: 'Today', unread: 3 },
    // Add more ideas
    { id: 7, name: 'Marketing Team', lastMessage: 'New campaign coming soon!', time: 'Last week', unread: 1 },
    { id: 8, name: 'Development Group', lastMessage: 'API update live now!', time: 'Yesterday at 10 PM', unread: 2 },
    { id: 9, name: 'Support Team', lastMessage: 'Your issue has been resolved.', time: 'This morning', unread: 0 },
    // Add more ideas
    { id: 10, name: 'Sales Department', lastMessage: 'New lead alert!', time: '2 hours ago', unread: 1 },
    { id: 11, name: 'HR Team', lastMessage: 'Meeting rescheduled for tomorrow.', time: 'Last night at 9 PM', unread: 0 },
  ];

  const messages: Message[] = [
    { id: 1, text: 'Hey, how are you?', sent: false, time: '10:30 AM' },
    { id: 2, text: 'I\'m good, thanks! How about you?', sent: true, time: '10:31 AM' },
    { id: 3, text: 'Pretty good! Want to grab lunch later?', sent: false, time: '10:32 AM' },
  ];
  const [calls, setCalls] = useState<Call[]>([
    { id: 1, name: 'John Doe', type: CallType.INCOMING, duration: '2:15' },
    { id: 2, name: 'Jane Smith', type: CallType.OUTGOING, duration: '4:30' },
    // Add more call data
  ]);
  const [activeCall, setActiveCall] = useState<Call | null>(null);

  const handleStartCall = (call: Call) => {
    setActiveCall(call);
    // Add logic to start the call
  };

  // Updates
  const [updates, setUpdates] = useState<Update[]>([
    { id: 1, name: 'New Feature', message: 'Check out the latest update!', timestamp: '2 hours ago', status: UpdateStatus.NEW },
    { id: 2, name: 'Bug Fix', message: 'We ve resolved the issue you reported.', timestamp: 'Yesterday', status: UpdateStatus.READ },
    // Add more update data
  ]);

  const handleViewUpdate = (update: Update) => {
    // Add logic to view the update
  };

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message);
  };

  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
    setIsSidebarOpen(false);
  };

  const renderComponent = (tab: string) => {
    switch (tab) {
      case 'Chats':
        return <Sidebar chats={chats} selectedChat={selectedChat} onSelectChat={handleSelectChat} />;
      case 'Calls':
        return <Calls calls={calls} activeCall={activeCall} onStartCall={handleStartCall} />;
      case 'Updates':
        return <Updates updates={updates} onViewUpdate={handleViewUpdate} />;
      case 'Tools':
        return <Tools />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto">
      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-full lg:w-[400px] z-40 transition-transform duration-300 ease-in-out max-h-screen overflow-y-auto`}
      >
        {renderComponent(activeTab)}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        <ChatArea
          currentChat={chats[selectedChat]}
          messages={messages}
          onSendMessage={handleSendMessage}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* Mobile Menu Button */}
      {/* <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button> */}

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white bg-opacity-100 z-30 overflow-y-auto"
          // onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default ChatApp;