import React, { useState } from 'react';
import '../styles/Navbar.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [visible, setVisible] = useState(false);

    const toggleNavbar = () => {
        setVisible(!visible);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={visible ? 'open' : 'close'}>
                <img src={logo} alt='logo'/>
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/' >Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div >

    )
}

export default Navbar