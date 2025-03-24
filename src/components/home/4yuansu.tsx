import React from 'react'
import "./4yuansu.css"
import Grts from '../home/grts/grts';
import grtsImg from '/src/assets/grts.png'
import zzyzImg from '/src/assets/zyzz.png'
import hjImg from '/src/assets/hj.png'
import zhwhImg from '/src/assets/zhwh.png'


const fourYuanSu = () => {
  return (
    <>
    <div className='row-yuansu'>
        <Grts img={grtsImg} word='个人提升'
        ></Grts>
          <Grts img={zzyzImg} word='组织运作'
        ></Grts>
    </div>
      <div className='wrapper-yuansu'>
        <div className='card-container-yuansu'>
          <div className='preview-text-yuansu'>四大元素</div>
        </div>
      </div>
      <div className='row-yuansu-1'>
      <Grts img={hjImg} word='华教'
        ></Grts>
        <Grts img={zhwhImg} word='中华文化'
        ></Grts>
    </div>

      
    </>
  )
}

export default fourYuanSu
