// components/About.js
import React from 'react';
import { Element } from 'react-scroll';




const About = (props) => {
  const [contact, setContact] = React.useState({
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    email: props.email,
   
  })
  const handleClickins = () => {
    // Replace 'your-link-url' with the actual link URL
    window.open(props.srcins, '_blank');
  };
  const handleClicklin=()=>{
    window.open(props.srclin, '_blank');
  }
  return (
   
    <Element name="about">
      <main>
            <article className="cardnext">
                <img src={props.img} className="card--image" />
                <div className="card--info">
                  
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                    <div className='inslin'>
                    <a href="#"  onClick={handleClickins}>
                      <img className='ins' src={props.img2}/></a>
                      <a href="#"  onClick={handleClicklin}>
                      <img className='lin' src={props.img3}/></a>
                    </div>
                </div>
                
            </article>
        </main>
    </Element>
  );
};

export default About;
