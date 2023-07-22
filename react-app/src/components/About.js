import React from 'react';
import './styles.css';

// Component for the About page
function About() {
  return (
    <div>
      <div className="page_titles" id="webTitle">
        <h1>About</h1>
      </div>
      <div className="webnav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold underline">
        Once upon a time..
      </h1>
      <div className="about_container">
        <img src="media/images/headers/koreacity.jpg" alt="About me Korea city" width="900" height="500" />
        <div className="text_in_image_about">About me... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        {/* Add any other JSX elements from the original about.html here */}
      </div>
      <script src="js.js"></script>
    </div>
  );
}

export default About;
