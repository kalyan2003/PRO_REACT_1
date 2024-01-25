import styles from "./FoodInput.module.css";


const FoodInput = () => {

  const handleOnChange = (event) => {
    console.log(event.target.value);

  }
  return <input  className={styles.foodInput}type="text" placeholder="Enter food item here" 
  onChange={handleOnChange}/>;
}

export default FoodInput;