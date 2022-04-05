import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// import { useState } from "react/cjs/react.production.min";
// console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[taskStateArray, setTaskStateArray] = useState(TASKS)
  const [category, setCategory] = useState("All");

  
  function deletedTask(text){
    setTaskStateArray(taskStateArray.filter((task) => task.text !== text)) 
  }

  function handleDelete(key){
    deletedTask(key)
    }

    function handleCategory(cat){
      setCategory(cat)
      handleFilter(cat)

    }

    function handleFilter(cat){
      setTaskStateArray(taskStateArray.filter((task) => {
            if(cat === "All"){
              return true
            } else {
              return task.category === cat
            }
          }) 
          )
    }

    // function handleAddTask(e){
    //   setAddTask(e.target.value)
    //   console.log(e.target.value)
    // }

    function handleAddTask(newTask){
      // console.log(newTask)
      setTaskStateArray([...taskStateArray, newTask])
    }
 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES} 
      selectedCategory = {category} 
      onSelectCategory = {handleCategory}/>
      <NewTaskForm 
      categories = {CATEGORIES}
      onTaskFormSubmit = {handleAddTask}
      />
      <TaskList 
      tasks = {taskStateArray}  
      onDelete = {handleDelete}
      />
    </div>
  );
}

export default App;
