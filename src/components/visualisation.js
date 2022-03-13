// Visualisation.js

import React, { Component } from 'react';
import Plotly from 'react-plotly.js';

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

const introStyle = {
  color: "#2d2d2d",
  textAlign: "justify",
  fontSize: "1.2rem",
  maxWidth: "1000px",
  padding: '10px'
}

var trace1 = {
    x: [316, 372, 428],
    type: 'box',
    name: '1990'
};

var trace2 = {
    x: [214, 251, 289],
    type: 'box',
    name: '2000'
};

var trace3 = {
    x: [296, 349, 401],
    type: 'box',
    name: '2010'
};

var trace4 = {
    x: [321, 378, 434],
    type: 'box',
    name: '2020'
};

var chartData = [trace1, trace2, trace3, trace4];

var chartLayout = {
    title: 'Common Social Cost of Carbon / $tC'
};

var chart = Plotly.newPlot('SCC', data, layout);


class Visualisation extends Component {
  render() {
    return (
      <div>
        <div class="gray-container">
          <p style={introStyle}>
            The Common Social Cost of Carbon may be a genuine performance indicator for the quality of life on Earth.
            <br></br>
            <br></br>
            The indicator helps global society reflect on its interface with what is wild and how far we are away from a Utopia of fulfilled promises free of necessary state coercion.
          </p>
        </div>
        <div class="blue-container">
            <Plotly
                data = {chartData}
                layout = {chartLayout}
            />
        </div>
      </div>
    );
  }
}

export default Visualisation;
