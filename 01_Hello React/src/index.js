import React from 'react';

//To render a react component to a DOM
import ReactDOM from 'react-dom';

//App component
const App = function(){
  return   <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>;
}

ReactDOM.render(<App/>,document.getElementById('root'));
