/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
// import REACT from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

  let foodItems = ['Dal','Green Vegetable','Biryani','Ice cream','Laddu']
  //let foodItems = [];

  
 return ( 
  <>
  <Container>
   
    <h1 className="food-heading">Healthy Foods</h1>
    <FoodInput></FoodInput>

  <ErrorMsg items={foodItems}></ErrorMsg>
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
