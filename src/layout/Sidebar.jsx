import { HiOutlineHome, HiOutlineUsers, HiOutlineBriefcase, HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { name: 'Dashboard', to: '/dashboard', icon: <HiOutlineHome className="w-5 h-5" /> },
    { name: 'Candidates', to: '/candidates', icon: <HiOutlineUsers className="w-5 h-5" /> },
    { name: 'Internships', to: '/internships', icon: <HiOutlineBriefcase className="w-5 h-5" /> },
    { name: 'Profile', to: '/profile', icon: <HiOutlineUserCircle className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:transform-none sm:static sm:w-64 transition-transform duration-300 z-50`}
    >
      <div className="p-4">
        <img src="/assets/logo.png" alt="Logo" className="mb-6 w-24 sm:w-32 mx-auto" />
        <nav>
          {navItems.map(({ name, to, icon }) => (
            <Link
              key={name}
              to={to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition"
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;

