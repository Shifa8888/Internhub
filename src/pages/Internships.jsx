import { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';
import Badge from '../components/Badge';
import { internships as initialInternships } from '../data/internships';

function Internships() {
  const [internships, setInternships] = useState(initialInternships);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newInternship, setNewInternship] = useState({
    title: '',
    description: '',
    department: '',
    duration: '',
    stipend: '',
    status: 'Open',
  });

  const handleAddInternship = (e) => {
    e.preventDefault();
    if (!newInternship.title || !newInternship.department || !newInternship.duration) return;
    setInternships([...internships, { id: internships.length + 1, ...newInternship }]);
    setNewInternship({
      title: '',
      description: '',
      department: '',
      duration: '',
      stipend: '',
      status: 'Open',
    });
    setIsModalOpen(false);
  };

  return (
    <MainLayout>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Internships</h2>
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Post New Internship
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-base sm:text-lg font-semibold">{internship.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">Department: {internship.department}</p>
            <p className="text-gray-600 text-sm sm:text-base">Duration: {internship.duration}</p>
            <p className="text-gray-600 text-sm sm:text-base">Stipend: {internship.stipend}</p>
            <Badge status={internship.status} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Post New Internship">
        <form onSubmit={handleAddInternship}>
          <FormInput
            label="Title"
            type="text"
            value={newInternship.title}
            onChange={(e) => setNewInternship({ ...newInternship, title: e.target.value })}
            required
          />
          <FormInput
            label="Description"
            type="text"
            value={newInternship.description}
            onChange={(e) => setNewInternship({ ...newInternship, description: e.target.value })}
          />
          <FormInput
            label="Department"
            type="text"
            value={newInternship.department}
            onChange={(e) => setNewInternship({ ...newInternship, department: e.target.value })}
            required
          />
          <FormInput
            label="Duration (weeks)"
            type="text"
            value={newInternship.duration}
            onChange={(e) => setNewInternship({ ...newInternship, duration: e.target.value })}
            required
          />
          <FormInput
            label="Stipend"
            type="text"
            value={newInternship.stipend}
            onChange={(e) => setNewInternship({ ...newInternship, stipend: e.target.value })}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={newInternship.status}
              onChange={(e) => setNewInternship({ ...newInternship, status: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Post Internship
          </button>
        </form>
      </Modal>
    </MainLayout>
  );
}

export default Internships;