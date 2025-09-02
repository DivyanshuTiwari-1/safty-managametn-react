import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  FileText, 
  Upload, 
  Edit,
  Target,
  Users,
  MapPin
} from 'lucide-react';
import { mockData } from '../../data/mockData';

const AIAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI-Enhanced Safety Data & Predictive Risk Modeling</h2>
          <p className="text-gray-600">Import safety data and leverage AI for predictive risk analysis</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            <BarChart3 className="h-4 w-4" />
            <span>AI Risk Analysis</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <TrendingUp className="h-4 w-4" />
            <span>Sync All Sources</span>
          </button>
        </div>
      </div>

      {/* AI Predictive Risk Modeling */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="h-6 w-6 text-purple-600" />
          <h3 className="text-lg font-semibold">AI Predictive Risk Modeling</h3>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Predictive Analysis</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">High Risk Projects</h4>
            <div className="text-2xl font-bold text-red-600 mb-1">3</div>
            <div className="text-xs text-red-600 mb-2">Projects in Equipment Phase 8 Zone</div>
            {mockData.aiAnalytics.highRiskProjects.slice(0, 2).map((project, index) => (
              <div key={index} className="text-xs text-gray-600">• {project.name} (Score: {project.score}/10)</div>
            ))}
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">AI Risk Teams</h4>
            <div className="text-2xl font-bold text-yellow-600 mb-1">2</div>
            <div className="text-xs text-yellow-600 mb-2">Teams requiring intervention</div>
            {mockData.aiAnalytics.riskTeams.map((team, index) => (
              <div key={index} className="text-xs text-gray-600">• {team.name} ({team.newMembers} new of {team.total})</div>
            ))}
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">High-Risk Locations</h4>
            <div className="text-2xl font-bold text-orange-600 mb-1">4</div>
            <div className="text-xs text-orange-600 mb-2">Locations requiring attention</div>
            <div className="text-xs text-gray-600">• Factory 12B (Downtown)</div>
            <div className="text-xs text-gray-600">• Warehouse Complex C</div>
          </div>
        </div>

        {/* Smart Incident Detection */}
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Smart Incident Detection</h4>
            <div className="text-sm text-purple-700 mb-2">Emerging Hazard Identified</div>
            <div className="text-xs text-gray-600">AI analysis of near-miss reports detected pattern: "scaffolding instability" mentioned 8 times in past month across 3 sites - formal hazard category recommended</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Inspection Pattern Analysis</h4>
            <div className="text-sm text-blue-700 mb-2">Pattern Detected</div>
            <div className="text-xs text-gray-600">AI identified correlation between equipment failure rates and inspection timing - recommend shifting inspection schedule from monthly to bi-weekly for critical equipment</div>
          </div>
        </div>
      </div>

      {/* Connected Data Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Connected Data Sources</h3>
            <p className="text-sm text-gray-600">External systems providing safety data</p>
          </div>
          <div className="p-6 space-y-4">
            {mockData.aiAnalytics.connectedSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{source.name}</div>
                  <div className="text-xs text-gray-500">Last sync: {source.lastSync}</div>
                  <div className="text-xs text-gray-500">{source.records} records</div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  source.status === 'Connected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {source.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">AI Data Processing</h3>
            <p className="text-sm text-gray-600">Automated data extraction and analysis</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800">Smart Incident Detection</span>
              </div>
              <div className="text-sm text-blue-700 mb-1">AI automatically identifies potential safety incidents from reports and communications</div>
              <div className="text-xs text-blue-600">Processing 24/7 • 3 incidents detected this week</div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">Predictive Analytics</span>
              </div>
              <div className="text-sm text-green-700 mb-1">ML models predict safety risks and recommend preventive actions</div>
              <div className="text-xs text-green-600">ML accuracy: 5 risks identified for next month</div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-purple-800">Document Analysis</span>
              </div>
              <div className="text-sm text-purple-700 mb-1">Auto-extract safety data from PDFs, photos, and reports</div>
              <div className="text-xs text-purple-600">234 documents processed this month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Data Import */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Manual Data Import</h3>
          <p className="text-sm text-gray-600">Upload safety data files or enter data manually</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <div className="font-medium mb-1">Upload CSV File</div>
              <div className="text-sm text-gray-600">Import incident reports, training records</div>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer">
              <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <div className="font-medium mb-1">Upload Documents</div>
              <div className="text-sm text-gray-600">PDFs, images, inspection reports</div>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer">
              <Edit className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <div className="font-medium mb-1">Manual Entry</div>
              <div className="text-sm text-gray-600">Direct data input forms</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Quality Metrics */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Data Quality Metrics</h3>
          <p className="text-sm text-gray-600">Quality and completeness of safety data</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">96%</div>
              <div className="text-sm text-gray-600">Data Completeness</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">5min</div>
              <div className="text-sm text-gray-600">Avg Sync Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">2,456</div>
              <div className="text-sm text-gray-600">Records Today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;