import React from 'react';
import './Navbar.css';

export default function Navbar(){
    return(
        <div className='container'>
            <ul className='linklist'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/products'>Products</a>
                </li>
                <li>
                    <a href='/contact'>Contact Us</a>
                </li>
            </ul>
        </div>
    )
}