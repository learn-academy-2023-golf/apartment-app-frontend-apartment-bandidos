import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import ApartmentIndex from "./pages/ApartmentIndex.js";
import ApartmentShow from "./pages/ApartmentShow.js";
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js";
import ApartmentNew from "./pages/ApartmentNew.js";
import ApartmentEdit from "./pages/ApartmentEdit.js";
import NotFound from "./pages/NotFound.js";


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    readApartment()
  }, [])

  const readApartment = () => {
    fetch("http://localhost:3000/apartments")
    .then((response) => response.json())
    .then((payload) => setApartments(payload))
    .catch((error) => console.log(error))
  }


  const deleteApartment = () => { };

  const createApartment = (apartment) => {
    fetch('http://localhost:3000/apartments', {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(() => readApartment())
    .catch((error) => {
      console.log("Apartment create error:", error);
    });
}
 

  // authentication methods
  const signin = (userInfo) => {
    fetch(`http://localhost:3000/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`http://localhost:3000/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`http://localhost:3000/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve the token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token") // remove the token
        localStorage.removeItem("user")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  
  }, [])


  return (
    <>
      <Header currentUser={currentUser} logout={logout} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signin={signin}/>} />
        <Route path="/signup" element={<SignUp signup= {signup}/>} />
        <Route
          path="/apartmentindex"
          element={<ApartmentIndex apartments={apartments} />}
        />
        {currentUser && (
          <Route
            path="/apartmentprotectedindex"
            element={
              <ApartmentProtectedIndex
                currentUser={currentUser}
                apartments={apartments}
                deleteApartment={deleteApartment}
              />
            }
          />
        )}
        {!currentUser && (
          <Route path="/apartmentprotectedindex" element={<NotFound />} />
        )}
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route
          path="/apartmentnew"
          element={<ApartmentNew createApartment={createApartment} currentUser={currentUser}/>}
        />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
