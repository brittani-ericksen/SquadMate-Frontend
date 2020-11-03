import React from "react";
import Layout from './components/Layout';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import "./App.css";

function App() {
  return (
    
      <div className="App">
        <LoginButton />

        <Layout />
      </div>
    
  );
}

export default App;
