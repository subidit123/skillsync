const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to <span className="text-indigo-600">SkillSync</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Your all-in-one interactive portfolio and resume analyzer made to impress recruiters and showcase your tech journey.
      </p>
      <div className="flex gap-4">
        <a href="/projects" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">View Projects</a>
        <a href="/resume-analyzer" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">Analyze Resume</a>
      </div>
    </section>
  );
};

export default Home;
