import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  CircleDashedIcon,
  Menu as MenuIcon,
  X,
  LogOut,
  WarehouseIcon

} from 'lucide-react';

import { NavBarProps } from '../../type';

interface NavItem {
  icon: JSX.Element;
  label: string;
  notifications?: number;
}

export const Navbar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { icon: <MessageSquare className="w-6 h-6" />, label: 'Chats', notifications: 3 },
    { icon: <Phone className="w-6 h-6" />, label: 'Calls' },
    { icon: <CircleDashedIcon className="w-6 h-6" />, label: 'Updates', notifications: 5 },
    { icon: <WarehouseIcon
        className="w-6 h-6" />, label: 'Tools', notifications: 5 },
  ];

  const userProfile = {
    name: 'John Doe',
    avatar: 'JD',
    status: 'online'
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-col h-screen w-20 bg-white border-r">
        {/* User Avatar */}
        <div className="p-4 flex flex-col items-center border-b">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {userProfile.avatar}
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 flex flex-col items-center py-4 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`relative p-3 rounded-xl transition-colors ${
                activeTab === item.label
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {item.notifications && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.notifications}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button className="p-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-b px-4 flex items-center justify-between z-50">
          {/* <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-500"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button> */}
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`relative p-3 rounded-xl transition-colors ${
                activeTab === item.label
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {item.notifications && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.notifications}
                </span>
              )}
            </button>
          ))}

          {/* <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              {userProfile.avatar}
            </div>
          </div> */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
            <div className="bg-white w-64 h-full flex flex-col animate-slide-in">
              {/* User Profile */}
              <div className="p-4 border-b flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {userProfile.avatar}
                </div>
                <div>
                  <div className="font-semibold">{userProfile.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {userProfile.status}
                  </div>
                </div>
              </div>

              {/* Nav Items */}
              <div className="flex-1 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActiveTab(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 ${
                      activeTab === item.label
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.notifications && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                        {item.notifications}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Logout */}
              <button className="p-4 border-t flex items-center space-x-3 text-gray-500 hover:bg-gray-50">
                <LogOut className="w-6 h-6" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};