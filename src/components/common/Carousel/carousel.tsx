import { ChevronLeft, ChevronRight } from "react-feather"
import "./carousel.css"
import { useEffect, useState } from "react"


export default function Carousel({ 
    children: slides,
     autoSlide = false,
    autoSlideInterval = 5000
}) {

    const [curr, setCurr] = useState(0)

    const prev = () => {
        setCurr(curr => curr == 0 ? slides.length - 1 : curr - 1)
    }
    const next = () => {
        setCurr(curr => curr == slides.length - 1 ? 0 : curr + 1)
    }

    useEffect(() => {
        if(!autoSlide){
            return
        }
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
            <div className="carousel-controls">
                <button onClick={prev} className="button-carousel">
                    <ChevronLeft size={40}/>
                </button>
                <button onClick={next} className="button-carousel">
                    <ChevronRight size={40}/>
                </button>
            </div>

            <div className="circle-carousel">
                <div className="circle-wrapper">
                    {slides.map((_, i) => (
                        <div 
                        key={i}
                        className={`circle-container ${curr === i ? "active" : "inactive"}`}
                        onClick={() => setCurr(i)}>

                        </div>
                    ))}
                </div>
            </div>
        </div>
       

    )
}