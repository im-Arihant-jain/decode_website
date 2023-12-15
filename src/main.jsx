import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx';
import { Element } from 'react-scroll';
import About from './About.jsx';
import { HashRouter } from 'react-router-dom';
import Content from './Content.jsx';
import Challenge from './Challenge.jsx';
import Image1 from './Purple and Orange Facts YouTube Thumbnail (3).png'
import Image2 from './Red Black Yellow Modern Daily Vlog Youtube Thumbnail (37).png'
import Image3 from './TIME-COMPLEXITY (3).png'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  
         <Navbar/>
      
         <App />
         <HashRouter path="/about">
          <Element name="about">
            <About />
          </Element>
        </HashRouter>  
        <div className='content-creation'>  
        <HashRouter path="/Content">
          <Element name="Content">
            <Content img ={Image3} title="DSA CONCEPTS"/>
          </Element>
        </HashRouter>
        <HashRouter path="/Content">
          <Element name="Content">
            <Content img ={Image1} title="DSA CHALLENGE"/>
          </Element>
        </HashRouter>
        <HashRouter path="/Content">
          <Element name="Content">
            <Content img ={Image2} title="DSA PYQS"/>
          </Element>
        </HashRouter>
        </div>
        <HashRouter path="/Challenge">
          <Element name="Challenge">
            <Challenge />
          </Element>
        </HashRouter>

  </React.StrictMode>
)
