import React from "react";
import PropTypes from "prop-types";

function InventoryItem(props){

  function handleClick() {
    return props.onVendInventory(props.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return props.onRestockInventory(props.id, parseInt(event.target.quantity.value));
    }

  let inventoryDisplay = null;
  if (props.quantity <= 0) {
    inventoryDisplay = <h4>{props.name} is <strong>Out of Stock</strong></h4>
  } else {
    inventoryDisplay =
    <>
    <h3>Name: {props.name}</h3><br />
    <li>Origin: {props.origin} | Roast: {props.roast} </li><br />
    <li>Price: {props.price}</li><br />
    <li>Quantity Available: {props.quantity}</li><hr />
    </>
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onInventorySelect(props.id)}>
      {inventoryDisplay}
      </div>
      <button className="btn btn-outline-dark" onClick={handleClick}>Vend Inventory</button>
      <form onSubmit={handleSubmit}>
        <input type="number" required min="1" max="100" name="quantity" className="form-control"/>
      <button className="btn btn-outline-dark">Restock Inventory</button>
      </form>
    </React.Fragment>
  );
}

InventoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  onVendInventory: PropTypes.func,
  onRestockInventory: PropTypes.func,
  onInventorySelect: PropTypes.func
}

export default InventoryItem;