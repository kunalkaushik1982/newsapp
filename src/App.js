
import './App.css';
import React, { Component } from "react";
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
export default class App extends Component {
  pageSize = 6
  country = "in"
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
    <div>
      <Router>
        <NavBar/>       
        <Routes>key=""
          <Route exact path="/" element={<News key="general" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="general"/>}/>
          <Route exact path="/business" element={<News  key="business" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="business"/>}/>
          <Route exact path="/entertainment" element={<News  key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="entertainment"/>}/>
          <Route exact path="/general" element={<News  key="general" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="general"/>}/>
          <Route exact path="/health" element={<News  key="health" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="health"/>}/>
          <Route exact path="/science" element={<News  key="science" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="science"/>}/>
          <Route exact path="/sports" element={<News  key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="sports"/>}/>
          <Route exact path="/technology" element={<News  key="technology"apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category="technology"/>}/>
        </Routes>
      </Router>
    </div>
    )
  }
}

