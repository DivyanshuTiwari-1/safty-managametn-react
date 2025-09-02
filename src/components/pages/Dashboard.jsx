import React from 'react';
import { Clock, AlertTriangle, Users, FileText, Shield, Award, CheckCircle } from 'lucide-react';
import { MetricCard } from '../common/MetricCard';
import { mockData } from '../../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Days Without Incident"
          value="127"
          target="365"
          previous="89"
          trend="good"
          icon={Clock}
          color="green"
        />
        <MetricCard
          title="Incident Rate"
          value="0.8"
          target="1 per 100 employees"
          previous="1.2 per 100 employees"
          trend="good"
          icon={AlertTriangle}
          color="blue"
        />
        <MetricCard
          title="Safety Training Completion"
          value="94%"
          target="100%"
          previous="87%"
          trend="good"
          icon={Users}
          color="green"
        />
        <MetricCard
          title="Near Miss Reports"
          value="23"
          target="20"
          previous="18"
          trend="warning"
          icon={FileText}
          color="yellow"
        />
        <MetricCard
          title="PPE Compliance"
          value="98%"
          target="100%"
          previous="96%"
          trend="good"
          icon={Shield}
          color="green"
        />
        <MetricCard
          title="Safety Audit Score"
          value="92%"
          target="95%"
          previous="88%"
          trend="good"
          icon={Award}
          color="green"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Safety Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-green-800">Safety Training Completed</p>
              <p className="text-sm text-green-600">Emergency Response Training - 15 employees completed</p>
              <p className="text-xs text-green-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-medium text-yellow-800">Near Miss Reported</p>
              <p className="text-sm text-yellow-600">Slip hazard identified in Building A lobby - corrective action taken</p>
              <p className="text-xs text-yellow-500">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800">Safety Inspection Completed</p>
              <p className="text-sm text-blue-600">Monthly safety audit for Midwest Office - 95% compliance rate</p>
              <p className="text-xs text-blue-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;