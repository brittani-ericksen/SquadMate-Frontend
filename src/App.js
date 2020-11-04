import React from "react";
import Layout from './components/Layout';
import Admin from './components/Admin';
import User from './components/User';
import "./App.css";


function App() {
  return (
    
      <div className="App">
        <Layout />
        <Admin />
        <User />
      </div>
    
  );
}

export default App;
