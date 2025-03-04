import React, { useState } from 'react'
import "./Modal.css"
import Jiujiu from "../home/jiujiu";
import jiujiuImg from '/src/assets/jiujiu.png'





const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        console.log("Button Clicked!");
        setModal(!modal);
    }

    if(modal){
        document.body.classList.add('active-modal')
    }
    else{
        document.body.classList.remove('active-modal')
    }
    
  return (
    <>
      <Jiujiu
        style={{  marginTop: "300px", marginLeft: "300px" }}
        onClick={toggleModal}
        className='btn-modal'>
      </Jiujiu>

      {modal && (
        <div className="modal">
        <div
        onClick={toggleModal}
        className="overlay">
            <div className="modal-content">
            <div className='image-wrapper-modal'>
                <img src={jiujiuImg} alt="Jiujiu" className='jiujiu-img-modal' /> 
            </div>                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius labore asperiores maxime itaque, quam iure dignissimos 
                    iste quos officia, numquam rem reiciendis cumque sapiente 
                    incidunt est nisi ducimus atque consectetur.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius labore asperiores maxime itaque, quam iure dignissimos 
                    iste quos officia, numquam rem reiciendis cumque sapiente 
                    incidunt est nisi ducimus atque consectetur.</p>
                    <button 
                    onClick={toggleModal}
                    className="close-modal">
                        X
                    </button>
            </div>
        </div>
        </div>
      )}
   

     
    </>

    
  )
}

export default Modal
