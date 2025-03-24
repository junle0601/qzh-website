import React, { useEffect, useState } from "react"
import "./history.css"
import qzh1Img from "/src/assets/history/qzh1.png"
import qzh2Img from "/src/assets/history/qzh2.png"
import qzh3Img from "/src/assets/history/qzh3.jpg"
import qzh4Img from "/src/assets/history/qzh4.png"
import qzh5Img from "/src/assets/history/qzh5.png"
import qzh6Img from "/src/assets/history/qzh6.png"
import qzh7Img from "/src/assets/history/qzh7_orig.png"
import qzh8Img from "/src/assets/history/qzh8.png"
import qzh9Img from "/src/assets/history/qzh9.png"
import qzh10Img from "/src/assets/history/qzh10.png"
import qzh11Img from "/src/assets/history/qzh11.png"
import qzh12Img from "/src/assets/history/qzh12.png"
import qzh13Img from "/src/assets/history/qzh13.png"
import qzh14Img from "/src/assets/history/qzh14.png"
import qzh15Img from "/src/assets/history/qzh15.png"
import qzh16Img from "/src/assets/history/qzh16.png"
import qzh17Img from "/src/assets/history/qzh17.png"
import qzh18Img from "/src/assets/history/qzh18.png"
import ModalHistory from "./modal-history/modal-history"


const History = () => {

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

  const [modal1998, setModal1998] = useState(false);
  const [modal2001, setModal2001] = useState(false);
  const [modal2003, setModal2003] = useState(false);
  const [modal2007, setModal2007] = useState(false);




  const [fixModal, setFixModal] = useState(false);
  const [num, setNum] = useState(0);

  const toggleModal1998 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(1);
  }
  const toggleModal2001 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(2);
  }
  const toggleModal2003 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(3);
  }
  const toggleModal2004 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(4);
  }
  const toggleModal2007 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(5);
  }
  const toggleModal2008 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(6);
  }
  const toggleModal2009 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(7);
  }
  const toggleModal2010 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(8);
  }
  const toggleModal2011 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(9);
  }
  const toggleModal2012 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(10);
  }
  const toggleModal2013 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(11);
  }
  const toggleModal2014 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(12);
  }
  const toggleModal2015 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(13);
  }
  const toggleModal2016 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(14);
  }
  const toggleModal2017 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(15);
  }
  const toggleModal2018 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(16);
  }
  const toggleModal2019 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(17);
  }
  const toggleModal2020 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(18);
  }
  const toggleModal2021 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(19);
  }
  const toggleModal2022 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(20);
  }
  const toggleModal2023 = () => {
    setModal1998(!modal1998);
    setFixModal(!fixModal);
    setNum(21);
  }

  
  
  
  

  if(fixModal){
    document.body.classList.add('active-modal');
  }
  else{
    document.body.classList.remove('active-modal');
  }



  return (
    <>
    <div className="background-history-whole">
      <section className="background-history">
        <h1>历史走廊</h1>
      </section>
    </div>

    <div className="wrapper-grid">
      <section className="grid hidden">
        <div className="item"  onClick={toggleModal1998}>
        <div className="title-history-history">全中</div>
            <div 
            className="year">1998</div>
        </div>
        <div className="item" onClick={toggleModal2001}>
        <div className="title-history-history">全中</div>
        <div 
        className="year">2001</div>
        </div>
        <div className="item" onClick={toggleModal2003}>
        <div className="title-history-history">全中</div>
            <div className="year">2003</div>
        </div>
        <div className="item" onClick={toggleModal2004}>
            <div className="title-history-history">全中华1</div>
            <div className="year">2004</div>
            <img src={qzh1Img} alt="qzh1Img"/>
        </div>
        <div className="item" onClick={toggleModal2007}>
            <div className="title-history-history">全中华2</div>
            <div className="year">2007</div>
            <img src={qzh2Img} alt="qzh2Img"/>
        </div>
        <div className="item" onClick={toggleModal2008}>
            <div className="title-history-history">全中华3</div>
            <div className="year">2008</div>
            <img src={qzh3Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2009}>
            <div className="title-history-history">全中华4</div>
            <div className="year">2009</div>
            <img src={qzh4Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2010}>
            <div className="title-history-history">全中华5</div>
            <div className="year">2010</div>
            <img src={qzh5Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2011}>
            <div className="title-history-history">全中华6</div>
            <div className="year">2011</div>
            <img src={qzh6Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2012}>
            <div className="title-history-history">全中华7</div>
            <div className="year">2012</div>
            <img src={qzh7Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2013}>
            <div className="title-history-history">全中华8</div>
            <div className="year">2013</div>
            <img src={qzh8Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2014}>
            <div className="title-history-history">全中华9</div>
            <div className="year">2014</div>
            <img src={qzh9Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2015}>
            <div className="title-history-history">全中华10</div>
            <div className="year">2015</div>
            <img src={qzh10Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2016}>
            <div className="title-history-history">全中华11</div>
            <div className="year">2016</div>
            <img src={qzh11Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2017}>
            <div className="title-history-history">全中华12</div>
            <div className="year">2017</div>
            <img src={qzh12Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2018}>
            <div className="title-history-history">全中华13</div>
            <div className="year">2018</div>
            <img src={qzh13Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2019}>
            <div className="title-history-history">全中华14</div>
            <div className="year">2019</div>
            <img src={qzh14Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2020}>
            <div className="title-history-history">全中华15</div>
            <div className="year">2020</div>
            <img src={qzh15Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2021}>
            <div className="title-history-history">全中华16</div>
            <div className="year">2021</div>
            <img src={qzh16Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2022}>
            <div className="title-history-history">全中华17</div>
            <div className="year">2022</div>
            <img src={qzh17Img} alt="qzh3Img"/>
        </div>
        <div className="item" onClick={toggleModal2023}>
            <div className="title-history-history">全中华18</div>
            <div className="year">2023</div>
            <img src={qzh18Img} alt="qzh3Img"/>
        </div>
   
      </section>

      </div>

      {modal1998 && (<ModalHistory modalValue={modal1998} num={num} toggleModal={toggleModal1998}/>)}


   
    </>
  )
}

export default History
