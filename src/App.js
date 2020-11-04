import React from "react";
import Layout from './components/Layout';
import LoginButton from './components/LoginButton';
import "./App.css";
import EmergencyCard from "./components/Admin/EmergencyCard";

function App() {
  return (
    
      <div className="App">
        <LoginButton />
        <Layout />
        <EmergencyCard />
      </div>
    
  );
}

export default App;
