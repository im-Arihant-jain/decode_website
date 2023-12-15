import React from 'react';
import { Element } from 'react-scroll';
import  { useState } from 'react';
const Content = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    // Replace 'your-link-url' with the actual link URL
    window.location.href = 'your-link-url';
  };
  return (
    <Element name="Content">
      <div className="card">
        
      <a href="#" className="image-link" onClick={handleClick}>
            <img src={props.img} className={isHovered ? 'hovered' : 'unhovered'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
            </a>
            <p className="card--title">{props.title}</p>
            
        </div>
    </Element>
  );
};

export default Content;