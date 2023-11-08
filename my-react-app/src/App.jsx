import React, { useState } from "react";
import data from "./component/data/data";

const CardList = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <div className={`card ${selectedCardIndex === index ? 'selected' : ''}`} key={index} onClick={() => handleCardClick(index)}>
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

/*
const CardList = () => {
  const [pressed, setPressed] = useState(false);

  const handlePriceClick = (index) => {
        setPressed(!pressed);
  };
  return (
    <div className="container">
      {data.map((item, index) => (
        <div
          className={`card ${item.highlighted ? "highlighted" : ""}`}
          key={index}
        >
          <div className="card_body"></div>
          <h5 className="card_title">{item.title}</h5>

          <div className="card_footer" onClick={() => handlePriceClick(index)}>
          {pressed ? "Тариф выбран" : " "}
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
*/
