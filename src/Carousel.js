import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel({cardData, title}) {  // destructure props!!
  const [cardIdx, setCardIdx] = useState(0);
  const card = cardData[cardIdx];
  const total = cardData.length;
  const goForward = () => setCardIdx(cardIdx + 1);  // could be one function: 'go(step)'
  const goBackward = () => setCardIdx(cardIdx - 1);
  const leftArrowStyle = cardIdx === 0 ? {visibility:"hidden"} : {visibility:"visible"};
  const rightArrowStyle = cardIdx === 2 ? {visibility:"hidden"} : {visibility:"visible"};

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBackward}
          data-testid="left-arrow"
          style={leftArrowStyle}
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          data-testid="right-arrow"
          style={rightArrowStyle}
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
