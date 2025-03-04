import React from 'react'
import zhutiImg from '/src/assets/zhuti.png'
import './Zhuti.css'

const Zhuti = ( { onClick }) => {
  return (
    <>
       <div className='column' onClick={onClick}>
              <div className='image-wrapper-zhuti'>
                  <img src={zhutiImg} alt="Zhuti" className='zhuti-img' /> 
              </div>
              <div className='zhuti-text'>
                主题
              </div>
            </div>
    </>
  )
}

export default Zhuti
