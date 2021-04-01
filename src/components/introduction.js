// Introduction.js

import React, { Component } from 'react'

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem"
};

const linkStyle = {
  color: "#2d2d2d",
  fontSize: "0.8rem"
};

const parStyle = {
  color: "#2d2d2d",
  textAlign: "justify",
  margin: "20px",
  fontSize: "0.9rem",
  maxWidth: "930px"
}

class Introduction extends Component {
  render() {
    return (
      <div>
        <p style={parStyle}>
        I am a Senior Engineer working in Arup Building Performance and Systems, London. I have experience providing assurance for building performance and digital projects for real estate organisations. I have previously held positions as a developer of Executive Education in Internet-of-Things for the University of Cambridge and as a Skills Manager for the Building Performance and Systems discipline globally across Arup.
        <br/><br/>
        I am a Licensed Teacher, with a PhD from the University of Cambridge, am a Chartered Engineer and a Member of CIBSE.
        <br/><br/>
        I am Director of a micro-startup REALFEED Ltd. which publishes web insight.
        <br/><br/>
        I volunteer as referee for six scientific journals published by Elsevier.
        </p>
        <ul>
          <li class="nav-item">
            <a href="/professional-cv.pdf" class="nav-link">Professional CV</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Introduction;
