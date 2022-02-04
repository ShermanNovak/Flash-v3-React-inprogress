import { useState } from "react";

import classes from "./Cards.module.css";

import EachCard from "./EachCard";

const DUMMY_DECK = [
  {
    name: "Minna No Nihongo",
    cards: [
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
    ],
  },
];

const Cards = () => {
  const [viewdeck, setViewDeck] = useState(DUMMY_DECK);
  return (
    <div className={classes.cardlist}>
      <h1>{viewdeck.name}</h1>
      <ul>
        {viewdeck.cards.map((eachcard) => (
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
