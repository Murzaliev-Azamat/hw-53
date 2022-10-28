import React from 'react';

interface AddTaskFormProps{
  text: string,
  addTask: React.ReactEventHandler<HTMLButtonElement>,
  onTextChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<AddTaskFormProps> = props => {
  return (
    <div className="form-container">
      <input type="text" value={props.text} onChange={props.onTextChange} className="input-form"/>
      <button type="button" className="button-form" onClick={props.addTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;