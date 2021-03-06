import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.css'
import withStyles from '../hooks/withStyles'

const Header = (props) => {
    withStyles(props, styles)
    
    return <div className={styles.test1}>
        <Link to="/">Home222</Link>  +++++++  
        <Link to="/login">Login</Link>+++++++
        <Link to="/main">Main</Link>
    </div>
}

export default Header