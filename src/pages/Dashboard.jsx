import MainLayout from '../layout/MainLayout';
import { candidates } from '../data/candidates';
import { internships } from '../data/internships';

function Dashboard() {
  return (
    <MainLayout>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Candidates</h3>
          <p className="text-xl sm:text-2xl">{candidates.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Open Internships</h3>
          <p className="text-xl sm:text-2xl">{internships.filter((i) => i.status === 'Open').length}</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;