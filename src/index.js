import React from 'react';
import ReactDOM from 'react-dom/client';
// create root() - defines a the html element where a React component should be displayed
//render - defines the React component that should be rendered
//JSX allows us to write html tags inside js code

const myTrials = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Mary</td>
    </tr>
  </table>
);

const example1 = document.getElementById("demo");
const demo = ReactDOM.createRoot(example1);
demo.render(myTrials)

