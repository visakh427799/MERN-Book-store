import React from 'react'
import './Addbooks.css';
import Book from '../Book/Book';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import axios from 'axios'
function Addbooks() {

  


    const [err,setErr]=React.useState(false)
    const [token,setToken]=React.useState("")
    const [book,setBook]=React.useState({
        bookname:"DBMS",
        description:"Database management system",
        author:"",
        prize:"",
    })
    React.useEffect(()=>{

      let token=localStorage.getItem('token');
      setToken(token);
  
     },[])

    const handleChange=(e)=>{
        setBook({...book,[e.target.name]:e.target.value});

    }
    const addBooks=()=>{
    
     
  
      axios.post("https://bookstore-backend-app.herokuapp.com/addbook",book, { headers: {"Authorization" : `${token}`}},)
      .then((res)=>{
        console.log(res.data.status);
        if(res.data.status){
          Swal.fire(
            'Added!',
            'Book has been added',
            'success'
          )
        }
        else{

          Swal.fire(
            'Error!',
            'Book has not been added',
            'warning'
          )

        }
            
     
      }).catch(()=>{
 
      })
 
    
      }
    
      const handleClick =()=>{

          if(book.name===" " || book.Description ===" " || book.Author===" " || book.Prize===""){
             setErr(true)
          }


        else{

            Swal.fire({
                title: 'Are you sure?',
               
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1c9999',
                cancelButtonColor: '#ee8422',
                confirmButtonText: ' Add'
              }).then((result) => {
                if (result.isConfirmed) {
          
                  addBooks();
                 
                }
              })

        }

    
      
    
    
      }

    return (
        <div>
           <Navbar/>
      
          
          

           <div  className="wrapper" >
             
             <div className="lefts">
                 <Book name={book.bookname} Description={book.description} Author={book.author} Prize={book.prize}/>
             </div>

             <div className="rights">

                 <div className="inpt">
                     <input type="text" name="bookname" onChange={handleChange} placeholder="Enter book name"></input>
                     <input type="text" name="description" onChange={handleChange} placeholder="Enter book Description"></input>
                     <input type="text" name="author" onChange={handleChange} placeholder="Enter Author name"></input>
                     <input type="text" name="prize" onChange={handleChange} placeholder="Enter book Prize"></input>
                    {err? <span className="addbook">Please fill all the fields..!</span>:null}
                     <button onClick={handleClick}>ADD BOOK</button>
                     
                     
                 </div>

             </div>
               


           </div>
        </div>
    )
}

export default Addbooks
