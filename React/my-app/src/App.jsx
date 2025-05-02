import React from "react";
import { Article } from "./components/Articles/Article";

import googleImage from "./assets/images/google.png";
import finacialImage from "./assets/images/financial.png";
import dashboardImage from "./assets/images/dashboard.png";
import Navbar from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";
// Componente em classe é uma classe que herda a classe Component do React, e retorna o html dentro do metodo render
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article
            title="Dashboard"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque enim rem amet quasi fugiat maiores, 
    quos reprehenderit ipsum beatae dolorum laboriosam magnam ipsam, explicabo atque cupiditate! Repellendus, magnam ullam."
            thumb={dashboardImage}
          />

          <Article
            title="Analytics Overview"
            provider="Google"
            description="Discover insights from data trends and user behavior, helping your business make smarter, data-driven decisions every day."
            thumb={googleImage}
          />

          <Article
            title="Financial Report"
            provider="Bloomberg"
            description="Get the latest updates on market movements, economic indicators, and expert analysis to guide your investment strategy."
            thumb={finacialImage}
          />
        </section>
     
      </>
    );
  }
}

export default App;
