import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

type TaskData = {
  id: string,
  text: string,
};

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([
    {id: '1', text: "Buy milk"},
    {id: '2', text: "Walk with dog"},
    {id: '3', text: "Do homework"},
  ])

  const [taskText, setTaskText] = useState('');

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    if (taskText !== '') {
      const newTask: TaskData = {id: Date.now().toString(), text: taskText};
      setTasks([...tasks, newTask])
    }
  }

  const deleteTask = (id: string) => {
    const tasksCopy: TaskData[] = [...tasks];
    const taskForDeletionIndex = tasks.findIndex(task => task.id === id);
    tasksCopy.splice(taskForDeletionIndex, 1)
    setTasks(tasksCopy);
  }

  return (
    <div className="App">
      <AddTaskForm text={taskText} onTextChange={textChange} addTask={addTask}></AddTaskForm>
      {tasks.map(task => {
        return <Task text={task.text}
                     key={task.id}
                     delete={() => deleteTask(task.id)}/>;
      })}
    </div>
  );

}

export default App;

