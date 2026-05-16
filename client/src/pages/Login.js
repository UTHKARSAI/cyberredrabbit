import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        'http://localhost:5000/auth/login',
        {
          email,
          password
        }
      );

      localStorage.setItem('token', res.data.token);

      alert('Login Successful');

      navigate('/dashboard');

    } catch (err) {

      alert('Invalid Credentials');

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black">

      <form
        onSubmit={loginUser}
        className="bg-gray-900 p-10 rounded-xl w-96"
      >

        <h2 className="text-3xl text-green-400 font-bold mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-500 p-3 rounded font-bold"
        >
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;