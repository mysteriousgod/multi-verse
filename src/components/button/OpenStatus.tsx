import React from 'react';
import { OpenStatusProps } from '../../type';

const OpenStatus: React.FC<OpenStatusProps> = ({ id, message, timestamp, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl">
          ×
        </button>
        <div className="flex flex-col items-center justify-center h-full w-full p-8">
          <h3 className="text-xl font-bold mb-2">Status</h3>
          {message.startsWith('http') ? (
            <img src={message} alt="status" className="max-w-full max-h-full rounded-lg shadow-md border" />
          ) : (
            <p className="font-semibold text-center">{message}</p>
          )}
          <p className="text-gray-500 text-xs mt-1 w-full text-center">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default OpenStatus;