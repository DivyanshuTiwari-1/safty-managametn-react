// src/components/pages/TrainingManagement.jsx
import React from 'react';
import { Plus, Users, Calendar, CheckCircle } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import { mockData } from '../../data/mockData';

const TrainingManagement = ({ onRecordTraining }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Safety Training Management</h2>
          <p className="text-gray-600">Track and manage employee safety training requirements</p>
        </div>
        <button
          onClick={onRecordTraining}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          <span>Record Training</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-blue-600">94%</div>
          <div className="text-sm text-gray-600">Training Completion</div>
          <div className="text-xs text-gray-500">Current quarter</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Calendar className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-yellow-600">8</div>
          <div className="text-sm text-gray-600">Expiring Soon</div>
          <div className="text-xs text-gray-500">Next 30 days</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-green-600">148</div>
          <div className="text-sm text-gray-600">Up to Date</div>
          <div className="text-xs text-gray-500">Employees</div>
        </div>
      </div>

      {/* Training Records */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Training Records</h3>
          <p className="text-sm text-gray-600">Employee safety training status and requirements</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">General Safety</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Emergency Response</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PPE Training</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Aid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockData.training.map((employee, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.role}</div>
                      <StatusBadge status={employee.status} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.generalSafety}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.emergencyResponse}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.ppeTraining}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.firstAid}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-800">Update</button>
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

export default TrainingManagement;