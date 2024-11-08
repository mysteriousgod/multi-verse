import React from 'react';
import {
  MessageSquare,
  Users,
  Search,
  Settings,
  MoreVertical,
  ArrowLeft,
} from 'lucide-react';

const Tools: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar Menu */}
      <div className="bg-gray-800 w-full md:w-[380px] flex-shrink-0 border-r">
        {/* Sidebar Header */}
        <div className="h-16 bg-gray-700 flex items-center justify-between px-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              JD
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-300">
              <Users className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-300">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full bg-gray-700 pl-12 pr-4 py-2 rounded-lg focus:outline-none"
            />
          </div>
        </div>

        {/* Business Tools */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Last 7 days performance</span>
            <button>
              <MessageSquare className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="text-2xl font-bold">8</span>
              <p className="text-gray-400">Conversations started</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="text-2xl font-bold">--</span>
              <p className="text-gray-400">Catalog views</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="text-2xl font-bold">--</span>
              <p className="text-gray-400">Status views</p>
            </div>
          </div>
        </div>

        {/* Grow Your Business */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-gray-300">
              Create your first ad from ₹84.46/day
            </span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full">
            Get started
          </button>
        </div>

        {/* Business Tools */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Business tools</span>
            <button>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Settings className="w-6 h-6 text-gray-400" />
                <span>Profile</span>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </div>
            {/* Render other business tools */}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Tools;