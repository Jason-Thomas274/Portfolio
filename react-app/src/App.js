import React from 'react';
import Header from './components/Header';
import HomeImage from './components/HomeImage';
import AboutImages from './components/AboutImages';
import Portfolio from './components/Portfolio';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HomeImage />
        <AboutImages />
        <Portfolio />
      </div>
    );
  }
}

export default App;
