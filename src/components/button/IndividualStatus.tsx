import React from 'react';
import { IndividualStatusProps, Status } from '../../type';


const IndividualStatus: React.FC<IndividualStatusProps> = ({ id, message, timestamp, onClick }) => {
    return (
      <li
        key={id}
        className="flex items-center space-x-2 py-2 px-3 border rounded-lg shadow-sm cursor-pointer"
        onClick={() => onClick({ id, message, timestamp })}
      >
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col text-sm">
          <span className="font-semibold">{message}</span>
          <span className="text-gray-500 text-xs">{timestamp}</span>
        </div>
      </li>
    );
  };
export default IndividualStatus;