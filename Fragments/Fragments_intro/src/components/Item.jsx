/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FoodItems from "./FoodItems";
import styles from "./Item.module.css";

const handleBuyButtonClicked = (event) => {
  console.log(event);
  console.log(`${FoodItems} being bought`)
}

const Item = ({items,bought, handleBuyButtonClicked}) => {

  
 
  return <li  className={`${styles["kg-items"]} list-group-item ${bought && 'active'}`}><span className={styles["kg-span"]}>{items}</span>
  <button className={`${styles.button} btn btn-success`}
  onClick = {handleBuyButtonClicked}
  >Buy</button>
  </li>

  
}

export default Item;