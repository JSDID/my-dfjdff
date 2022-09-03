import React, { Component } from 'react'

import './App.css';
import MyCard from './MyCard.jsx';
import MyProjects from './MyProjects.jsx';
export default class App extends Component {
  render() {
    return (<><div className='Row'><MyCard /><MyProjects/></div></>);
  }
}
