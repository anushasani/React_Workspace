import React, { useState } from "react";

const CalenderDayView = () => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [events, setEvents] = useState([]);

  const handleClick = () => {
    const newEvent = {
      id: events.length + 1,
      title: title,
      startTime: startTime,
      endTime: endTime,
    };
    setEvents([...events, newEvent]);
    setTitle("");
    setStartTime("");
    setEndTime("");
  };
  const removeElement = (id) => {
    console.log("id", id);
    let newUpdates = events.filter((idEve) => idEve.id !== id);
    setEvents(newUpdates);
  };

  return (
    <div>
      <h5 className="text-blue-500 font-bold text-xl">Calender Overview</h5>
      <section>
        <div>
          <label className="text-gray-900 font-bold">Title</label>
          <input
            className="border border-gray-300 rounded-lg p-1 m-2 outline-none"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text-gray-900 font-bold"> Start Time </label>
          <input
            className="border border-gray-300 rounded-lg p-1 m-2 outline-none"
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label className="text-gray-900 font-bold"> End Time </label>
          <input
            className="border border-gray-300 rounded-lg p-1 m-2 outline-none"
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleClick}
        >
          Add Event
        </button>
      </section>
      <section>
        {events.map((Task, index) => {
          return (
            <div key={Task.id}>
              <p>{Task.id}</p>
              <p> {Task.title}</p>
              <p> {Task.startTime}</p>
              <p>{Task.endTime}</p>
              <button
                className="px-4 py-2 bg-green-300 text-white rounded hover:bg-green-700"
                onClick={() => removeElement(Task.id)}
              >
                {" "}
                Remove event
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CalenderDayView;
