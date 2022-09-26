// Introduction.js

import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const rowStyle = {
  margin: "auto",
  textAlign: "center"
};

const parStyle = {
  margin: "auto",
  maxWidth: "510px",
  padding: "10px",
  textAlign: "center"
};

const twitterStyle = {
  margin: "auto",
  textAlign: "center",
  maxWidth: "460px",
  padding: "10px",
};

const introStyle = {
  color: "#2d2d2d",
  textAlign: "justify",
  fontSize: "1.2rem",
  maxWidth: "1000px",
  padding: '10px'
}


class Introduction extends Component {
  render() {
    return (
      <div>
        <div class="gray-container">
          <p style={introStyle}>
            I am a Senior Engineer working in Arup's Building Performance and Systems practice, London. I have experience in the design and assurance of building performance and digital projects for real estate organisations. This includes the design, commissioning and witnessing of the systems and controls logic of complex projects. I also develop and maintain software tools for professional on-site performance evaluations and contribute to priority policy agenda.
            <br></br>
            <br></br>
            I have previously developed Executive Education in Internet-of-Things for the University of Cambridge and worked as a Skills Manager for the Building Performance and Systems discipline globally across Arup.
            <br></br>
            <br></br>
            I am a Member of the Chartered Institute of Building Services Engineers, Royal Economic Society and Wolfson College, Cambridge.
          </p>
        </div>
        <Row style={rowStyle}>
          <Col style={parStyle}>
            <div class="orange-container">
              <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PLBR5K7axx-AqYwx3uogOm9PvNB4yXP7OR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
          <Col style={twitterStyle}>
          <ul>
              <div class="green-container">
                <img src={`${process.env.PUBLIC_URL}/marathon.jpeg`} alt="Ove Arup"></img>
                <br></br>
                <br></br>
                <a href="https://justgiving.com/aidan-parkinson/"><font color="MediumSeaGreen" size="1.2rem">Running the London Marathon 2023 to raise funds for Mind to fight discrimination.</font></a>
              </div>
            </ul>
            <ul>
              <div class="red-container">
                <a href={`${process.env.PUBLIC_URL}/professional-cv.pdf`}><font color="Tomato" size="1.2rem">PROFESSIONAL CV</font></a>
              </div>
            </ul>
            <ul>
              <div class="blue-container">
                <img src={`${process.env.PUBLIC_URL}/Ove_Arup.jpeg`} alt="Ove Arup"></img>
                <br></br>
                <br></br>
                <a href="https://arup.com"><font color="DodgerBlue" size="1.2rem">OVE ARUP AND PARTNERS INTERNATIONAL LTD.</font></a>
              </div>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Introduction;
