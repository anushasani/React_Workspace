import { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div className="w-64 mx-auto mt-10">
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-blue-500 h-6 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button
        onClick={increaseProgress}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increase Progress
      </button>
    </div>
  );
};

export default ProgressBar;
