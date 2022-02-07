import classes from './Decks.module.css'

import EachDeck from './EachDeck'

const DUMMY_DECKS = [
    {
        id: 1,
        deckname: "Deck 1",
        last_seen: new Date(2022, 2, 1)
    },
    {
        id: 2,
        deckname: "Deck 2",
        last_seen: new Date(2022, 2, 2)
    },
    {
      id: 3,
      deckname: "Deck 3",
      last_seen: new Date(2022, 2, 3)
    }, 
    {
      id: 4,
      deckname: "Deck 4",
      last_seen: new Date(2022, 2, 4)
    },
    {
      id: 5,
      deckname: "Deck 5",
      last_seen: new Date(2022, 2, 5)
    },
    {
      id: 6,
      deckname: "Deck 6",
      last_seen: new Date(2022, 2, 6)
    },
    {
      id: 7,
      deckname: "Deck 7",
      last_seen: new Date(2022, 2, 7)
    },
  ];

const Decks = () => {
    return (
      <div className={classes.deckpage}>
          {DUMMY_DECKS.map((eachdeck) => (
            <EachDeck
              key={eachdeck.id}
              deckname={eachdeck.deckname}
              lastseen={eachdeck.last_seen}
            />
          ))}
      </div>
    );
  };
  
  export default Decks;
  