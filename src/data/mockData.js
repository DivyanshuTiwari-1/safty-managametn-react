// src/data/mockData.js
export const mockData = {
    dashboard: {
      daysWithoutIncident: 127,
      incidentRate: 0.8,
      trainingCompletion: 94,
      nearMissReports: 23,
      ppeCompliance: 98,
      safetyAuditScore: 92
    },
    incidents: [
      {
        id: 'INC-001',
        type: 'Near Miss',
        severity: 'Low',
        date: '2024-11-28',
        location: 'Midwest Office',
        description: 'Slip hazard in lobby area',
        status: 'Resolved'
      },
      {
        id: 'INC-002',
        type: 'First Aid',
        severity: 'Low',
        date: '2024-11-25',
        location: 'Construction Site A',
        description: 'Minor cut from equipment',
        status: 'Under Investigation'
      },
      {
        id: 'INC-003',
        type: 'Property Damage',
        severity: 'Medium',
        date: '2024-11-20',
        location: 'Client Site',
        description: 'Vehicle backing incident',
        status: 'Closed'
      }
    ],
    training: [
      {
        name: 'Sarah Mitchell',
        role: 'Project Manager',
        status: 'Current',
        generalSafety: '2024-01-15',
        emergencyResponse: '2024-03-20',
        ppeTraining: '2024-02-10',
        firstAid: '2024-11-05'
      },
      {
        name: 'Michael Rodriguez',
        role: 'Engineer',
        status: 'Expiring',
        generalSafety: '2024-02-01',
        emergencyResponse: '2023-12-15',
        ppeTraining: '2024-01-25',
        firstAid: '2023-11-20'
      },
      {
        name: 'Jennifer Chen',
        role: 'Environmental Specialist',
        status: 'Current',
        generalSafety: '2024-05-10',
        emergencyResponse: '2024-04-15',
        ppeTraining: '2024-03-20',
        firstAid: '2024-10-12'
      }
    ],
    inspections: [
      {
        id: 'INSP-001',
        type: 'Monthly Safety Audit',
        date: '2024-11-15',
        location: 'Midwest Office',
        inspector: 'Safety Officer Johnson',
        score: '95%',
        actionItems: 2,
        status: 'Complete'
      },
      {
        id: 'INSP-002',
        type: 'Equipment Safety Check',
        date: '2024-11-10',
        location: 'Construction Site A',
        inspector: 'John Smith',
        score: '88%',
        actionItems: 3,
        status: 'Complete'
      },
      {
        id: 'INSP-003',
        type: 'Workplace Assessment',
        date: '2024-11-05',
        location: 'Southeast Office',
        inspector: 'Safety Officer Wilson',
        score: '92%',
        actionItems: 1,
        status: 'Complete'
      }
    ],
    ppeCompliance: {
      locations: [
        { name: 'Midwest Office', compliance: 99, violations: 1 },
        { name: 'Construction Site A', compliance: 96, violations: 4 },
        { name: 'Southeast Office', compliance: 98, violations: 2 },
        { name: 'Client Site B', compliance: 95, violations: 3 },
        { name: 'Northeast Office', compliance: 100, violations: 0 }
      ]
    },
    aiAnalytics: {
      highRiskProjects: [
        { name: 'Water Treatment Phase 2', score: 7.8 },
        { name: 'Downtown Bridge', score: 7.2 },
        { name: 'Factory Expansion', score: 6.9 }
      ],
      riskTeams: [
        { name: 'Site Inspection Team', newMembers: 5, total: 12 },
        { name: 'Gas Inspection Team', newMembers: 5, total: 8 }
      ],
      connectedSources: [
        { name: 'OSHA Reporting System', status: 'Connected', lastSync: '2024-12-01 09:00', records: 1250 },
        { name: 'Time Tracking System', status: 'Connected', lastSync: '2024-12-01 08:30', records: 890 },
        { name: 'Training Management LMS', status: 'Connected', lastSync: '2024-11-30 17:00', records: 2100 },
        { name: 'Equipment Monitoring', status: 'Pending', lastSync: '2024-11-29 14:00', records: 450 },
        { name: 'Client Safety Reports', status: 'Connected', lastSync: '2024-12-01 07:15', records: 320 }
      ]
    }
  };