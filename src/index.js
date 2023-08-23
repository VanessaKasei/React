import React from 'react';
import ReactDOM from 'react-dom/client';
// create root() - defines a the html element where a React component should be displayed
//render - defines the React component that should be rendered
//JSX allows us to write html tags inside js code
//root node is the html element where you want to display the results
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(myElement);
