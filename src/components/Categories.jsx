import React from "react";

const Categories = ({ categoryId, onClickCategory }) => {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Sharp", "Closed"];


  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
