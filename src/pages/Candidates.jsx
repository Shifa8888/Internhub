import { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';
import Badge from '../components/Badge';
import { candidates as initialCandidates } from '../data/candidates';
import { internships } from '../data/internships';

function Candidates() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    email: '',
    internship: '',
    status: 'Pending',
  });

  const filteredCandidates = candidates
    .filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortBy === 'name' ? a.name.localeCompare(b.name) : a.status.localeCompare(b.status)
    );

  const handleAddCandidate = (e) => {
    e.preventDefault();
    if (!newCandidate.name || !newCandidate.email || !newCandidate.internship) return;
    setCandidates([...candidates, { id: candidates.length + 1, ...newCandidate }]);
    setNewCandidate({ name: '', email: '', internship: '', status: 'Pending' });
    setIsModalOpen(false);
  };

  return (
    <MainLayout>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Candidates</h2>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md p-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full sm:w-auto"
        >
          Add Candidate
        </button>
      </div>
<div className="bg-white rounded-lg shadow-md overflow-x-auto">
  <table className="min-w-full table-auto">
    <thead className="bg-gray-200 sticky top-0">
      <tr>
        <th
          className="p-2 sm:p-3 text-left cursor-pointer text-xs sm:text-base whitespace-nowrap w-1/4"
          onClick={() => setSortBy('name')}
        >
          Name
        </th>
        <th className="p-2 sm:p-3 text-left text-xs sm:text-base whitespace-nowrap w-1/3 truncate">
          Email
        </th>
        <th className="p-2 sm:p-3 text-left text-xs sm:text-base whitespace-nowrap w-1/4">
          Internship
        </th>
        <th
          className="p-2 sm:p-3 text-left cursor-pointer text-xs sm:text-base whitespace-nowrap w-1/6"
          onClick={() => setSortBy('status')}
        >
          Status
        </th>
      </tr>
    </thead>
    <tbody>
      {filteredCandidates.map((candidate) => (
        <tr key={candidate.id} className="border-t hover:bg-gray-50">
          <td className="p-2 sm:p-3 text-xs sm:text-base whitespace-nowrap">
            {candidate.name}
          </td>
          <td className="p-2 sm:p-3 text-xs sm:text-base whitespace-nowrap truncate">
            {candidate.email}
          </td>
          <td className="p-2 sm:p-3 text-xs sm:text-base whitespace-nowrap">
            {candidate.internship}
          </td>
          <td className="p-2 sm:p-3">
            <Badge status={candidate.status} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Candidate">
        <form onSubmit={handleAddCandidate}>
          <FormInput
            label="Name"
            type="text"
            value={newCandidate.name}
            onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={newCandidate.email}
            onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })}
            required
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Internship</label>
            <select
              value={newCandidate.internship}
              onChange={(e) => setNewCandidate({ ...newCandidate, internship: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Internship</option>
              {internships.map((i) => (
                <option key={i.id} value={i.title}>
                  {i.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={newCandidate.status}
              onChange={(e) => setNewCandidate({ ...newCandidate, status: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Add Candidate
          </button>
        </form>
      </Modal>
    </MainLayout>
  );
}

export default Candidates;