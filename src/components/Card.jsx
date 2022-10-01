import React from "react";
import star from "../assets/star.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

//we can use destructuring here like below, but since there are too many props we just pass the props
// export default function Card({
//     openSpots,
//     img,
//     rating,
//     reviews,
//     location,
//     title,
//     price,
//   })

export default function Card(props) {
  let badgeText;
  console.log(props);
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  //====combining es6 backtick template string with outer jsx curly brace in img element
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img
        src={`/public/images/${props.item.coverImg}`}
        alt=""
        className="card--image"
      />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span className="gray">{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span>/person
      </p>
    </div>
  );
}
