/* eslint-disable react/prop-types */
import styles from "./Item.module.css";

const handleBuyButtonClicked = (event) => {
  console.log(event);
  console.log(`${items} being bought`)
}

const Item = ({items,handleBuyButtonClicked}) => {

  
 
  return <li  className={`${styles["kg-items"]} list-group-item`}><span className={styles["kg-span"]}>{items}</span>
  <button className={`${styles.button} btn btn-success`}
  onClick = {handleBuyButtonClicked}
  >Buy</button>
  </li>

  
}

export default Item;