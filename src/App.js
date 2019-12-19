import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    output: []
  };

  handleKeyUp = event => {
    const input = [7000, 7001, 7002, 7003, 7004, 7005];
    let inputText = event.target.value;
    if (inputText!='' && !(new RegExp('^[0-9-,]+$').test(inputText))) {
      alert('Invalid input');
    }
    if (inputText.indexOf(",") > -1) {
      inputText.split(",").map(element => {
        if (element.indexOf("-") > -1) {
          input.push(...this.getRangeValues(element));
        } else {
          input.push(parseInt(element));
        }
      });
    } else {
      if (inputText.indexOf("-") > -1) {
        input.push(...this.getRangeValues(inputText));
      } else {
        input.push(parseInt(inputText));
      }
    }
    let uniqueSet = new Set(input);
    // console.log(uniqueSet);
    this.setState({
      output: [...uniqueSet]
    });
  };

  getRangeValues(range) {
    let lowRange = parseInt(range.split("-")[0]),
      values = [];
    let highRange = parseInt(range.split("-")[1]);
    if (highRange>= 9999) {
      alert('Please enter a valid range');
      return [];
    }
    for (let i = lowRange; i <= highRange; i++) {
      values.push(i);
    }
    return values;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Assignment - 1 </header>{" "}
        <div>
          <h1>Input</h1>
          <input
            type="text"
            id="range"
            placeholder="Enter input"
            onKeyUp={this.handleKeyUp}
          />{" "}
        </div>{" "}
        <div>
          {" "}
          {this.state.output.length > 0 && (
            <div>
              {" "}
              <h1> {`Output`} </h1>
              <div>
                {" "}
                {this.state.output.sort().map((val, index) => (
                  <span key={index}> {!isNaN(val) && val+','} </span>
                ))}{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;