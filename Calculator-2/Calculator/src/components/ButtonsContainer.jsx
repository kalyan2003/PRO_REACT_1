/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import styles from "./ButtonsContainer.module.css";


const ButtonsContainer = () => {
  const buttonNames = ['c','1','2','3','4','5','6','7','8','9','0','/','*','=','-'];
  return (


    <div className={styles.buttonsContainer}>

      {buttonNames.map(buttonName => <button className={styles.buttons}>{buttonName}</button>)}
    
    
  </div>
  );
}

export default ButtonsContainer;