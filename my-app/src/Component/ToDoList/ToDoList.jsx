import { useState } from "react";

const ToDoList = () => {
  const [toDoName, setoDoName] = useState("");
  const [priority, setPriority] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleClick = () => {
    if (!toDoName || !priority) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
    let data = { toDoName: toDoName, priority: priority };

    setTaskList((prevList) =>
      [...prevList, data].sort((a, b) => a.priority - b.priority)
    );
    setPriority("");
    setoDoName("");
  };

  return (
    <div>
      <section>
        <div>
          <label>Task Name</label>
          <input
            value={toDoName}
            onChange={(e) => setoDoName(e.target.value)}
          />
        </div>
        <div>
          <label>Priority</label>
          <input
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create</button>
        <div>{isValid ? "Enter Valid Input" : ""}</div>
      </section>
      <section>
        <table>
          <tr>
            <th>Name</th>
            <th>Priority</th>
          </tr>
          <tbody>
            {taskList.map((task, index) => (
              <tr key={index}>
                {task.toDoName}
                {""}
                {""} {task.priority}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ToDoList;
