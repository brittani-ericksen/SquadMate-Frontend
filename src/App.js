import React from "react";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import "./App.css";

function App() {
  return (
    
      <div className="App">
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
    
  );
}

export default App;
