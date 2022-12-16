import { Fragment } from 'react'
import classes from './Header.module.css'

const Header : React.FC = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>To-Do List</h1> 
        </header>
    </Fragment>
}

export default Header;