import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './index.css';

const App = () => {
  const soma = (a, b) => {
    alert(a + b);
  }
  return (
    <div className='App'>
      Hello World
      <Button onClick={() => soma(10, 20)} name="Douglas Dias" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(10, 20)} name="Aryanne" />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(App(), rootElement);