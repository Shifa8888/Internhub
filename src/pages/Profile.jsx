import MainLayout from '../layout/MainLayout';
import FormInput from '../components/FormInput';
import { FaUser, FaEnvelope, FaUserShield, FaLock } from 'react-icons/fa';

function Profile() {
  return (
    <MainLayout>
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaUser className="text-black" />
        User Profile
      </h2>

      {/* Main Card */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-8">
        {/* User Info Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            <FaUser className="text-black" />
            User Information
          </h3>

          <div className="space-y-4 text-gray-600 text-sm sm:text-base">
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="flex items-center gap-2">
                <FaUser className="text-black" />
                <span className="font-medium w-24 inline-block">Name:</span>
              </span>
              <span>Admin User</span>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-black" />
                <span className="font-medium w-24 inline-block">Email:</span>
              </span>
              <span>admin@example.com</span>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="flex items-center gap-2">
                <FaUserShield className="text-black" />
                <span className="font-medium w-24 inline-block">Role:</span>
              </span>
              <span>Administrator</span>
            </p>
          </div>
        </div>

        {/* Password Change Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            <FaLock className="text-black" />
            Change Password
          </h3>

          <form className="grid gap-4 sm:grid-cols-2">
            <FormInput label="Current Password" type="password" className="col-span-full" />
            <FormInput label="New Password" type="password" className="col-span-full" />
            <FormInput label="Confirm New Password" type="password" className="col-span-full" />

            <div className="col-span-full">
              <button
                type="button"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition-all"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
