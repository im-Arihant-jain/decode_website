import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx';
import { Element } from 'react-scroll';
import About from './About.jsx';
import { HashRouter as  Route } from 'react-router-dom';
import Content from './Content.jsx';
import Challenge from './Challenge.jsx';
import Image1 from './Purple and Orange Facts YouTube Thumbnail (3).png'
import Image2 from './Red Black Yellow Modern Daily Vlog Youtube Thumbnail (37).png'
import Image3 from './TIME-COMPLEXITY (3).png'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  
         <Navbar/>
      
         <App />
         <Route path="/about">
          <Element name="about">
            <About />
          </Element>
        </Route>  
        <div className='content-creation'>  
        <Route path="/Content">
          <Element name="Content">
            <Content img ={Image3} title="DSA CONCEPTS"/>
          </Element>
        </Route>
        <Route path="/Content">
          <Element name="Content">
            <Content img ={Image1} title="DSA CHALLENGE"/>
          </Element>
        </Route>
        <Route path="/Content">
          <Element name="Content">
            <Content img ={Image2} title="DSA PYQS"/>
          </Element>
        </Route>
        </div>
        <Route path="/Challenge">
          <Element name="Challenge">
            <Challenge />
          </Element>
        </Route>

  </React.StrictMode>
)
