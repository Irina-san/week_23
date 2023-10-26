import React from "react";
import data from "./data/data";

const CardList = () => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div className={`card ${item.highlighted ? 'highlighted' : ''}`} key={index}>
          <div className="card_body"></div>
          <h5 className="card_title">{item.title}</h5>

          <div className="card_footer">
            <p className="card_price">{item.price}</p>
            <p className="card_speed">{item.speed}</p>
          </div>
          <p className="card_text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
