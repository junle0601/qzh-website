import React, { useEffect, useState } from 'react'
import "./modal-history.css"
import jiujiuImg from '/src/assets/jiujiu.png'
import qzh1Img from "/src/assets/history/qzh1.png"
import qzh2Img from "/src/assets/history/qzh2.png"
import qzh3Img from "/src/assets/history/qzh3.jpg"
import dingWei from "/src/assets/history/dingwei-removebg-preview.png"
import qzh1ChouWei from "/src/assets/history/qzh1/qzh1ChouWei.png"
import logo from "/src/components/data/qzhlogo.png"
import qzh2Logo from "/src/assets/history/qzh2/qzh2Logo.jpg"
import qzh2TuPian from "/src/assets/history/qzh2/qzh2tupian.png"




const ModalHistory = ({ modalValue, num, toggleModal }) => {
    // const [controlValue, setControlValue] = useState(false);

    // const toggleControlValue = () => {
    //     console.log("control value button clicked");
    //     setControlValue(!controlValue);
    //     modalValue = controlValue;
    //     console.log("modalValue: "+modalValue);
    // }

    const [showModal, setShowModal] = useState(false);

    // for image zoom in
    const [zoomedImage, setZoomedImage] = useState(null);

    const openImage = (imgSrc) => {
      setZoomedImage(imgSrc);
    };

    const closeImage = () => {
      setZoomedImage(null);
    }


    useEffect( () => {
      if(modalValue) {
        setTimeout(() => setShowModal(true), 10); // Small delay for animation
      }
      else{
        setShowModal(false);
      }
    }, [modalValue])

  return (
    <>
    <div className="overlay">
      {modalValue && (
        <div className={`modal-history ${showModal && num == 1 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>1998</h2>
                    <h2 className='title-history'>全中（第一届）</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{modalValue && (
        <div className={`modal-history ${showModal && num == 2 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2001</h2>
                    <h2 className='title-history'>全中（第二届）</h2>
                </div>
                <div className='content-history'>全中抱着同样的宗旨与目标继续办了第二届</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中3 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 3 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2003</h2>
                    <h2 className='title-history'>全中（第三届）</h2>
                </div>
                <div className='content-history'>全中抱着同样的宗旨与目标继续办了第三届</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}


{/* 全中华1 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 4 ? "show" : ""}`}>
 
            <div className="modal-content2004">
                <div className='titles-history'>
                <h2 className='year-history'>2004</h2>
                    <h2 className='title-history'>全中华 1</h2>
                    <h2 className='title2-history'>《梦 · 起点 · 交响曲》</h2>
                    <img className='qzh1Img' src={qzh1Img} alt="" />
                </div>
                <div className='content2004-history1'> <h1 className='bulletpoint'>•</h1>在马大华文学会执委的推动下，全中经历第一次转型，改做
                </div>
                <div className='content2004-history2'> 全国中学华文学会交流营</div>

                <div className='content2004-history1'>也就是第一届全中华。</div>

                <h2 className='title2004-history1'>新的定位</h2>                   
                 <img className='dingWei' src={dingWei} alt="" />
                <div className='content2004-history3'><h1 className='bulletpoint'>•</h1>帮助中学华文学会（内部建设，领导，如何组织学会等等），回馈社会（响应马大华文学会会训，扎实为经，回馈为纬</div>

                <div className='content2004-history4'>全中华1之后，筹委们发现交流营的方式其实无法有效达到
                  宗旨与目标，营员也没有因此而获得很大的帮助。因此在2005和2006年期间，全中华<span style={{ color:"red"}}>暂停举办</span>，并用这
                  段时间来进行检讨和重新制定未来发展方向</div>

                  <h2 className='title2004-history2'>图示：</h2> 
                  {/* normal image */}
                  <img className='qzh1ChouWei' 
                  src={qzh1ChouWei} alt="QZH1CHOUWEI"
                  style={{ cursor: "pointer" }}
                  onClick={ () => openImage(qzh1ChouWei)} />
                  <h2 className='title2004-history3'>全中华1筹委会</h2> 


                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>

                
            </div>
              {/* image zoomed modal */}
              {zoomedImage  && (
                    <div className="image-modal" onClick={closeImage}>
                      <img src={zoomedImage} alt="" />
                    </div>
                  )}
        </div>
      )}


{/* 全中华2 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 5 ? "show" : ""}`}>
 
 <div className="modal-content2004">
                <div className='titles-history'>
                <h2 className='year-history'>2007</h2>
                    <h2 className='title-history'>全中华 2</h2>
                    <h2 className='title2-history'>《芽之声，赤之真》</h2>
                    <img className='qzh1Img' src={qzh2Img} alt="" />
                </div>
                <div className='content2004-history1'> <h1 className='bulletpoint'>•</h1>2年后，全中华由原来的
                <span style={{ fontSize: "30px", color: "rgb(251, 227, 94)" }}>交流营</span>转型成了
                <span style={{ fontSize: "30px", color: "rgb(94, 251, 170)" }}>生活营</span>
                </div>
                <h2 className='title2004-history1'>全中华2的宗旨沿用至今</h2>                   
                <div className='content2004-history3'><h1 className='bulletpoint'>•</h1>宗旨：提升全国中学华文学会的素质</div>
                <div className='content2005-history4'><h1 className='bulletpoint'>•</h1>宗旨和全中华1的新地位 （帮助中学华文学会）同步，代表我们的宗旨从一而终。</div>

                <h2 className='title2005-history2'>总营徽</h2>                   
                <div className='content2005-history5'><h1 className='bulletpoint'>•</h1>总营徽从第一届全中华营徽延伸出来并沿用至今</div>
                <img className='zongYingHui' src={qzh2Logo} alt="" />
                <img className='zongYingHui2' src={logo} alt="" />


                {/* <div className='content2004-history4'>全中华1之后，筹委们发现交流营的方式其实无法有效达到
                  宗旨与目标，营员也没有因此而获得很大的帮助。因此在2005和2006年期间，全中华<span style={{ color:"red"}}>暂停举办</span>，并用这
                  段时间来进行检讨和重新制定未来发展方向</div> */}

                  <h2 className='title2004-history2'>图示：</h2> 
                  {/* normal image */}
                  <img className='qzh1ChouWei' 
                  src={qzh2TuPian} alt="qzh2TuPian"
                  style={{ cursor: "pointer" }}
                  onClick={ () => openImage(qzh2TuPian)} />
                  <h2 className='title2005-history3'>全中华2生活营大合照</h2> 


                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>

                
            </div>
              {/* image zoomed modal */}
              {zoomedImage  && (
                    <div className="image-modal" onClick={closeImage}>
                      <img src={zoomedImage} alt="" />
                    </div>
                  )}
        </div>
      )}

{/* 全中华3 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 6 ? "show" : ""}`}>
 
 <div className="modal-content2004">
                <div className='titles-history'>
                <h2 className='year-history'>2008</h2>
                    <h2 className='title-history'>全中华 3</h2>
                    <h2 className='title2-history'>《星火 · 燃 · 续炎》</h2>
                    <img className='qzh3Img' src={qzh3Img} alt="" />
                </div>
            
                <h2 className='title2008-history1'>全国巡回</h2>                   
                <div className='content2004-history3'><h1 className='bulletpoint'>•</h1>全中华1和2都是在马大举办，因为距离的关系，因此受益的学生多数只是雪隆区这一区域的学生。
                因此，当届筹委会决定以全国巡回的方式进行。目的是为了让全国各地的中学生都有机会接触以及参与全中华的生活营。</div>

                <h2 className='title2005-history2'>分站与总站的概念</h2>                   
                <div className='content2005-history5'><h1 className='bulletpoint'>•</h1>分站： 设定新的交流平台，了解当地华文学会。</div>
                <div className='content2008-history6'><h1 className='bulletpoint'>•</h1>总站： 完善原有的交流平台和学习环境。</div>
            


                {/* <div className='content2004-history4'>全中华1之后，筹委们发现交流营的方式其实无法有效达到
                  宗旨与目标，营员也没有因此而获得很大的帮助。因此在2005和2006年期间，全中华<span style={{ color:"red"}}>暂停举办</span>，并用这
                  段时间来进行检讨和重新制定未来发展方向</div> */}

                  <h2 className='title2004-history2'>图示：</h2> 
                  {/* normal image */}
                  <img className='qzh1ChouWei' 
                  src={qzh2TuPian} alt="qzh2TuPian"
                  style={{ cursor: "pointer" }}
                  onClick={ () => openImage(qzh2TuPian)} />
                  <h2 className='title2005-history3'>全中华2生活营大合照</h2> 


                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>

                
            </div>
              {/* image zoomed modal */}
              {zoomedImage  && (
                    <div className="image-modal" onClick={closeImage}>
                      <img src={zoomedImage} alt="" />
                    </div>
                  )}
        </div>
      )}

