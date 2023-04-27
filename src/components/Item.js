import React,{useState} from "react";

function Item({ name, category }) {
  const [itemInCart , addingToCart] = useState(false)
  function handlingClick(){
    addingToCart((checkingItem)=> !checkingItem)
    console.log(itemInCart)
  }
  const ItemClass = itemInCart ? "in-cart":" "
  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlingClick}>{itemInCart? "Remove from Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
