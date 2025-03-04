import React from 'react'
import jiujiuImg from '/src/assets/jiujiu.png'
import './jiujiu.css'

const jiujiu = ({ onClick }) => {
  return (
    <>
      <div className='column' onClick={onClick}>
        <div className='image-wrapper'>
            <img src={jiujiuImg} alt="Jiujiu" className='jiujiu-img' /> 
        </div>
        <div className='jiujiu-text'>
          吉祥物：啾啾
        </div>
      </div>
    </>
  )
}

export default jiujiu
