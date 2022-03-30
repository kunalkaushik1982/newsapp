
import './App.css';
import React, { useState } from "react";
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const pageSize = 6
  const country = "in"
  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
    return (
    <div>
      <Router>
        <NavBar/> 
        <LoadingBar
        color='#f11946'
        progress={progress}
      />      
        <Routes>key=""
          <Route exact path="/" element={<News setProgress={setProgress}  key="general" apiKey={apiKey} pageSize={pageSize} country={country} category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress}   key="business" apiKey={apiKey} pageSize={pageSize} country={country} category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" apiKey={apiKey} pageSize={pageSize} country={country} category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress}   key="general" apiKey={apiKey} pageSize={pageSize} country={country} category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress}   key="health" apiKey={apiKey} pageSize={pageSize} country={country} category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress}   key="science" apiKey={apiKey} pageSize={pageSize} country={country} category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress}   key="sports" apiKey={apiKey} pageSize={pageSize} country={country} category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress}   key="technology"apiKey={apiKey} pageSize={pageSize} country={country} category="technology"/>}/>
        </Routes>
      </Router>
    </div>
    )
}

export default App