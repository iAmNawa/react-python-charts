import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      tempLabel: '',
      dataValue: [],
      tempDataValue: '',
      color: [],
      tempColor: '',
      data: {}
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      labels: this.state.labels.concat(this.state.tempLabel),
      dataValue: this.state.dataValue.concat(this.state.tempDataValue),
      color: this.state.color.concat(this.state.tempColor)
    })
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.state.labels !== prevState.labels) {
      console.log(true)
      this.setState({
        data: {
          labels: this.state.labels,
          datasets: [
            {data: this.state.dataValue,
             backgroundColor: this.state.color
          }]
        }
      })
    }
  }
  
  render() {
    return (
      <div>
        <h2>Pie Example</h2>
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
        <Pie data={this.state.data} />
      </div>
    )
  }
}

export default PieChart;
