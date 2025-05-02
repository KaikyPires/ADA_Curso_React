import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>0</h1>

        <button>Aumentar</button>
        <button>Diminuir</button>
      </div>
    );
  }
}
