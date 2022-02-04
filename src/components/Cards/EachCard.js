import classes from './EachCard.module.css'

import Card from '../UI/Card'

const EachCard = props => {
    return (
        <Card className={classes.card}>
            <div>{props.front}</div>
            <div>{props.back}</div>
        </Card>
    )
}

export default EachCard;