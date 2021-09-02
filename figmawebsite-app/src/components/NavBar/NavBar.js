import React from 'react';
import  classes from './NavBar.module.css';
import img1 from '../../assets/images/Capture.JPG';


const NavBar = () => (
    <header>
        <div className={classes.image}>
            <img src={img1} alt=""/>
        </div>
        <div className={classes.header}>
        <a className={classes.atag} href="/">Home</a>
        <a className={classes.atag}href="/">About Us</a>
        <a className={classes.atag}href="/">OurStores</a>
        <a className={classes.atag}href="/">Contact Us</a>
        </div>        
    </header>
    
);
export default NavBar;