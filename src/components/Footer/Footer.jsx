import React from 'react';
import githubIcon from './github__icon.png';
import './Footer.scss';

function Footer() {

    return <footer>
          <div className="footer-author">
            <img
              className="footer-author__github-icon"
              src={githubIcon}
              alt="github icon"
            />
            <a href="https://github.com/your_m1nd" target="#blank">Viktoria</a>
          </div>
      </footer>;
  }


export default Footer;