
import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/stocks")
      .then((res) => res.json())
      .then(setStocks);
  }, []);

  function handleBuy(stock) {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSell(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuy={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onSell={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

