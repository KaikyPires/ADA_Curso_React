import React from "react";


import Navbar from "./components/Navbar/Navbar"
// Componente em classe é uma classe que herda a classe Component do React, e retorna o html dentro do metodo render
class App extends React.Component {
  render(){
    return(<Navbar/>);
  }
}

export default App;
