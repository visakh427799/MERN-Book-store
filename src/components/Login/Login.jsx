import React from "react";

import book from "../Login/book.png";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

import { useHistory } from "react-router-dom";

import axios from "axios";

function Login() {

   
  const history = useHistory();
  const [err, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
   React.useEffect(()=>{
     let token=localStorage.getItem('token');
     if(token){
       history.push('/profile')
     }

   },[])






  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (user.email == "" || user.paassword == "") {
      setError(true);
    } else {
      setLoading(true);
      axios
        .post("https://bookstore-backend-app.herokuapp.com/login", user)
        .then((res) => {
          if (res.data.status) {
            let usr=res.data.usr;

            localStorage.setItem('token',usr.token);
            localStorage.setItem('user',usr.userData);
              history.push('/profile')
          }
          else{
              alert("Password and email is invalid")
          }
        })
        .catch((err) => {});
    }
  };
  return (
    <div>
      <Navbar />
      <div class="wrappers">
        <div class="right">
          <div class="right-img">
            <img src={book} />
          </div>
        </div>
        <div class="left">
          <div class="left-inp">
            <input
              type="text"
              placeholder="Enter your username"
              name="email"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            ></input>
            <div class="btn">
              {err ? <span>Please provide valid credentials</span> : null}

              {loading ? (
                  <button disabled onClick={handleClick}>Login</button>
              ) : (
                <button onClick={handleClick}>Login</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
