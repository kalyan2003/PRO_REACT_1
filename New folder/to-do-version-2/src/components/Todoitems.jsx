/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import Todoitem from "./Todoitem"
const Todoitems = ({todoItems}) => {
  return (
  <div className="items-container">
    {todoItems.map(
      (item) => <Todoitem clgName={item.name} clgDate={item.dueDate}></Todoitem> )}
       
      </div>
  )
}

export default Todoitems;