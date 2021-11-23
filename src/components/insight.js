// Insight.js

import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

class Insight extends Component {
  render() {
    return (
      <div>
        <div class="green-insight">
          <p><font color="MediumSeaGreen" size="1.2rem">
            PUBLICATIONS
            </font>
          </p>
          <ul>
            <li class="nav-item">
              <a href="https://www.researchgate.net/publication/356470480_Social_Costs_of_Carbon_Perspective_on_the_Present_State_of_Affairs"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T. (2021) Social Costs of Carbon: Perspective on the Present State of Affairs, Realfeed Ltd.</font></a>
            </li>
            <li class="nav-item">
              <a href="https://www.researchgate.net/publication/341056033_An_Executive_Function_for_Stability"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T. (2020) An Executive Function for Stability</font></a>
            </li>
            <li class="nav-item">
              <a href="https://www.repository.cam.ac.uk/handle/1810/261155"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T. (2016) An exploration of building energy performance and financial value with demonstration on UK offices, PhD Thesis: Wolfson College, University of Cambridge</font></a>
            </li>
            <li class="nav-item">
              <a href="https://www.sciencedirect.com/science/article/pii/S0306261914007570?via%3Dihub"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T., Guthrie P.M. (2014) Evaluating the energy performance of buildings within a value at risk framework with demonstration on UK offices, Applied Energy, 133:40-55</font></a>
            </li>
            <li class="nav-item">
              <a href="https://www.sciencedirect.com/science/article/pii/S0301421513006861"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T., De Jong R., Cooke A. J., Guthrie P.M. (2013) Energy performance certification as a signal of workplace quality, Energy Policy, 62:1439-1505</font></a>
            </li>
            <li class="nav-item">
              <a href="https://www.tandfonline.com/doi/abs/10.1080/09613218.2012.690956"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T. et al. (2012) Exploring scenarios for the future of energy management in UK property, Building Research and Information, 40(3):373-388</font></a>
            </li>
            <li class="nav-item">
              <a href="https://link.springer.com/chapter/10.1007/978-3-642-27509-8_7"><font color="MediumSeaGreen" size="1.2rem">Parkinson A.T., Cooke A. J. (2012) Market responses to the sustainability and energy performance of commercial property, In: M'Sirdi N., Namaane A., Howlett R.J., Jain L.C. (eds) Sustainability in Energy and Buildings. Smart Innovation, Systems and Technologies, 12:85-97. Springer: Berlin, Heidelberg</font></a>
            </li>
          </ul>
        </div>
        <Row style={rowStyle}>
          <Col style={parStyle}>
            <div class="red-insight">
              <p><font color="Tomato" size="1.2rem">SCIENTIFIC REFEREEING</font></p>
              <ul>
                <li class="nav-item">
                  <a href="https://www.journals.elsevier.com/energy"><font color="Tomato" padding="10px" size="1.2rem">Energy</font></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.journals.elsevier.com/energy-policy"><font color="Tomato" padding="10px" size="1.2rem">Energy Policy</font></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.journals.elsevier.com/applied-energy"><font color="Tomato" padding="10px" size="1.2rem">Applied Energy</font></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.journals.elsevier.com/sustainable-cities-and-society"><font color="Tomato" padding="10px" size="1.2rem">Sustainable Cities and Society</font></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.journals.elsevier.com/energy-economics"><font color="Tomato" padding="10px" size="1.2rem">Energy Economics</font></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.journals.elsevier.com/journal-of-environmental-management"><font color="Tomato" padding="10px" size="1.2rem">Journal of Environmental Management</font></a>
                </li>
              </ul>
            </div>
          </Col>
          <Col style={parStyle}>
            <div class="blue-insight">
              <p><font color="DodgerBlue" size="1.2rem">
                BLOG
                </font>
              </p>
              <ul>
                <li class="nav-item">
                  <a href="https://aidanparkinson.medium.com/crises-need-immediate-common-sense-not-distant-promises-c5fffb809217"><font color="DodgerBlue" size="1.2rem">Crises Need Immediate Common Sense, Not Distant Promises (2021)</font></a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Insight;
