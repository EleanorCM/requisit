import React from 'react';
import './WavesAnimation.css';

function WavesAnimation() {
  return (
   <svg id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150" className='waves-svg'>
      
      {/* Animation created and modified from: https://svgwave.in/*/}

      <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc44"></stop><stop offset="95%" stop-color="#32ded444"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,100 0,100 C 199,96 398,92 638,92 C 878,92 1159,96 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc66"></stop><stop offset="95%" stop-color="#32ded466"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,200 0,200 C 203,184 406,168 646,168 C 886,168 1163,184 1440,200 C 1440,200 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
         <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,300 0,300 C 185,306 370,312 610,312 C 850,312 1145,306 1440,300 C 1440,300 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-2"></path>
          <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,400 0,400 C 190,404 380,408 620,408 C 860,408 1150,404 1440,400 C 1440,400 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
  )
}

export default WavesAnimation 
