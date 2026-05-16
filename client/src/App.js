import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import AddCourse from './pages/AddCourse';

function App() {

  const token = localStorage.getItem('token');

  const logoutUser = () => {

    localStorage.removeItem('token');

    window.location.href = '/login';

  };

  return (

    <BrowserRouter>

      <nav className="bg-black text-white p-4 flex gap-5 items-center">

        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        {!token && (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/add-course">
              Add Course
            </Link>

            <button
              onClick={logoutUser}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/add-course"
          element={<AddCourse />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;