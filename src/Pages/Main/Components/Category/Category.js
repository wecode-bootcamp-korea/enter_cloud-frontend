import React from "react";
import "../Category/Category.scss";
import { CategoryData } from "./CategoryData";

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <ul>
          {CategoryData.map((CategoryElement) => (
            <li key={CategoryElement.key}>{CategoryElement.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
