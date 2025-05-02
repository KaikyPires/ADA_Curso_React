import React from "react"


export class Counter extends React.Component{
    constructor(){
        super()
        // this.contador = 0;
        this.state = { contador: 0}
    }
    render(){
        return(
            <div style={{marginTop:"20px", marginLeft:"20px", marginRight:"20px"}}>
                <h1 >{this.state.contador}</h1>
            <div>
            <button onClick={() => { this.setState({ contador: this.state.contador - 1 }) }}> diminuir</button>
            <button onClick={() => {this.setState ({contador: this.state.contador + 1})}}>aumentar</button>
            </div>
            </div>
    
        )
    }
}