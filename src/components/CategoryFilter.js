import React  from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}){

 const displayCatBtn = categories.map((category) => {
  const className = category === selectedCategory ? "selected" : null;
  return (
    <button 
      key = {category}
      class = {className} 
      onClick={() => onSelectCategory(category)}
    > 
    {category} </button> )})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCatBtn}
    </div>
  );
}

export default CategoryFilter;
