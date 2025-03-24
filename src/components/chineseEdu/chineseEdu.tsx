import React, { useEffect, useState } from 'react'
import './chineseEdu.css'

const chineseEdu = () => {
    const [modal1, setModal1] = useState(false);

    const toggleModal1 = () => {
      setModal1(!modal1);
    }

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
    

    return (
        <>
       <section className="background-chineseedu">
        <h1>华教</h1>
      </section>

      <div className="background-chinese-edu hidden">
            <div className='card-container-chineseedu'>
                
            </div>

            <div className='card-container-chineseedu1'>
                
            </div>

            <div className='card-container-chineseedu5'>
           
                </div>

            <div className='card-container-chineseedu2'>
                
            </div>

            <div className='card-container-chineseedu3'>
                
            </div>
            <div className="preview-text-chineseedu">
            马来西亚华文教育（华教）拥有悠久历史，是东南亚华文教育体系最完整的国家之一
            。它不仅承载着中华文化的传承，也为不同族群提供优质的多语教育环境。百年来，华
            教在民间力量的推动下蓬勃发展，涵盖华小、独中、国民型中学及私立大专，培养了无数
            优秀人才。如今，马来西亚华教不仅是文化的桥梁，更是促进社会多元共融的重要力量。
              </div>
      </div>

      <div className="huajiaodoushi hidden">
       华教斗士
      </div>

      <div className="huajiaodoushi-container hidden">
        <div className='card-container-linhuangsheng'>
          <div className="shenmuyu">
            沈慕羽
          </div>           
      </div>
      <div className='card-container-shenmuyu hidden'>
          <div className="linhuangsheng">
            林晃昇
          </div>           
     </div>
     <div className='card-container-linlianyu hidden'>
          <div className="linlianyu">
            林连玉
          </div>           
     </div>
     <div className='card-container-motaixi hidden'>
          <div className="motaixi">
            莫泰熙
          </div>           
     </div>

            
      </div>
  

<section className='huajiaogushi-background'>

  <div className="huajiaogushi-background1">
      <div className="huajiaodoushi hidden">
       华教故事
      </div>
      <div className="huajiaogushi-container ">
        <div className='card-container-huajiaogushi1 hidden'>
          <div className="huajiaogushi1">
            茅草行动
          </div>           
      </div>
      <div className='card-container-huajiaogushi2 hidden'>
          <div className="huajiaogushi2">
            白小事件
          </div>           
     </div>
     <div className='card-container-huajiaogushi3 hidden'>
          <div className="huajiaogushi3">
            独大事件
          </div>           
     </div>
     <div className='card-container-huajiaogushi4 hidden'>
          <div className="huajiaogushi4">
            华文中学改制事件
          </div>           
     </div>

            
      </div>
      </div>
      </section>
   
      <div className='empty-space'></div>

      


     
        </>
      )
}

export default chineseEdu
