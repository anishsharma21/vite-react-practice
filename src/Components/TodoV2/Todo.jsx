import styles from "./TodoV2.module.css";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className={styles.todoList}>
        <h1 className={styles.h1}>Todo List</h1>

        <input
          type="text"
          placeholder="Create new task..."
          value={newTask}
          className={styles.addTaskField}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className={styles.addButton} onClick={handleAddTask}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
