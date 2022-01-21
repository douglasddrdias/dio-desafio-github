import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function sum(a, b){
  return a + b;
}

function primeiroJSX(){
  return (
    // class é uma palavra reservada
    <div className='teste'>
      Douglas Dias - Introdução ao ReactJS
      <h1>Soma: {sum(10,20)}</h1>
    </div>
  )
}
const App = () =>{
  return (
    <div className='App'>
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);