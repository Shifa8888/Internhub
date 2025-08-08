function Topbar({ setIsSidebarOpen }) {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button
          className="sm:hidden text-gray-700 mr-4"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          ☰
        </button>
        <h1 className="text-lg sm:text-xl font-semibold">InternHub</h1>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span className="text-gray-700 text-sm sm:text-base">Admin User</span>
 {/* Profile image from placeholder */}
  <img
    src="https://randomuser.me/api/portraits/women/44.jpg"
    alt="Profile"
    className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
  />        <span className="text-gray-500 cursor-pointer text-lg">🔔</span>
      </div>
    </div>
  );
}

export default Topbar;