import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">

<Navbar/>
<Section1/>
<Section2/>
<About/>
<Contact/>


</div>
    </div>
  );
}

export default App;
