//Önceden function componentde state yoktu, state live cycle kullanmak için class component kullanılmak zorunda.
//Function component lerle state live cycle kullanılmak istendiğinde hook kullanılır.

import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            counter: 0
        }
    }
    //Constructordan sonra çalışır.
    componentDidMount(){
        console.log("component mounted")
    }

    //State değiştikten sonra çalışır.
    componentDidUpdate(){
        console.log("component updated")
    }


    render() {
        return (
            <div>
                <p>{this.state.counter} kez tıklandı.</p>
                <button onClick={()=>{
                    this.setState({counter: this.state.counter+1})
                }}>+1</button>
            </div>
        )
    }
}

const App1=(props)=>{
    //useState, function componentlerde state kullanılmak istendiğinde kullanılır.
    const [counter, setCounter]= useState(props.counter);
    const [text, setText]= useState('');
    
    //useEffect, componentDidMount(), componentDidUpdate() için çalışır.
    useEffect(()=>{console.log("useEffect MU")});
    
    //Sadece counter değiştiğinde çalışır.
    useEffect(()=>{
        console.log("count")
        
        localStorage.setItem('counter', counter)
    
        }, [counter]);

    //Sadece componentDidMount() için çalışır.
    useEffect(()=>{
        console.log("useEffect M");

        const counterData=localStorage.getItem('counter');

        if(counterData){
            setCounter(Number(counterData))
        }

    }, []);

    return(
        <div>
            <p>{counter} kez tıklandı.</p>
            <button onClick={()=>{
                setCounter(counter+1);
            }}>+1</button>

            <p>Text: {text}</p>

            <input type="text" onChange={(e)=>{setText(e.target.value)}} />
        </div>
    )
}

App1.defaultProps={
    counter: 5    
}



// function App(props){
//     return(
//         <div>
//             Function component
//         </div>
//     )
// }


ReactDOM.render(<App1 counter={10}/>, document.getElementById("root"));