import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Candidates from './pages/Candidates';
import Internships from './pages/Internships';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Routes>
<Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;