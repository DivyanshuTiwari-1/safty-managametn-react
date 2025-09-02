// src/components/pages/IncidentManagement.jsx
import React from 'react';
import { Plus, AlertTriangle, Shield, Eye, Clock, Edit } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import { mockData } from '../../data/mockData';

const IncidentManagement = ({ onReportIncident }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Incident Management</h2>
          <p className="text-gray-600">Report and track workplace incidents and near misses</p>
        </div>
        <button
          onClick={onReportIncident}
          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          <Plus className="h-4 w-4" />
          <span>Report Incident</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-red-600">12</div>
          <div className="text-sm text-gray-600">Total Incidents</div>
          <div className="text-xs text-gray-500">This year</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Injuries</div>
          <div className="text-xs text-gray-500">Recordable</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Eye className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-yellow-600">23</div>
          <div className="text-sm text-gray-600">Near Misses</div>
          <div className="text-xs text-gray-500">Reported</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-green-600">127</div>
          <div className="text-sm text-gray-600">Days Since</div>
          <div className="text-xs text-gray-500">Last incident</div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Recent Incidents</h3>
          <p className="text-sm text-gray-600">Latest reported safety incidents and their status</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockData.incidents.map((incident) => (
                <tr key={incident.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{incident.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge severity={incident.severity} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{incident.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={incident.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
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

export default IncidentManagement;