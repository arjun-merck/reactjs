import React from 'react';
import ReactDOM from 'react-dom';
import FlagList from './app/App';

import './index.css';

const App = () => {
  return (
    <div className="ui card">
      <a class="image" href="/">
        <img src="https://restcountries.eu/data/brb.svg" />
      </a>
      <div class="content">
        <a class="header" href="/">Steve Jobes</a>
        <div class="meta">
          <a>Last Seen 2 days ago</a>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<FlagList />, document.getElementById('root'));
