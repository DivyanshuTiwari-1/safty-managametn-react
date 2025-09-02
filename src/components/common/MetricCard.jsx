// src/components/common/MetricCard.jsx
import React from 'react';

const MetricCard = ({ title, value, target, previous, trend, icon: Icon, color = "blue" }) => {
  const colorClasses = {
    blue: "border-blue-200 bg-blue-50",
    green: "border-green-200 bg-green-50",
    yellow: "border-yellow-200 bg-yellow-50",
    red: "border-red-200 bg-red-50"
  };

  return (
    <div className={`p-6 border rounded-lg ${colorClasses[color]}`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className={`h-8 w-8 text-${color}-600`} />
        {trend && (
          <span className={`text-xs font-medium ${trend === 'good' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'good' ? 'good' : 'warning'}
          </span>
        )}
      </div>
      <div className={`text-3xl font-bold text-${color}-600 mb-1`}>{value}</div>
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      {target && <div className="text-xs text-gray-500">Target: {target}</div>}
      {previous && <div className="text-xs text-gray-500">Prev: {previous}</div>}
    </div>
  );
};

export default MetricCard;
