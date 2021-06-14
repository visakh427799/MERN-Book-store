import React from "react";
import './Book.css';
import book3 from '../Book/book3.jpg';

import Addbooks from "../Addbooks/Addbooks";
function Book({name,Description,Author,Prize}) {


  

    
  return (
    <div className="book">
      <div className="card">
        <div className="card-img">
          <img src={book3} />
          <ul className="card-tags">
            <li>Author:{Author}</li>
            <li>Prize:{Prize}</li>
          
          </ul>
        </div>

        <div className="card-info">
          <h2>{name}</h2>
          <p>{Description}</p>
          {/* <button onClick={handleClick}>Add Book</button> */}
        </div>
      </div>
     
    </div>
  );
}

export default Book;
