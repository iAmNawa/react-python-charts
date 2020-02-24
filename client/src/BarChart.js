import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempLabel: '',
      tempDataValue: '',
      tempColor: '',
      datasets: [],
      finalData: {}
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      datasets: this.state.datasets.concat({
        label: this.state.tempLabel,
        backgroundColor: this.state.tempColor,
        borderColor: this.state.tempColor,
        borderWidth: 1,
        hoverBackgroundColor: this.state.tempColor,
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [+this.state.tempDataValue]
      })
    })
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.state.datasets !== prevState.datasets) {
      this.setState({
        finalData: {
          labels: ['How far away is the rugs.com sign'],
          datasets: this.state.datasets
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h2>How far away is the rugs.com sign?</h2>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} name='tempLabel' placeholder='label'></input>
            <input onChange={this.onChange} name='tempDataValue' placeholder='value'></input>
            <select onChange={this.onChange} name='tempColor' placeholder='color'>
              <option selected disabled>Pick a color</option>
              <option value="#9f0812">red</option>
              <option value="#dc380f">orange</option>
              <option value="#e1ac26">yellow</option>
              <option value="#79af1e">green</option>
              <option value="#368dd5">blue</option>
              <option value="#6347b2">purple</option>
              <option value="#7e887a">grey</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        <Bar
          data={this.state.finalData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            }

          }}
        />
      </div>
    );
  }
}

export default BarChart;
