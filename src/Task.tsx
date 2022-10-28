import React from 'react';

interface TaskProps {
  text: string;
  delete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div className="task-container">
      <span>{props.text}</span>
      <button className="button-del" onClick={props.delete}>delete</button>
    </div>
  );
};

export default Task;