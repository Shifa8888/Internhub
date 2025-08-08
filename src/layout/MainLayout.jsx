import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col w-full">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="p-4 sm:p-6 max-w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;