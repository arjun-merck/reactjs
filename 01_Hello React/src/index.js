import React from 'react';

//To render a react component to a DOM
import ReactDOM from 'react-dom';

//App component
const App = function(){
  return <div>Hello React!</div>;
}

ReactDOM.render(<App/>,document.getElementById('root'));