{/* 全中华4 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 7 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2009</h2>
                    <h2 className='title-history'>全中华 4</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华5 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 8 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2010</h2>
                    <h2 className='title-history'>全中华 5</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华6 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 9 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2011</h2>
                    <h2 className='title-history'>全中华 6</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华7 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 10 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2012</h2>
                    <h2 className='title-history'>全中华 7</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}


{/* 全中华8 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 11 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2013</h2>
                    <h2 className='title-history'>全中华 8</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华9 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 12 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2014</h2>
                    <h2 className='title-history'>全中华 9</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华10 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 13 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2015</h2>
                    <h2 className='title-history'>全中华 10</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华11 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 14 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2016</h2>
                    <h2 className='title-history'>全中华 11</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华12 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 15 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2017</h2>
                    <h2 className='title-history'>全中华 12</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华13 */}
{modalValue && (
        <div className={`modal-history ${showModal && num == 16 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2018</h2>
                    <h2 className='title-history'>全中华 13</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华14*/}
{modalValue && (
        <div className={`modal-history ${showModal && num == 17 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2019</h2>
                    <h2 className='title-history'>全中华 14</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华15*/}
{modalValue && (
        <div className={`modal-history ${showModal && num == 18 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2020</h2>
                    <h2 className='title-history'>全中华 15</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华16*/}
{modalValue && (
        <div className={`modal-history ${showModal && num == 19 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2021</h2>
                    <h2 className='title-history'>全中华 16</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}


{/* 全中华17*/}
{modalValue && (
        <div className={`modal-history ${showModal && num == 20 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2022</h2>
                    <h2 className='title-history'>全中华 17</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}

{/* 全中华18*/}
{modalValue && (
        <div className={`modal-history ${showModal && num == 21 ? "show" : ""}`}>
 
            <div className="modal-content">
                <div className='titles-history'>
                <h2 className='year-history'>2023</h2>
                    <h2 className='title-history'>全中华 18</h2>
                </div>
                <div className='content-history'>全中华的前身，(全中) 创立。  全名为 全国中学生生活营，当时候的全中并非今时的全中华，
                    还未肩负传承华教与中华文化的责任，而是专注在醒觉以及与中学生交流居多</div>
                    <button 
                    className="close-modal"
                    onClick={toggleModal}>
                        X
                    </button>
            </div>
        </div>
      )}








   </div>



     
    </>

    
  )
}

export default ModalHistory
