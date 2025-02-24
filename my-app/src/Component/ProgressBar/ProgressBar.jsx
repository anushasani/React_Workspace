import { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [intervalID, setIntervalID] = useState(null); // To store interval ID

  const increaseProgress = () => {
    if (intervalID) {
      // If there's already an interval running, clear it first
      clearInterval(intervalID);
    }
    // Start a new interval if progress is less than 100
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(id); // Stop the interval when progress reaches 100
          return 100;
        }
        return prev + 10; // Increment progress by 10
      });
    }, 1000);
    setIntervalID(id); // Store the interval ID
  };

  // Cleanup when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalID) {
        clearInterval(intervalID); // Ensure the interval is cleared when the component unmounts
      }
    };
  }, [intervalID]);

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
