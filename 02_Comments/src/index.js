import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div >
      <div >
        <a href="/" >
          <img alt="avatar" src={""} />
        </a>
        <div >
          <a href="/" >
            John
          </a>
          <div >
            <span >Posted 3hrs ago</span>
          </div>
          <div >The weather is good</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<ApprovalCard />, document.getElementById('root'));


