// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);


import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"; // Importing the car data from an external file

// Destructuring the array to extract Honda and Tesla objects
const [honda, tesla] = cars;

// Extracting top speed from Honda's speedStats object
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

// Extracting top speed from Tesla's speedStats object
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

// Extracting the most popular color from Honda's coloursByPopularity array
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

// Extracting the most popular color from Tesla's coloursByPopularity array
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

// Rendering a table displaying car brands, top speeds, and most popular colors
ReactDOM.render(
  <table>
    {/* Table Header */}
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    
    {/* Tesla Data Row */}
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>

    {/* Honda Data Row */}
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root") // Rendering inside the "root" div in the HTML
);
