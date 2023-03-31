import React from "react";
import mandala from "../../assets/mandala.png";

const About = () => {
  return (
    <div id="about">
      <div className="aboutcontainer">
        <div className="left">
          <h1>About me</h1>
          <p>
            I am a gud boi. I heb ebrithing. Ebrithing I heb and I am getting
            more. I love her, she loves me. We both happy. Have a nice family.
            Now I am just repeating. Tanvir nup asked me about me but I no give
            him. So that's what I get. Some more bullshit. Some more. Just right
            there. And. I think this is enough. Yes. It will do.
          </p>
        </div>
        <div className="right">
          <img
            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/275435485_1106419243476366_6919737454301792454_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=fIZsQrW2iU4AX_cprIo&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCemnDmgbjNoaU0dHbNhXjbC1DeeUR-LtBO3ie_Il944A&oe=642BAEE4"
            alt=""
          />

          <img className="jhapsa2" src={mandala} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
