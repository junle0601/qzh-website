import './newfeed.css'
import Carousel from '../common/Carousel/carousel'
import Typewriter from "typewriter-effect"
import { home } from '../data/dummydata'


const Newfeed = () => {
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"

]

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

  return (
    <>



      

      <section className="background-newfeed">
        <h1>最新动态</h1>
      </section>

      <section>
        <Carousel autoSlide={true} >
        {[...slides.map((s) => (
            <img src={s}/>
          ))
          ]}
        </Carousel>

        <Carousel autoSlide={true} >
          <div>{heroSlides}</div>
          <div>{heroSlides}</div>

      



          

        </Carousel>

{/* <Carousel autoSlide={true} >
     <img src="https://i.ibb.co/ncrXc2V/1.png" alt="" />
     <img src="https://i.ibb.co/B3s7v4h/2.png" alt="" />
     <img src="https://i.ibb.co/ncrXc2V/1.png" alt="" />
     <img src="https://i.ibb.co/ncrXc2V/1.png" alt="" />
     <img src="https://i.ibb.co/ncrXc2V/1.png" alt="" />


        </Carousel> */}

        <div id="instafeed-container"></div>


      

      </section>

      

     
    </>
  )
}

export default Newfeed
