import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-github"></i></a></li>
            {}
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
