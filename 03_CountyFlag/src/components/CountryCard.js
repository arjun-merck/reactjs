import React from 'react';


const CountryCard = (props) => {
  return (
    <div className="ui card">
      <a className="image" href="/">
        <img alt="flag" src={props.flag} />
      </a>
      <div className="content">
        <a className="header" href="/">{props.name}</a>
        <div className="meta">
          <a>{props.capital}</a>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
