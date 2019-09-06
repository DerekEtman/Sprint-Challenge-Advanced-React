import React from 'react';
import axios from 'axios';

import './App.css';
import { Display } from './components/Display';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    };
    console.log(this.state.data);
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    // this.setState({data:resp.data})
    .then( resp => 
      // console.log("resp: ", resp.data) 
      this.setState({data: resp.data})
    )
    .catch(
      err =>
        console.log("Axios Err: ", err)
      )
  };

  render() {
    return (
      <div className="appWrapper">
        <h1>Players.</h1>
        <Display data={this.state.data}/>
      </div>
        )
  }

}

export default App;
