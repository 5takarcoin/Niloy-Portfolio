import React from "react";
import mandala from "../../assets/mandala.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="herocontainer">
        <div className="heroleft">
          <div className="jcontainer">
            <img className="jhapsa" src={mandala} alt="" />
          </div>
          <h2>Hello!</h2>
          <h1>
            I'm <span className="textcolor">Sanim</span>{" "}
          </h1>
          <h3>Immature Artist</h3>
        </div>
        <div className="heroright">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/051/632/064/large/sanim-ahmed-niloy-the-act-of-distruction-2.jpg?1657780392"
            alt="The Act of Destruction"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
