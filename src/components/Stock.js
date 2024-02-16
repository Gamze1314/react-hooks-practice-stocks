import React from "react";

function Stock({ stock, addOnPortfolio, onRemoveStock, portfolio }) {
  const { name, price } = stock;

  function handleClick(id) {
      addOnPortfolio(id);  
  }

  function handleSell(stock) {
    onRemoveStock(stock);
  }

  return (
    <div>
      <div onClick={() => handleClick(stock.id)} className="card">
        <div onClick={() => handleSell(stock)} className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
