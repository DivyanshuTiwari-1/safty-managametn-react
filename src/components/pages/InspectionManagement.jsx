// src/components/pages/InspectionManagement.jsx
import React from 'react';
import { Plus, CheckCircle, Calendar, Award, AlertTriangle, Eye } from 'lucide-react';
import { mockData } from '../../data/mockData';

const InspectionManagement = ({ onScheduleInspection }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Safety Inspections & Audits</h2>
          <p className="text-gray-600">Schedule and track workplace safety inspections</p>
        </div>
        <button
          onClick={onScheduleInspection}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <Plus className="h-4 w-4" />
          <span>Schedule Inspection</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-green-600">12</div>
          <div className="text-sm text-gray-600">Completed</div>
          <div className="text-xs text-gray-500">This quarter</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Scheduled</div>
          <div className="text-xs text-gray-500">Next 30 days</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-yellow-600">92%</div>
          <div className="text-sm text-gray-600">Avg Score</div>
          <div className="text-xs text-gray-500">Compliance</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-red-600">5</div>
          <div className="text-sm text-gray-600">Action Items</div>
          <div className="text-xs text-gray-500">Open</div>
        </div>
      </div>

      {/* Recent Inspections */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Recent Inspections</h3>
          <p className="text-sm text-gray-600">Latest safety inspection results</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inspector</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockData.inspections.map((inspection) => (
                <tr key={inspection.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{inspection.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inspection.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inspection.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inspection.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inspection.inspector}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{inspection.score}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inspection.actionItems}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InspectionManagement;