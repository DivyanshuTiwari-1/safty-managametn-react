// src/App.jsx
import React, { useState } from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import Dashboard from './components/pages/Dashboard';
import IncidentManagement from './components/pages/IncidentManagement';
import TrainingManagement from './components/pages/TrainingManagement';
import InspectionManagement from './components/pages/InspectionManagement';
import PPETracking from './components/pages/PPETracking';
import AIAnalytics from './components/pages/AIAnalytics';
import ScheduleInspectionModal from './components/forms/ScheduleInspectionModal';
import RecordTrainingModal from './components/forms/RecordTrainingModal';
import ReportIncidentModal from './components/forms/ReportIncidentModal';
import { 
  BarChart3, 
  AlertTriangle, 
  Users, 
  CheckCircle, 
  Shield, 
  Upload 
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [modals, setModals] = useState({
    scheduleInspection: false,
    recordTraining: false,
    reportIncident: false
  });

  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'incidents', name: 'Incidents', icon: AlertTriangle },
    { id: 'training', name: 'Training', icon: Users },
    { id: 'inspections', name: 'Inspections', icon: CheckCircle },
    { id: 'ppe', name: 'PPE Tracking', icon: Shield },
    { id: 'ai', name: 'Data Import', icon: Upload }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'incidents':
        return <IncidentManagement onReportIncident={() => openModal('reportIncident')} />;
      case 'training':
        return <TrainingManagement onRecordTraining={() => openModal('recordTraining')} />;
      case 'inspections':
        return <InspectionManagement onScheduleInspection={() => openModal('scheduleInspection')} />;
      case 'ppe':
        return <PPETracking />;
      case 'ai':
        return <AIAnalytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>

      {/* Modals */}
      <ScheduleInspectionModal
        isOpen={modals.scheduleInspection}
        onClose={() => closeModal('scheduleInspection')}
      />
      <RecordTrainingModal
        isOpen={modals.recordTraining}
        onClose={() => closeModal('recordTraining')}
      />
      <ReportIncidentModal
        isOpen={modals.reportIncident}
        onClose={() => closeModal('reportIncident')}
      />
    </div>
  );
};

export default App;
