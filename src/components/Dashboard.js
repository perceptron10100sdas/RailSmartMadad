import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-full mx-auto space-y-6">
      <div className="flex flex-col mx-auto bg-[#D88080] rounded-lg p-6 shadow-md space-y-6 w-full">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
          {/* In use */}
          <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">10M+</div>
              <div className="text-lg font-medium text-blue-500">Complaint Registered</div>
            </div>
          </div>
          {/* Renovation */}
          <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">500K+</div>
              <div className="text-lg font-medium text-amber-600">Complaint Resolved</div>
            </div>
          </div>
          {/* Suspended */}
          <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl font-bold tracking-tight leading-none text-red-500">300K+</div>
              <div className="text-lg font-medium text-red-600">Complaints Pending</div>
            </div>
          </div>
          {/* Closed */}
          <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl flex font-bold tracking-tight leading-none text-primary-900">4<FaStar/></div>
              <div className="text-lg font-medium text-primary-900">Users Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
