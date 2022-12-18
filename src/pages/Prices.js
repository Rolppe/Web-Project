import React from "react";
import { PriceList } from "../components/Functions";
import "./Prices.css";

const Prices = (props) => {
  return (
    <main className="Main">
      <div className="float-container">
        <div className="float-child">
          <h5>Prices Today</h5>
          {props.pricesToday && (
            <PriceList pricesTime={props.pricesToday} preKey="today" />
          )}
        </div>
        <div className="float-child">
          <h5>Prices Tomorrow</h5>

          {props.pricesTomorrow ? (
            <PriceList pricesTime={props.pricesTomorrow} preKey="tomorrow" />
          ) : (
            "Prices will arrive 14:30"
          )}
        </div>
      </div>
    </main>
  );
};
export default Prices;
