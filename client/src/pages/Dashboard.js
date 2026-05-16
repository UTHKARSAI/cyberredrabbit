import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (!token) {

      navigate('/login');

    }

  }, [navigate]);

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-green-400">
        Dashboard
      </h1>

      <p className="mt-4 text-gray-400">
        Welcome to CyberRedRabbit Premium
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Purchased Courses
          </h2>

          <p className="mt-3 text-gray-400">
            Access your premium content
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Bug Bounty Labs
          </h2>

          <p className="mt-3 text-gray-400">
            Practice ethical hacking
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Certificates
          </h2>

          <p className="mt-3 text-gray-400">
            Track your achievements
          </p>
        </div>

      </div>

    </div>

  );
}

export default Dashboard;