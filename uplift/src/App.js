import './App.css';
import React from "react";
import Fragment from "react";
//Components
import QuickSearch from "../src/components/QuickSearch";

function App() {
  return (
    <Fragment>

    <div className="App">
    <img src="../public/images/placeholderlogo.png" id="logo"></img>

    <div class="navbar">
      <ul id="nav-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Favorites</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
      <button id="login">Login</button>
    </div>

    <header className="App-header">

        <p>
          Welcome to Uplift!
        </p>
    </header>
          <br>
          </br>
        
       <section>
      <div className="landing-container">
     
      
      <div className="landing-grid">
          <h4>Returning User?
          <br></br>
          Sign-in
          -----------------
          New User
          <br></br>
          Sign up or Get Started
          </h4>
          </div>



          <div className="landing-grid">
            <QuickSearch />
            <button className="button" type= "submit" value ="test">SUBMIT</button>
          </div>


      
      </div>
      </section>
    </div>
    
    </Fragment>
  );
}

export default App;
