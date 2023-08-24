import React from 'react';
import ReactDOM from 'react-dom/client';
// create root() - defines a the html element where a React component should be displayed
//render - defines the React component that should be rendered
//JSX allows us to write html tags inside js code
//root node is the html element where you want to display the results


function Car() {
  return <h2>I am a Car!</h2>
}
function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(<Garage />);
