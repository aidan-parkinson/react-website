// Introduction.js

import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Timeline } from 'react-twitter-widgets'

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
            I am a Senior Engineer working in Arup Building Performance and Systems, London. I have experience in the design and assurance of building performance and digital projects for real estate organisations. I have previously developed Executive Education in Internet-of-Things for the University of Cambridge and worked as a Skills Manager for the Building Performance and Systems discipline globally across Arup.
            <br></br>
            <br></br>
            I am a Member of the Chartered Institute of Building Services Engineers, a Member of the Royal Economic Society and a Member of Wolfson College, Cambridge.
          </p>
        </div>
        <Row style={rowStyle}>
          <Col style={parStyle}>
            <ul>
              <div class="blue-container">
                <img src={`${process.env.PUBLIC_URL}/Ove_Arup.jpeg`} alt="Ove Arup"></img>
                <br></br>
                <br></br>
                <a href="https://arup.com"><font color="DodgerBlue" size="1.2rem">OVE ARUP AND PARTNERS INTERNATIONAL LTD.</font></a>
              </div>
            </ul>
            <div class="orange-container">
              <iframe width="480" height="270" src="https://www.youtube.com/embed/btxQAPmGOxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
          <Col style={twitterStyle}>
            <div class="red-container">
              <a href={`${process.env.PUBLIC_URL}/professional-cv.pdf`}><font color="Tomato" size="1.2rem">PROFESSIONAL CV</font></a>
            </div>
            <br></br>
            <div class = "green-container">
              <Timeline
                dataSource={{
                  url: "https://twitter.com/aidanparkinson?ref_src=twsrc%5Etfw"
                }}
                options={{
                  height: "530",
                  width: "400"
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Introduction;
