import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 relative overflow-hidden">
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md transition-all duration-300">
        <img src="/assets/logo.png" alt="Logo" className="mx-auto mb-6 w-24 sm:w-32 drop-shadow-lg" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back to <span className="text-indigo-600">InternHub</span>
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center animate-pulse">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-md hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}
          <span className="text-indigo-600 hover:underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
