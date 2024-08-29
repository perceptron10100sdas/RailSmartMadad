import React from 'react'
import Dashboard from './Dashboard';
import CommentSection from './CommentSection';

const Section4 = () => {
  return (
    <div className='Wrapper'id='section4'>
      <span id="sub-heading" className="animate-pulse text-center">RAIL MADAD</span>
      <span id="heading" className='text-center mb-8'>Community</span>
      <div className='container'>
        <Dashboard/>
      </div>
      <div className='container'>
        <CommentSection/>
      </div>
    </div>
  )
}

export default Section4