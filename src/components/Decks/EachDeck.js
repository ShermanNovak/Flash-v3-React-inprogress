import classes from "./EachDeck.module.css";

import Card from "../UI/Card";

const EachDeck = (props) => {
  console.log(props);
  return (
    <Card className={classes.displaydeck}>
      <h2>{props.deckname}</h2>
    </Card>
  );
};

export default EachDeck;
