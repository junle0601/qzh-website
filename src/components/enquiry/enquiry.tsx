import "./enquiry.css"
import Register from "./register/register"
import Fees from "./fees/fees"
import Camp from "./camp/camp"
import Others from "./others/others"
import Contact from "./contact/contact"
import ChineseEdu from "../chineseEdu/chineseEdu"
import { useEffect, useState } from "react"

const Enquiry = () => {
  const [answer, setAnswer] = useState(false);

  const toggleAnswer = () => {
    setAnswer(!answer);
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

      <section className="background-enquiry">
        <h1>疑问/联络</h1>
      </section>

      <section className='content-enquiry'>
        <div className='wrapper-enquiry'>
        <h2 className="register-title">报名 </h2>
            <div className='card-container-enquiry hidden'>
              <div className='preview-text-enquiry'>怎么报名？ </div>
              
              {( !answer && <div 
              onClick={toggleAnswer}
              className="plus">
              +
            </div>
              )}
           {answer && (<div 
              onClick={toggleAnswer}
              className="plus">
              -
            </div>
            )}
            </div>

            { answer && (<div className={`card-container-answer ${answer ? "show" : ""}`}>
              <div className='preview-text-answer'>点击我们的报名链接，填写 Google Form 即可报名哦。 </div>
             
            </div>
              )}

            <div className='card-container-enquiry hidden'>
              <div className='preview-text-enquiry'>怎么知道是否被录取？ </div>
              <div className="plus">
              +
            </div>
            </div>

            <div className='card-container-enquiry hidden'>
              <div className='preview-text-enquiry'>如果被录取了，但没有去参加，可以找朋友代替吗？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>

            <div className='card-container-enquiry hidden'>
              <div className='preview-text-enquiry'>不是华文学会的学生可以参加吗？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>

            <div className='card-container-enquiry hidden'>
              <div className='preview-text-enquiry'>已经毕业了还可以参加吗？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>
            
            <h2 className="register-title hidden">营费 </h2>
            <div className='card-container-enquiry-1 hidden'>
              <div className='preview-text-enquiry'>如何转交营费？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>

            <div className='card-container-enquiry-1 hidden'>
              <div className='preview-text-enquiry'>营费包含了什么？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>

            <div className='card-container-enquiry-1 hidden'>
              <div className='preview-text-enquiry'>如果被录取了，但没有去参加营会，营费会不会退还？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>


            <h2 className="register-title hidden">营会 </h2>
            <div className='card-container-enquiry-2 hidden'>
              <div className='preview-text-enquiry'>出席营会前需要准备什么？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>
            

            <div className='card-container-enquiry-2 hidden'>
              <div className='preview-text-enquiry'>营会时该穿什么衣服？ </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>

            <h2 className="register-title hidden">留言 </h2>
            <div className='card-container-enquiry-2 hidden'>
              <div className='preview-text-enquiry'>点击这里写下你的疑问 </div>
              <div className='column-enquiry'>
                <div className='text-wrapper-enquiry'>
                ​我们的营员来自全马各所中学。只要你是在籍中学生，并且想要把华文学会搞好，
                想要结交新朋友或是想要拥有难忘的生活营回忆，我们都欢迎你报名全中华，我们绝
                对能够让你拥有到最刺激、最感动的三天两夜！        
                 </div>
              </div>
              <div className="plus">
              +
            </div>
            </div>



          </div>
      

        

      
      </section>



    </>
  )
}

export default Enquiry
