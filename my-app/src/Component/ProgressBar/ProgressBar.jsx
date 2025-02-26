import React, { useState, useEffect } from "react";
// import "./progressBar.css"; // Keep styles in a CSS file

const ProgressBar = () => {
  const [queue, setQueue] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const addProgress = () => {
    const progress = { id: Date.now(), status: "start" }; // Set initial status to "start"
    setQueue((prevQueue) => [...prevQueue, progress]);
  };

  const getInProgressCount = (queue) => {
    return queue.filter((item) => item.status === "progress").length;
  };

  const startProcess = () => {
    if (isRunning) return;

    setIsRunning(getInProgressCount(queue));
    processQueue();
  };

  const processQueue = () => {
    console.log("calling processQueue");
    setQueue((prevQueue) => {
      if (getInProgressCount(prevQueue) >= 3) return prevQueue; // Only allow 3 in progress at a time

      const nextIndex = prevQueue.findIndex((item) => item.status === "start");
      if (nextIndex === -1) {
        setIsRunning(false); // Stop if no more items with status "start"
        return prevQueue;
      }

      const updatedQueue = [...prevQueue];
      updatedQueue[nextIndex].status = "progress"; // Set the next item to "progress"
      return updatedQueue;
    });

    setTimeout(() => {
      setQueue((prevQueue) => {
        const updatedQueue = [...prevQueue];
        const inProgressIndex = updatedQueue.findIndex(
          (item) => item.status === "progress"
        );

        if (inProgressIndex !== -1) {
          updatedQueue[inProgressIndex].status = "complete"; // Mark as complete
        }

        return updatedQueue;
      });

      processQueue(); // Check if there are more items to process after completion
    }, 3000);
  };

  useEffect(() => {
    if (
      queue.some((item) => item.status === "start") &&
      getInProgressCount(queue) < 3
    ) {
      startProcess();
    }
  }, [queue]);

  return (
    <div>
      <div>
        <button onClick={addProgress}>Add Progress Bar</button>
      </div>

      <div className="container">
        {queue.map((item) => (
          <div className="progress-bar" key={item.id}>
            <div className={`progress-inner ${item.status}`}>{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
