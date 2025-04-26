import React from "react";
import logoImg from "../assets/images/Logo.png"
import '../styles/App.css'

class Navbar extends React.Component{
    // Metodo para renderizar nosso html
  render(){
    return (
      <header> 
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt=""/>
          </div>
         
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Community</a></li>
          </ul>
  
        </nav>
      </header>
    );
  }
}
export default Navbar;