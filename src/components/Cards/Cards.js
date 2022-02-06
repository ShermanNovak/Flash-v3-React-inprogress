import { useState } from "react";

import classes from "./Cards.module.css";

import EachCard from "./EachCard";

const DUMMY_CARDS = [
  {
    id: "1",
    front: "学生",
    back: "student",
  },
  {
    id: "2",
    front: "先生",
    back: "teacher",
  },
];

const Cards = () => {
  return (
    <div className={classes.cardlist}>
      <h1></h1>
      <ul>
        {DUMMY_CARDS.map((eachcard) => (
          <EachCard
            key={eachcard.id}
            front={eachcard.front}
            back={eachcard.back}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
