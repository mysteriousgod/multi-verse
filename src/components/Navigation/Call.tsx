import React from 'react';
import { Call,CallType  } from '../../type';

interface CallsProps {
    calls: Call[];
    activeCall: Call | null;
    onStartCall: (call: Call) => void;
  }
  
  const Calls: React.FC<CallsProps> = ({ calls, activeCall, onStartCall }) => {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Calls</h2>
        <div className="space-y-4 overflow-y-auto max-h-64">
          {calls.map((call) => (
            <div
              key={call.id}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${activeCall?.id === call.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} hover:shadow-sm`}
              onClick={() => onStartCall(call)}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {call.type === CallType.INCOMING ? call.name[0] : call.name[0]}
              </div>
              <div className="ml-4 flex-1">
                <div className="font-medium">{call.name}</div>
                <div className="text-sm text-gray-500">
                  {call.type === CallType.INCOMING ? 'Incoming' : 'Outgoing'}
                </div>
              </div>
              <div className="text-sm text-gray-500">{call.duration}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Calls;