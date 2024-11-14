import React from 'react'
import ReviewComponent from './Review'

const CompanyProfile = () => {
  return (
    <>
      <div className="container company-profile flex flex-col text-center justify-between pt-4 pb-4 mr-auto ml-auto gap-4">
        <h2>About Your Salon Name</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="review-container">
        <ReviewComponent />
        </div>
      </div>
    </>
  )
}

export default CompanyProfile
