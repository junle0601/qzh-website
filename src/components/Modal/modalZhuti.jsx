import React from 'react'
import "./modalZhuti.css";
import zhutiImg from '/src/assets/zhuti.png'
import Zhuti from '../Modal/Zhuti';

const modalZhuti = () => {
   const [modal, setModal] = useState(false);
  
      const toggleModal = () => {
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
      <Zhuti
        style={{  marginTop: "300px", marginLeft: "300px" }}
        onClick={toggleModal}
        className='btn-modal'>
      </Zhuti>

      {modal && (
        <div className="modal">
        <div
        onClick={toggleModal}
        className="overlay">
            <div className="modal-content">
            <div className='image-wrapper-modal'>
                <img src={zhutiImg} alt="Zhuti" className='jiujiu-img-modal' /> 
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

export default modalZhuti
