import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);

  function handleAddStock(id) {
    const updatedList = stocks.filter((stock) => stock.id !== id);
    setStocks(updatedList);

    fetch(`http://localhost:3001/stocks/${id}`)
      .then((r) => r.json())
      .then((s) => setPortfolio((prev) => [...prev, s]));
  }

  function handlePortfolio(stock) {
    const secondUpdate = portfolio.filter((p) => p.id !== stock.id);
    setPortfolio(secondUpdate);
  }

  function sortByName() {
    const sortedStocks = [...stocks].sort((a, b) => {
      const nameA = a.ticker.toUpperCase();
      const nameB = b.ticker.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setStocks(sortedStocks);
  }

  function sortByPrice() {
    const sortedPrices = stocks.sort((a, b) => a.price - b.price);
    setStocks([...sortedPrices]);
  }

  function handleFilter(selectedType) {
    const filtered = stocks.filter(
      (s) => s.type.toLowerCase() === selectedType.toLowerCase()
    );
    setStocks(filtered);
  }

  return (
    <div>
      <SearchBar
        sortByName={sortByName}
        sortByPrice={sortByPrice}
        onChangeType={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            addOnPortfolio={handleAddStock}
            onRemoveStock={handlePortfolio}
            portfolio={portfolio}
            sortByName={sortByName}
            sortByPrice={sortByPrice}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onRemoveStock={handlePortfolio}
            sortByName={sortByName}
            sortByPrice={sortByPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
