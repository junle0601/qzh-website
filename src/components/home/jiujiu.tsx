import React from 'react'
import jiujiuImg from '/src/assets/jiujiu.png'
import './jiujiu.css'

const jiujiu = () => {
  return (
    <>
        <div className='image-wrapper'>
            <img src={jiujiuImg} alt="Jiujiu" className='jiujiu-img' /> 
        </div>
    </>
  )
}

export default jiujiu
