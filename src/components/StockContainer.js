import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addOnPortfolio, onRemoveStock, portfolio ,sortByName, sortByPrice}) {
  return (
    <div>
      {stocks.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          addOnPortfolio={addOnPortfolio}
          onRemoveStock={onRemoveStock}
          portfolio={portfolio}
          sortByName={sortByName}
          sortByPrice={sortByPrice}
        />
      ))}
    </div>
  );
}

export default StockContainer;
