import React from 'react';
import Header from './components/Header';
import HomeImage from './components/HomeImage';
import AboutImages from './components/AboutImages';
import Portfolio from './components/Portfolio';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="page_titles" id="webTitle">
            <h1>Jason Thomas</h1>
          </div>
          <nav className="webnav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className="index_container">
          <img src="media/images/horseshoebendarizona.jpg" alt="My Page" width="800" height="500" />
          <div className="text_in_image_home">Welcome to my page! &#x1F44B;<br /> My name is Jason Thomas, and I am a recent engineering graduate from Arizona State University, with a B.S in Information Technology</div>
          <div className="about_me_image"><img src="media/images/headers/about.jpg" alt="About" width="70" height="60" /></div>
          <div className="about_me_too_image"><img src="media/images/headers/metoo.jpg" alt="Me Too" width="100" height="90" /></div>
        </div>
        <div className="container">
          <h1>My Portfolio</h1>
          <div className="project-list">
            <div className="project-card">
              <h2>Future Seedlings</h2>
              <p>Online learning educational website with purchasable content on TPT</p>
              <a href="https://github.com/Jason-Thomas274/Future-Seedlings">View Project</a>
            </div>
            <div className="project-card">
              <h2>Travel App</h2>
              <p>Mobile travel application for popular destinations</p>
              <a href="https://github.com/Jason-Thomas274/Travel-App">View Project</a>
            </div>
            <div className="project-card">
              <h2>Real-time Object Detection - Machine Learning Model for ASL</h2>
              <p>Machine learning capstone project</p>
              <a href="#">View Project</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
