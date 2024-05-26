import React from "react";

const CategoryCard = ({image, description, title}) => {
  return (
    <div className="categoryCard">
      <div className="overlay"></div>
      <img src={image} alt="" />
      <div className="categoryText">
        <p>{description}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
