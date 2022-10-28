import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

type TaskData = {
  id: string,
  text: string,
  done: boolean,
};

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([
    {id: '1', text: "Buy milk", done: false},
    {id: '2', text: "Walk with dog", done: false},
    {id: '3', text: "Do homework", done: false},
  ])

  const [taskText, setTaskText] = useState('');

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    if (taskText !== '') {
      const newTask: TaskData = {id: Date.now().toString(), text: taskText, done: false};
      setTasks([...tasks, newTask])
    }
  }

  const deleteTask = (id: string) => {
    const tasksCopy: TaskData[] = [...tasks];
    const taskForDeletionIndex = tasks.findIndex(task => task.id === id);
    tasksCopy.splice(taskForDeletionIndex, 1)
    setTasks(tasksCopy);
  }

  const taskStatusChanged = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const tasksCopy = [...tasks];
    const currentTask = tasksCopy.find(task => task.id === id);

    if (currentTask) {
      currentTask.done = event.target.checked;
      setTasks(tasksCopy);
    }
  }

  return (
    <div className="App">
      <AddTaskForm text={taskText} onTextChange={textChange} addTask={addTask}></AddTaskForm>
      {tasks.map(task => {
        return <Task text={task.text}
                     key={task.id}
                     delete={() => deleteTask(task.id)}
                     taskStatusChanged={event => taskStatusChanged(event, task.id)}
                     done={task.done}/>;
      })}
    </div>
  );

}

export default App;

