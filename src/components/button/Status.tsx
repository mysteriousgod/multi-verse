import React, { useState } from 'react';
import { Status, StatusSectionProps } from '../../type';
import IndividualStatus from './IndividualStatus';
import OpenStatus from './OpenStatus';



const StatusSection: React.FC<StatusSectionProps> = ({ statuses }) => {
    const [openStatus, setOpenStatus] = useState<Status | null>(null);
  
    const handleOpenStatus = (status: Status) => {
      setOpenStatus(status);
    };
  
    const handleCloseStatus = () => {
      setOpenStatus(null);
    };
  
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-3">My Status</h2>
        {statuses.length === 0 && (
          <p className="italic text-gray-600">No status updates yet.</p>
        )}
        <ul className="space-y-4">
          {statuses.map(status => (
            <IndividualStatus key={status.id} {...status} onClick={handleOpenStatus} />
          ))}
        </ul>
  
        {openStatus && <OpenStatus {...openStatus} onClose={handleCloseStatus} />}
      </div>
    );
  };
export default StatusSection;