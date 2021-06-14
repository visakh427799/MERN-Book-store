import React from 'react'
import './Navbar.css'
import {Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
             <div class="head">
            <h2>B<span class="oo">OO</span>K STORE </h2>
            <div class="nav-link">
                <ul>
                    <li><Link class="lnk" to="/">LOGIN</Link></li>
                    <li><Link class="lnk" to="/register">REGISTER</Link></li>
                    <li><Link class="lnk" to="/profile">PROFILE</Link></li>
                    <li><Link class="lnk" to="/books">BOOKS</Link></li>
                    <li><Link class="lnk" to="/addbooks">ADD BOOK</Link></li>
                   
                </ul>
            </div>

            </div>
        </div>
    )
}

export default Navbar
