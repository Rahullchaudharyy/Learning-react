import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import LogIn from "./Components/LogIn.jsx";
import Profile from "./Components/Profile.jsx";

const App = () => {
  return (
     <>
     
     <h1>This is about the context API </h1>
      <LogIn />
      <Profile />
     </>
  );
};

export default App;
