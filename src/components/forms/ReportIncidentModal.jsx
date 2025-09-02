import React from 'react';
import { Modal } from '../common/Modal';
const ReportIncidentModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose} title="Report Safety Incident">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
            <input type="datetime-local" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select location</option>
              <option>Midwest Office</option>
              <option>Construction Site A</option>
              <option>Southeast Office</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Incident Type</label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2">
            <option>Select incident type</option>
            <option>Near Miss</option>
            <option>First Aid</option>
            <option>Property Damage</option>
            <option>Injury</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea placeholder="Provide detailed description of what happened" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Injury Severity</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select severity</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reporter Name</label>
            <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Submit Report</button>
        </div>
      </div>
    </Modal>
  );

  export default ReportIncidentModal;