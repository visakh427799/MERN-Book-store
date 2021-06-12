import React from 'react';
import './Login.css';
import book from '../Login/book.png'
function Login() {
    return (
        <div>
            <div class="header">
                <h2>B<span class="oo">OO</span>K STORE</h2>
            </div>

            <div class="wrapper">
               <div class="right">
                    <div class="right-img">
                        <img src={book}/>
                    </div>
               </div>
               <div class="left">
                  <div class="left-inp">
                      <input type="text" placeholder="Enter your username"></input>
                      <input type="password" placeholder="Enter your password"></input>
                      <div class="btn">
                      <button>Login</button>
                      </div>
                  </div>
               </div>

            </div>
        </div>
    )
}

export default Login
