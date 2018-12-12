import React from 'react'
import CountryCard from '../components/CountryCard';
import axios from 'axios';

class App extends React.Component {

  state = {
    countryInfo: []
  };

  componentDidMount() {
    this.loadFlagList();
  }

  loadFlagList = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((data) => {
      console.log(data);
      this.setState({ countryInfo: data.data });
    });
  }

  loadFlagList = async () =>{
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    this.setState({ countryInfo: response.data });
  }

  renderScreen = () => {
    if (this.state.countryInfo.length > 0) {
      return this.state.countryInfo.map((country) => {
        return <CountryCard
          key={country.numericCode}
          name={country.name}
          flag={country.flag}
          capital={country.capital} />
      });
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderScreen()}
      </div>
    );
  }
}

export default App;