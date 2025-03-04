import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from "typewriter-effect"
import Header from "../common/Header";
import CardContainer from './card-container';
import Aim from './aim';
import Modal from '../Modal/Modal';
import Zhuti from '../Modal/Zhuti';
import "./Home.css";

const Home = () => {
  return (
    <>

      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContainer'>
            <h3>{val.text}</h3>
            <h1>
              <Typewriter options={{ strings: [`${val.name}`, `${val.post}`],
            autoStart: true, loop: true }}></Typewriter>
            </h1>
            <p>{val.desc}</p>
            <button className='primaryBtn'>了解更多</button>
          </div>
        ))}
      </section>
      <section className='content'>
        <div className='title'>
          <h1>  全中华19  </h1>
          <h3>第十九届全国中学华文学会生活营</h3>
        </div>
        <div className='row'>
          <CardContainer/> 
          <Aim/> 
        </div>
        <div className="row" style={{ gap : "200px"}}>
        <Modal/>
        <Zhuti/>
        </div>

      
      </section>
    </>
  )
}

export default Home
