import React from "react";
import "../Category/Category.scss";
import { CategoryData1, CategoryData2 } from "./CategoryData";

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <ul>
          {CategoryData1.map((CategoryElement) => (
            <li key={CategoryElement.key}>{CategoryElement.name}</li>
          ))}
        </ul>
        <ul>
          {CategoryData2.map((CategoryElement) => (
            <li key={CategoryElement.key}>{CategoryElement.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
