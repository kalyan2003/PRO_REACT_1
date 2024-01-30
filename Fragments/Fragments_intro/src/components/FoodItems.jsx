/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Item from "./Item";
const FoodItems = ({ items }) => {

  
 return (
  <ul className="list-group ">
  {items.map((item) => (
    <Item key={item} 
    bought = {true}
    items={item}></Item>
  ))}


</ul>
 )
};

export default FoodItems;