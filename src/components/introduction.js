// Introduction.js

import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Timeline } from 'react-twitter-widgets'

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
  maxWidth: "500px"
}

const twitterStyle = {
  margin: "20px"
}

const introStyle = {
  color: "#2d2d2d",
  textAlign: "justify",
  margin: "20px",
  fontSize: "0.9rem",
  maxWidth: "1000px"
}

class Introduction extends Component {
  render() {
    return (
      <div>
        <p style={introStyle}>
          I am a Senior Engineer working in Arup Building Performance and Systems, London. I have experience providing assurance in building performance and digital projects for real estate organisations. I have previously held positions as a developer of Executive Education in Internet-of-Things for the University of Cambridge and as a Skills Manager for the Building Performance and Systems discipline globally across Arup.
        </p>
        <Row>
          <Col style={parStyle}>
            <p>
              Professionally qualified as a Licensed Teacher, with a PhD from the University of Cambridge, a Chartered Engineer and a Member of CIBSE.
              <br/><br/>
              I am Director of REALFEED, a micro-sized business that publishes web insight.
              <br/><br/>
              I volunteer as referee for six scientific journals published by Elsevier.
            </p>
            <ul>
              <li class="nav-item">
                <a href="/professional-cv.pdf" class="nav-link">Professional CV</a>
              </li>
              <li class="nav-item">
                <a href="https://arup.com" class="nav-link">Ove Arup and Partners</a>
              </li>
            </ul>
            <iframe width="480" height="270" src="https://www.youtube.com/embed/btxQAPmGOxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col style={twitterStyle}>
            <Timeline
              dataSource={{
                url: "https://twitter.com/aidanparkinson?ref_src=twsrc%5Etfw"
              }}
              options={{
                height: "530",
                width: "400"
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Introduction;
