import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Hi, I'm Jp Adriano</h1>
        <Typed
          className="typed-text"
          strings={[
            "Front-End Web Developer",
            "UI/UX Designer",
            "Graphics Designer",
            "Beat-Maker",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a className="nav-link mycv" href="#">
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default Header;
