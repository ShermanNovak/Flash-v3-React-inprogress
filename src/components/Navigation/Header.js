import classes from './Header.module.css'

import Button from '../UI/Button'
import Input from '../UI/Input'

const Header = props => {
    console.log(props)
    return (
        <nav className={classes.header}>
            <h1>{props.pageheader}</h1>
            <span className={classes.rightalign}>   
                <Input type="text"></Input>
                <Button className='headerbutton' onClick={props.enterCreateDeckMode}>+</Button>
            </span>
        </nav>
    )
}

export default Header;