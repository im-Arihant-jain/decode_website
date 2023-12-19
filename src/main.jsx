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
import Insta from './sdfasd.jpg'
import Linkedin from './weej.jpg'
import Sam from './WhatsApp Image 2023-12-17 at 17.40.59.jpeg'
import Background from './background.jsx';
import Ari from './WhatsApp Image 2023-12-18 at 15.56.14.jpeg'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  
         <Navbar/>
      
         <App/>
          
        <div className='content-creation'>  
        <Route path="/Content">
          <Element name="Content">
            <Content img ={Image3} title="DSA CONCEPTS" src="https://youtube.com/playlist?list=PLkr_5HWABDoJJqNaK_Au3CoWzrgyvIH7d&si=IZxB_Rtkj8JTGThE" />
          </Element>
        </Route>
        <Route path="/Content">
          <Element name="Content">
            <Content img ={Image1} title="DSA CHALLENGE" src="https://youtube.com/playlist?list=PLkr_5HWABDoL3CWxIlDSswUcVHYEuRGij&si=n8ntsvZ2unsmzopa"/>
          </Element>
        </Route>
        <Route path="/Content">
          <Element name="Content">
            <Content img ={Image2} title="DSA PYQS" src="https://youtube.com/playlist?list=PLkr_5HWABDoJpFuUx1tKWdzFBc2BKx-Bw&si=3i19UnCliebaQ3o2"/>
          </Element>
        </Route>
        </div>
        <Route path="/Challenge">   
          <Element name="Challenge">
            <Challenge />
          </Element>
        </Route>
        <div className='aboutpara'>
        <h3 className='descpara'>Welcome to our dedicated website for coding and DSA enthusiasts! We are a thriving community that revolves around a dynamic YouTube channel where we provide valuable resources and content related to coding and data structures and algorithms (DSA). Our mission is to assist aspiring coders with the necessary knowledge and skills to excel in the world of programming.

On our website, you will find a comprehensive collection of educational materials, tutorials, and coding challenges specifically designed to enhance your understanding of coding principles and DSA concepts.Its just a beggining so guys stay tuned..</h3>
        <div className='about-compo'>
        <Route path="/about">
          <Element name="about">
            <About img ={Ari} img2={Insta} img3={Linkedin} srcins="https://www.instagram.com/im__arihantjain/?hl=en"
             srclin="https://www.linkedin.com/in/arihant-jain-a2079725a/"
             firstName="Arihant" lastName="Jain" phone="85955 46840" email="arihantjain72000@gmail.com"/>
          </Element>
        </Route>
       
        <Route path="/about">
          <Element name="about">
            <About img ={Sam} img2={Insta} img3={Linkedin} srcins="https://www.instagram.com/samarpit_agarwal/?hl=en"
            srclin="https://www.linkedin.com/in/samarpit-agarwal-b4b294255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            firstName="Samarpit" lastName="Agarwal" phone="63992 77859 " email="agarwalsamarpit@gmail.com"/>
          </Element>
        </Route>
        </div>
        </div>
        
       
       

  </React.StrictMode>
)
