import React from 'react';
import { Update ,UpdateStatus} from '../../type';

interface UpdatesProps {
    updates: Update[];
    onViewUpdate: (update: Update) => void;
  }
  
  const Updates: React.FC<UpdatesProps> = ({ updates, onViewUpdate }) => {
    return (
      <div className="max-w-auto mx-auto p-4 py-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Updates</h2>
        <ul className="space-y-4">
          {updates.map((update) => (
            <li key={update.id} className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100" onClick={() => onViewUpdate(update)}>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {update.name[0].toUpperCase()}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{update.name}</h3>
                <p className="text-sm text-gray-600">{update.message}</p>
              </div>
              <time dateTime={update.timestamp} className="text-sm text-gray-500">Updated {new Date(update.timestamp).toLocaleString()}</time>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Updates;