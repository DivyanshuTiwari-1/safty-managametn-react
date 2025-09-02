// src/components/forms/ScheduleInspectionModal.jsx
import React from 'react';
import { Modal } from '../common/Modal';

const ScheduleInspectionModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Schedule Safety Inspection">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Employees Trained</label>
        <textarea placeholder="Enter employee names or IDs (one per line)" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Trainer/Instructor</label>
        <input type="text" placeholder="Trainer name or organization" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Training Record</button>
      </div>
    </div>
  </Modal>
);

export default ScheduleInspectionModal;