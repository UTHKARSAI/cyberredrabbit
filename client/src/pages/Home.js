function Home() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-green-400">
        CyberRedRabbit
      </h1>

      <p className="mt-5 text-xl">
        Premium Cyber Security Learning Platform
      </p>

      <div className="mt-10 bg-gray-900 p-6 rounded-xl">

        <h2 className="text-3xl font-semibold">
          Ethical Hacking Masterclass
        </h2>

        <p className="mt-3 text-gray-300">
          Learn Penetration Testing, Web Hacking,
          Linux, Networking and Bug Bounty.
        </p>

        <button className="mt-5 bg-green-500 px-5 py-2 rounded-lg">
          Enroll Now
        </button>

      </div>

    </div>

  );
}

export default Home;