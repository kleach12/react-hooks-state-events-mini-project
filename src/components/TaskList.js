import React from "react";
import Task from "./Task";


function TaskList({tasks, onDelete }) {

  const taskArray  = tasks.map((AddedTask, index) => (
    <Task  
      key = {index} 
      text = {AddedTask.text} 
      category = {AddedTask.category}
      taskdelete =  {onDelete}
      id = {index}
      />
))

  return (
    <div className="tasks">
    {taskArray}
    </div>
  );
}

export default TaskList;
