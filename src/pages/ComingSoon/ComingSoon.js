import React from "react";
import "./ComingSoon.css";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      {/* Left side background */}
      <div className="coming-soon-left">
        <div className="overlay"></div>
        <h1 className="brand-title">UX IMPROVER</h1>
      </div>

      {/* Right side content */}
      <div className="coming-soon-right">
        <h2 className="headline">🚀 We’re Launching Soon</h2>
        <p className="subtext">
          Our new platform is almost ready. Stay tuned for something amazing!
        </p>

        {/* About Section */}
        <div className="about-platform">
          <h3>What is UX IMPROVER?</h3>
          <p>
            UX IMPROVER is a platform that helps startups and businesses improve
            their digital products by connecting them with real users. Companies
            can get video-based feedback on their apps, websites, or ideas —
            directly from the people who matter most: their users.
          </p>
          <p className="earning-text">
            💸 As a tester, you can also earn money by reviewing products and
            sharing your honest feedback. The more you test, the more you earn —
            while helping companies build better experiences.
          </p>
        </div>

        {/* Social Section */}
        <div className="social-section">
          <p>Follow us for updates:</p>
          <div className="social-icons">
            <a href="https://x.com/uximprover?t=gNXymbwy7y3tjy9XqJqkpA&s=09" aria-label="Twitter">
              <FaTwitter />
              </a>
            <a href="https://www.instagram.com/uximprover?igsh=czgxNTRsd3AyZ2Zw" aria-label="Instagram">
              <FaInstagram />
            {/* </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
