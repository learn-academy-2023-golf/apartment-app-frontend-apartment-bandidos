import React, { useState } from "react";
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
  const [currentUser, setCurrentUser] = useState(mockUsers[1]);
  const [apartments, setApartments] = useState(mockApartments);

  console.log("currentUser", currentUser);
  console.log("apartments", apartments);

  const deleteApartment = () => {};

  const logout = () => {};

  const createApartment = () => {};

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
          element={<ApartmentNew createApartment={createApartment} />}
        />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
