import React from 'react';
import './styles.css';

// Component for the Contact page
function Contact() {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      <div className="page_titles" id="webTitle">
        <h1>Contact</h1>
      </div>
      <div className="webnav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <br />
      <div className="mailme">
        <h2>Reach out to me!</h2>
        <img src="media/images/cutedogmailbox.jpg" alt="jason thomas" width="140" height="100" />
        <p>Email or Contact Form:</p>
        <a href="mailto:jasonthomas@myemail.com">JasonThomas@myemail.com</a>
      </div>
      <br />
      {/* Beginning of Contact Form */}
      <div className="contactform">
        <form name="basic_form" onSubmit={handleSubmit} className="basic_form">
          <div>
            <label htmlFor="fname" className="form_title">First Name:</label>
            <input className="input1" type="text" id="fname" name="firstname" maxLength="30" required />
            <div className="fnameError" id="fnameError">Enter a valid first name</div>
          </div>
          <br />
          <div>
            <label htmlFor="lname" className="form_title">Last Name:</label>
            <input className="input2" type="text" id="lname" name="lastname" maxLength="30" required />
            <div className="lnameError" id="lnameError">Enter a valid last name</div>
          </div>
          <br />
          <div>
            <label htmlFor="emailadd" className="form_title">Email Address:</label>
            <input className="input3" type="email" id="emailadd" name="emailaddress" maxLength="30" required />
            <div className="emailaddError" id="emailaddError">Enter a valid email address</div>
          </div>
          <br />
          <div>
            {/* <label htmlFor="custfeedback" className="form_title">Add a message here!</label> */}
            <br />
            <textarea className="text1" name="customerfeedback" id="custfeedback" rows="8" cols="30" placeholder="Enter message here.." required />
          </div>
          <br />
          <div className="submitButton">
            <input type="submit" id="submit" name="completeform" value="Complete Form" />
            <label htmlFor="submit" />
          </div>
        </form>
      </div>
      {/* End of Contact Form */}
      {/* <div className="footerImg">
         <img src="media/images/thankyou.jpg" alt="thank you" width="600" height="400">
      </div> */}
      <script src="js/js.js"></script>
    </div>
  );
}

export default Contact;
