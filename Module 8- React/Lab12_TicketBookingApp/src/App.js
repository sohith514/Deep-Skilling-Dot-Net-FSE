import React, { useState } from "react";
import "./App.css";

import Greeting from "./Components/Greeting";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div style={{ padding: "20px" }}>

      <h1>Ticket Booking Application</h1>

      {isLoggedIn ? (

        <LogoutButton
          onClick={() => setIsLoggedIn(false)}
        />

      ) : (

        <LoginButton
          onClick={() => setIsLoggedIn(true)}
        />

      )}

      <hr />

      <Greeting isLoggedIn={isLoggedIn} />

    </div>

  );

}

export default App;