// Insight.js

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

class Insight extends Component {
  render() {
    return (
      <div>
        <p style={parStyle}>
          Scientific publications
        </p>
        <ul>
          <li class="nav-item">
            <a href="https://www.tandfonline.com/doi/abs/10.1080/09613218.2017.1314148?journalCode=rbri20" class="nav-link">Evaluating positivist theories of occupant satisfaction: a statistical analysis, 2017</a>
          </li>
          <li class="nav-item">
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0360544216302638" class="nav-link">An income-based analysis of the value premise for property energy performance, 2016</a>
          </li>
          <li class="nav-item">
            <a href="https://www.repository.cam.ac.uk/handle/1810/261155" class="nav-link">An exploration of building energy performance and financial value with demonstration on UK offices, 2016</a>
          </li>
          <li class="nav-item">
            <a href="https://www.sciencedirect.com/science/article/pii/S0306261914007570?via%3Dihub" class="nav-link">Evaluating the energy performance of buildings within a value at risk framework with demonstration on UK offices, 2014</a>
          </li>
          <li class="nav-item">
            <a href="https://www.sciencedirect.com/science/article/pii/S0301421513006861" class="nav-link">Energy performance certification as a signal of workplace quality, 2013</a>
          </li>
          <li class="nav-item">
            <a href="https://www.tandfonline.com/doi/abs/10.1080/09613218.2012.690956" class="nav-link">Exploring scenarios for the future of energy management in UK property, 2012</a>
          </li>
          <li class="nav-item">
            <a href="https://link.springer.com/chapter/10.1007/978-3-642-27509-8_7" class="nav-link">Market Responses to the Sustainability and Energy Performance of Commercial Property, 2012</a>
          </li>
        </ul>
        <p style={parStyle}>Scientific refereeing</p>
        <ul>
          <li class="nav-item">
            <a href="https://www.journals.elsevier.com/energy" class="nav-link">Energy</a>
          </li>
          <li class="nav-item">
            <a href="https://www.journals.elsevier.com/energy-policy" class="nav-link">Energy Policy</a>
          </li>
          <li class="nav-item">
            <a href="https://www.journals.elsevier.com/applied-energy" class="nav-link">Applied Energy</a>
          </li>
          <li class="nav-item">
            <a href="https://www.journals.elsevier.com/sustainable-cities-and-society" class="nav-link">Sustainable Cities and Society</a>
          </li>
          <li class="nav-item">
            <a href="https://www.journals.elsevier.com/energy-economics" class="nav-link">Energy Economics</a>
          </li>
          <li class="nav-item">
            <a href="https://www.journals.elsevier.com/journal-of-environmental-management" class="nav-link">Journal of Environmental Management</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Insight;
