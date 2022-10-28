import React from 'react';

interface TaskProps {
  text: string,
  done: boolean,
  delete: React.MouseEventHandler<HTMLButtonElement>,
  taskStatusChanged: React.ChangeEventHandler<HTMLInputElement>,
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div className={props.done ? 'task-container checked' : 'task-container'}>
      <span>{props.text}</span>
      <div>
        <input type="checkbox" checked={props.done} onChange={props.taskStatusChanged}/>
        <button className="button-del" onClick={props.delete}>delete</button>
      </div>
    </div>
  );
};

export default Task;