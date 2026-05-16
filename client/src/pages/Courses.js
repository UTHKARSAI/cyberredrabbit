import { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/courses'
      );

      setCourses(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const handlePayment = async (course) => {

    try {

      const res = await axios.post(
        'http://localhost:5000/payment/create-order',
        {
          amount: course.price
        }
      );

      const order = res.data;

      const options = {

        key: 'rzp_test_Snoz6s3OuDkUJz',

        amount: order.amount,

        currency: order.currency,

        name: 'CyberRedRabbit',

        description: 'Course Purchase',

        order_id: order.id,

        handler: async function (response) {

          console.log(response);

          alert("Payment Successful");

        },

        theme: {
          color: '#22c55e'
        }

      };

      const razor = new window.Razorpay(options);

      razor.open();

    } catch (err) {

      console.log(err);

      alert("Payment Failed");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-green-400 mb-10">
        Premium Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {courses.map((course) => (

          <div
            key={course._id}
            className="bg-gray-900 p-6 rounded-xl"
          >

            <h2 className="text-2xl font-bold">
              {course.title}
            </h2>

            <p className="text-gray-400 mt-3">
              {course.desc}
            </p>

            <h3 className="text-green-400 text-xl mt-4">
              ₹{course.price}
            </h3>

            <button
              onClick={() => handlePayment(course)}
              className="mt-5 bg-green-500 px-5 py-2 rounded-lg w-full"
            >
              Buy Now
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Courses;