import { useState } from 'react';

const ResumeAnalyzer = () => {
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = () => {
    setAnalysis({
      skillsMatched: ['React', 'Tailwind CSS', 'HTML'],
      suggestions: ['Add unit testing experience', 'Mention React Hooks clearly']
    });
  };

  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Resume Analyzer</h2>
      <p className="mb-4">Upload your resume to get frontend-skill-based analysis (mock logic only).</p>
      <button onClick={handleAnalyze} className="mb-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Analyze Resume</button>
      {analysis && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
          <h3 className="font-semibold text-lg mb-2">Skills Matched:</h3>
          <ul className="list-disc ml-6 mb-4">
            {analysis.skillsMatched.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <h3 className="font-semibold text-lg mb-2">Suggestions:</h3>
          <ul className="list-disc ml-6">
            {analysis.suggestions.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ResumeAnalyzer;
