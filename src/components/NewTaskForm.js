import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {
  const [addTask, setAddTask] = useState('')
  const [taskCategory, setTaskCategory] = useState('All')

  function handleNewTask(e){
    setAddTask(e.target.value)
  }

  function handleNewCat(e){
    setTaskCategory(e.target.value)
  }
 
  function handleSubmit(e){
    console.log(e)
    e.preventDefault();
    const newTask = {
      text: addTask,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask);
    setAddTask("");
    setTaskCategory("All");
  
  }
  
const selectCat = categories.map((category) => <option> {category} </option>)
  return (
    <form className="new-task-form" onSubmit ={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={addTask} onChange ={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCat}>
          {selectCat}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
