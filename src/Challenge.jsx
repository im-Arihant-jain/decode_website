import React from 'react';
import { Element } from 'react-scroll';
import  { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Challenge = () => {
 
  const navigate = useNavigate()
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showChall, setShowChall] = useState(false)
  const challengeDescription = "Take on the challenge and test your skills!";
  const leaderboardData = ["Player 1", "Player 2","Player 3","Player 4"];

  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
  };
  const toggleLeaderboard2 = () => {
    setShowChall(!showChall);
  };
  const openLink = () => {
    // Replace 'https://example.com' with the actual link you want to open
   const linkToOpen = 'https://1drv.ms/w/s!ArdrxM2If0H3gQAXHyALt0GAEUb_?e=OwU5Ku';
    
    // Open the link in a new tab
    
    window.open(linkToOpen, '_blank');
  };
  const openLink2 = () => {
    // Replace 'https://example.com' with the actual link you want to open
    const linkToOpen = 'https://docs.google.com/spreadsheets/d/1QXVSOoowuv_yF_k9_jOPoYGCp529i14EHShJ_6to3so/edit?usp=sharing';
    
    // Open the link in a new tab
    window.open(linkToOpen, '_blank');
  };
  return (
    <Element name="Challenge">
     <div className="challenge-container" style={{ background: 'black', padding: '20px', borderRadius: '10px' }}>
      <h2 className='challenge-head'>Challenge</h2>
      <p className='challdesc'>{challengeDescription}</p>
      <div>
      
      <button className='button-78' role="button" onClick={toggleLeaderboard2 } >Challenge Details</button>
      <button className='button-78' role="button" onClick={openLink2}>Join Challenge</button>
          <button className='button-78' role="button" onClick={toggleLeaderboard}>PHASE WINNERS</button>
      
        
      </div>     
      {showLeaderboard && (
        <div className="leaderboard-container">
          <h3></h3>
          <ul >
            {leaderboardData.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      )}
      {showChall && (
        <div className="leaderboard-chall">
          <h3>CHALLENGE DETAILS</h3>
          <p >
          Alright guys it's time to reveal the challenge 

We will share a question with you every day at 10am 

A sheet will be provided to you in the group description which contains the leaderboard, the question that you need to solve in that day and the google form in which you need to update your code. 

 You will have one day time to solve the question The next day new question will be given with the solution video of previous day question. Names in the sheet will be maintained as a leaderboard i.e. according to the number of questions solved, we will be having questions in phases i.e. 7-10 problems targetting a specific data structure with increasing level of difficulty. 
          </p>
          <p>
          So, remember it is a marathon yet there will be sprints of phases with the people solving most questions will top the leaderboard with their names highlighted in the group. So, every phase will be having a new leaderboard and hence a chance for everyone to bounce back. SO, GET READY TO SHOWCASE YOUR SKILLS AND UPSKILL YOURSELF ALL THE VERY BEST TO YOU ALL👍🏻. 

Also, it's not about the leaderboard it's about the sincere efforts you put in while trying to solve a problem and how consistent you are. 

We will be starting the challenge from 12th of this month and the first data structure we are going to deal with is ARRAYS SO get ready to solve the problems. 

Also, guys, even if you are still in the learning phase you can go for this, still if you are not, you can still watch the videos which will be insightful and learn. 
          </p>
        </div>
      )}
    </div>
    </Element>
  );
};

export default Challenge;