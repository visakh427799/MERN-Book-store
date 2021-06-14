import React from "react";
import "./Profile.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = React.useState({
    username: "Visakh",
    email: "visakhsanthosh69@gmail.com",
    phone: "nil",
    password: "nil",
    date: "nil",
    sex: "Male",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    let token = localStorage.getItem("token");
    if(token){

        let res = await axios.get("https://bookstore-backend-app.herokuapp.com/profile", {
      headers: { Authorization: `${token}` },
    });
    if (res.data) {
      setProfile(res.data.usr);
    }
    else{
        
    }

    }

    
  },[]);
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "20px" }}>
        <div className="prof">
          <div className="p-right">
            <div className="prof-img">
              <img src="data:image/jpeg;base64,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" />
              <p>{profile.username}</p>
            </div>
          </div>
          <div className="p-left">
            <div class="left-info">
              <div className="info">Username: {profile.username}</div>
              <div className="info">Email : {profile.email}</div>
              <div className="info">Phone: {profile.phone}</div>
              <div className="info">Sex: {profile.sex}</div>
              <div className="left-btn">
                <button>Edit profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
