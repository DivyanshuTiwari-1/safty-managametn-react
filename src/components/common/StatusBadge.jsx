// src/components/common/StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ status, severity }) => {
  const getStatusColor = (status, severity) => {
    if (severity) {
      switch (severity.toLowerCase()) {
        case 'low': return 'bg-green-100 text-green-800';
        case 'medium': return 'bg-yellow-100 text-yellow-800';
        case 'high': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    }
    
    switch (status?.toLowerCase()) {
      case 'resolved': case 'complete': case 'current': return 'bg-green-100 text-green-800';
      case 'under investigation': case 'expiring': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status, severity)}`}>
      {status || severity}
    </span>
  );
};

export default StatusBadge;
