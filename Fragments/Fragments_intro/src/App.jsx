/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
// import REACT from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

 
  //let foodItems = [];

  

  let [textShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState(["Salad",'green veggies','Roti']);
 

  const onKeyDown = (event) => {
    console.log(event.target.value);
    
    setTextState(event.target.value)
  };

  
 return ( 
  <>
  <Container>
   
    <h1 className="food-heading">Healthy Foods</h1>
   
  <ErrorMsg items={foodItems}></ErrorMsg>
  <FoodInput>handleKeyDown={handleKeyDown}</FoodInput>
  <p>{textShow}</p>
  <FoodItems items={foodItems} handleByButton = {() => console.log("Clicked")} ></FoodItems>

</Container>
{/* 
<Container>
   <p>Above is the list of healthy food.</p>
</Container> */}

</>
 );
}

export default App;
