import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={onSell} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
