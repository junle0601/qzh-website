import React from 'react'
import jiujiuImg from '/src/assets/jiujiu.png'

import "./footer.css";

const Footer = () => {
  return (
    <>
        <section className='background-footer'>
            <div className="img-footer">
                <img src={jiujiuImg} alt="Jiujiu" className='jiujiu-img-footer' /> 
                <h2>第十九届全国中学华文学会生活营</h2>
            </div>
            <div className="vertical-line"></div>



        </section>
   
    </>
  )
}

export default Footer
