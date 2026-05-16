import { useState } from 'react';
import axios from 'axios';

function AddCourse() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const addCourse = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem('token');

      const res = await axios.post(
        'http://localhost:5000/courses',
        {
          title,
          price,
          desc
        },
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert('Course Added Successfully');

      console.log(res.data);

    } catch (err) {

      alert('Access Denied');

    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={addCourse}
        className="bg-gray-900 p-10 rounded-xl w-96"
      >

        <h2 className="text-3xl text-green-400 font-bold mb-6">
          Add Course
        </h2>

        <input
          type="text"
          placeholder="Course Title"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-500 p-3 rounded font-bold"
        >
          Upload Course
        </button>

      </form>

    </div>

  );
}

export default AddCourse;