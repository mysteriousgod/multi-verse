// src/types/index.ts
export interface Chat {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
    unread: number;
  }
  
  export interface Message {
    id: number;
    text: string;
    sent: boolean;
    time: string;
  }
  export interface AppProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
    onSendMessage: (message: string) => void;
    selectedChat: number;
    onSelectChat: (chatId: number) => void;
}
export interface SidebarState {
    isSidebarOpen: boolean;
  }

  export  interface NavBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }

  // multi-verse/src/components/Navigation/type.ts

export enum CallType {
    INCOMING,
    OUTGOING,
  }
  
  export interface Call {
    id: number;
    name: string;
    type: CallType;
    duration: string; // Assuming this is a time format (e.g., '2:45')
  }
  
  export interface Update {
    id: number;
    name: string;
    message: string;
    timestamp: string; // Could be a Date object or any other date-related type
    status: UpdateStatus;
  }
  
  export enum UpdateStatus {
    NEW,
    READ,
  }
  
  interface Props {
    // Any props that are common across multiple components in the Navigation folder
  }
  