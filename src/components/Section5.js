import React from 'react'
import Dashboard from './Dashboard';
import CommentSection from './CommentSection';
import UserReview from './UserReview';

const Section5 = () => {
  return (
    <div className='Wrapper'id='section5'>
      <span id="sub-heading" className="animate-pulse text-center">RAIL MADAD</span>
      <span id="heading" className='mb-8 text-center block text-4xl font-bold'>USER REVIEW</span>
      <div className='container'>
        <UserReview/>
        <a href="/" className='btn btn-primary text-center justify-center max-w-[200px]'>Go To Community Page</a>
      </div>
    </div>
  )
}

export default Section5