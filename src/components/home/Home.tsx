import React, { useEffect } from 'react'
import { home, countDown } from '../data/dummydata'
import Typewriter from "typewriter-effect"
import Header from "../common/Header";
import CardContainer from './card-container';
import Aim from './aim';
import Modal from '../Modal/Modal';
import Zhuti from '../Modal/Zhuti';
import Yuansu from '../home/4yuansu';
import Kcyxbz from '../home/kcyxbz/kcyxbz';
import Wmdyy from '../home/more/womendeyingyuan';
import Qgxh from '../home/more/quanguoxunhui';
import Wmdcw from '../home/more/womendechouwei';


import "./Home.css";
import Carousel from '../common/Carousel/carousel';


const Home = () => {

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer when component unmounts
  }, []);


 // Define hero section slides dynamically from `home` data
 const heroSlides = home.map((val, i) => (
  <div className='heroContainer-test' key={i}>
    <h3>{val.text}</h3>
    <h1>
      <Typewriter 
        options={{ 
          strings: [`${val.name}`, `${val.post}`], 
          autoStart: true, 
          loop: true 
        }} 
      />
    </h1>
    <p>{val.desc}</p>
  </div>
));

const countDownSlide = countDown.map((val, i) => (
  <div className='heroContainer-test' key={i}>
    <h3>{val.text}</h3>
    <h1>
      <Typewriter 
        options={{ 
          strings: [`${val.name}`, `${val.post}`], 
          autoStart: true, 
          loop: true 
        }} 
      />
    </h1>
  </div>
));





  return (
    <>

      <section className='hero'>

        {/* {home.map((val, i) => (
          <div className='heroContainer'>
            <h3>{val.text}</h3>
            <h1>
              <Typewriter options={{ strings: [`${val.name}`, `${val.post}`],
            autoStart: true, loop: true }}></Typewriter>
            </h1>
            <p>{val.desc}</p>
          </div>
        ))} */}
          <div className="hero-container">
          <Carousel autoSlide={true} >
                            <div>{heroSlides}</div>
                            <div>{countDownSlide}</div>
                          </Carousel>

          </div>
         
      </section>
      <section className='content'>
        <div className='title hidden'>
          <h1>  全中华19  </h1>
          <h3>第十九届全国中学华文学会生活营</h3>
        </div>
        <div className='row hidden'>
          <CardContainer/> 
          <Aim/> 
        </div>
        <div className="row hidden" style={{ gap : "200px"}}>
        <Modal/>
        <Zhuti/>

        </div>
            <div className='yuansu hidden'>
            <Yuansu/>
          </div>
          <div className='kcyxbz hidden'>
            <Kcyxbz/>
          </div>

        <div className='hidden'>
        <Wmdyy/>

        </div>
        <div className='hidden'>
        <Qgxh/>

          </div>
          <div className='hidden'>
          <Wmdcw/>

          </div>

        <div className='empty-space'></div>

        

      
      </section>
    </>
  )
}

export default Home
