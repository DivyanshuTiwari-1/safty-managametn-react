// src/components/pages/PPETracking.jsx
import React from 'react';
import { Plus, Shield, Eye, Users, MapPin } from 'lucide-react';
import { mockData } from '../../data/mockData';

const PPETracking = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">PPE Compliance Tracking</h2>
          <p className="text-gray-600">Monitor personal protective equipment usage and compliance</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Record PPE Check</span>
        </button>
      </div>

      {/* PPE Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-blue-600">98%</div>
          <div className="text-sm text-gray-600">Overall Compliance</div>
          <div className="text-xs text-gray-500">Current period</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-green-600">99%</div>
          <div className="text-sm text-gray-600">Safety Glasses</div>
          <div className="text-xs text-gray-500">Compliance</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-yellow-600">97%</div>
          <div className="text-sm text-gray-600">Hard Hats</div>
          <div className="text-xs text-gray-500">Compliance</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-purple-600">96%</div>
          <div className="text-sm text-gray-600">High-Vis Vests</div>
          <div className="text-xs text-gray-500">Compliance</div>
        </div>
      </div>

      {/* PPE Compliance by Location */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">PPE Compliance by Location</h3>
          <p className="text-sm text-gray-600">Compliance rates across different work locations</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {mockData.ppeCompliance.locations.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="font-medium">{location.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 w-32">
                    <div
                      className={`h-2 rounded-full ${location.compliance >= 98 ? 'bg-green-600' : location.compliance >= 95 ? 'bg-yellow-600' : 'bg-red-600'}`}
                      style={{ width: `${location.compliance}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-lg">{location.compliance}%</span>
                  <span className="text-sm text-gray-500">{location.violations} violations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPETracking;