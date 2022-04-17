import React, { Component } from 'react';
import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries, MarkSeries} from 'react-vis';

class App extends Component {
  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div className="App">
<XYPlot height={200} width={200}>
  <VerticalBarSeries data={data} />
</XYPlot>
<XYPlot height={200} width={200}>
  <LineSeries data={data} />
</XYPlot>
<XYPlot height={200} width={200}>
  <MarkSeries data={data} />
</XYPlot>
      </div>
    );
  }
}

export default App;
