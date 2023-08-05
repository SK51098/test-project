import React from "react";
import "./styles.css";

const TopCategories = () => {
  const categories = [
    "Activewear",
    "Co-ords",
    "Coats & Jackets",
    "Dresses",
    "Hoodies & Sweatshirts",
    "Jeans",
    "Skirts & Tops",
    "Jumpsuits & Playsuits",
    "Lingeries",
    "Bikinis & Swimsuits",
  ];

  const buttons = categories.map((category) => (
    <button key={category} className="topCategories__Button">
      {category}
    </button>
  ));

  return (
    <div className="topCategories">
      <h3 className="text-center mt-5 mb-5">Top Categories</h3>
      <div className="topCategories__Content">{buttons}</div>
    </div>
  );
};

export default TopCategories;
