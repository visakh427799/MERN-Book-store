import React from 'react'
import {useHistory} from 'react-router-dom'
import './Register.css';
import book from '../Registration/book2.png'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';


function Register() {
    const history =useHistory();
    React.useEffect(()=>{
        let token=localStorage.getItem('token');
        if(token){
          history.push('/profile')
        }
   
      },[])


    const[user,setUser]=React.useState({
        username:"",
        email:"",
        password:""
    })
    const handleChange = (e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }

    const handleClick =async()=>{
        
          let res=await axios.post("https://bookstore-backend-app.herokuapp.com/register",user);
          if(res.data.status){

            let usr=res.data.usr;

            localStorage.setItem('token',usr.token);
            localStorage.setItem('user',usr.userData);
             
            history.push('/profile')

          }
    }
    return (
        <div>
            
             <Navbar/>
            <div class="wrapper">
               <div class="right">
                    <div class="right-img">
                        <img src={book}/>
                    </div>
               </div>
               <div class="left">
                  <div class="left-inp">
                      <input type="text" placeholder="Enter your Username" name="username" onChange={handleChange}></input>
                      <input type="text" placeholder="Enter your Email"name="email" onChange={handleChange}></input>
                      <input type="text" placeholder="Enter your Password" name="password" onChange={handleChange}></input>
                      <input type="password" placeholder="Confirm your password" name="pass2" onChange={handleChange}></input>
                      <div class="btn">
                      <button onClick={handleClick}>Register</button>
                      </div>
                  </div>
               </div>

            </div>
            
        </div>
    )
}

export default Register
