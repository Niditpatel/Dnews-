import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
   pageSize=5;
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <Routes>
        <Route exact  path='/home' element={<News pageSize={this.pageSize} key='home' category='general' country='in' />}></Route>
          <Route exact  path='/general' element={<News pageSize={this.pageSize} key='general' category='general' country='in' />}></Route>
          <Route exact  path='/business' element={<News pageSize={this.pageSize} key='business' category='business' country='in'/>} ></Route>
          <Route exact  path='/entertainment' element={<News pageSize={this.pageSize} key='entertainment' category='entertainment' country='in'/>}></Route>
          <Route exact path='/health' element={<News pageSize={this.pageSize} key='health'  category='health' country='in'/> } ></Route>
          <Route exact path='/science' element={<News pageSize={this.pageSize} key='science'  category='science' country='in'/> } ></Route>
          <Route exact path='/sports' element={<News pageSize={this.pageSize} key='sports'  category='sports' country='in'/> } ></Route>
          <Route exact  path='/technology' element={<News pageSize={this.pageSize} key='technology' category='technology' country='in'/>} ></Route>    
        </Routes>
        </Router>
      </div>
    )
  }
}
