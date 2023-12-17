import React from 'react';
import { Element } from 'react-scroll';
import  { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Challenge = () => {
 
  const navigate = useNavigate()
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const challengeDescription = "Take on the challenge and test your skills!";
  const leaderboardData = ["Player 1", "Player 2"];

  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
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
      
      <button className='button-78' role="button" onClick={openLink } >Challenge Details</button>
      <button className='button-78' role="button" onClick={openLink2}>Join Challenge</button>
          <button className='button-78' role="button" onClick={toggleLeaderboard}>PHASE WINNERS</button>
      
        
      </div>     
      {showLeaderboard && (
        <div className="leaderboard-container">
          <h3>Leaderboard</h3>
          <ul>
            {leaderboardData.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </Element>
  );
};

export default Challenge;