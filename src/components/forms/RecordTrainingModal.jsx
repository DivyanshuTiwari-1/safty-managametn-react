import React from 'react';
import { Modal } from '../common/Modal';
const RecordTrainingModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose} title="Record Safety Training">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Training Type</label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2">
            <option>Select training type</option>
            <option>General Safety</option>
            <option>Emergency Response</option>
            <option>PPE Training</option>
            <option>First Aid</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
            <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea placeholder="Provide any additional notes" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">Cancel</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Save</button>
      </div>
    </Modal>);

export default RecordTrainingModal;