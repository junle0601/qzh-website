import React from 'react'
import grtsImg from '/src/assets/grts.png'
import './grts.css'

const grts = ({img, word}) => {
  return (
    <>
      <div className='column-grts'>
        <div className='image-wrapper-grts'>
            <img src={img} alt="GRTS" className='grts-img' /> 
            <div className="text-grts">
                {word}
            </div>
        </div>
        {/* <div className='grts-text'>
          吉祥物：啾啾
        </div> */}
      </div>
    </>
  )
}

export default grts
