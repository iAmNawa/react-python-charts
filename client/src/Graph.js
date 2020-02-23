import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';

class Graph extends Component {
  data = {
  	labels: [
  		'Red',
  		'Blue',
  		'Yellow'
  	],
  	datasets: [{
  		data: [300, 5, 100],
  		backgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		],
  		hoverBackgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		]
  	}]
  };
  render() {
    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={this.data} />
      </div>
    )
  }
}

export default Graph
