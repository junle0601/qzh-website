import { useEffect } from "react";
import "./guideline.css"
import baomingzhinan1Img from '/src/assets/baomingzhinan1.png';
import baomingzhinan2Img from '/src/assets/baomingzhinan2.png';
import baomingzhinan3Img from '/src/assets/baomingzhinan3.png';


const Guideline = () => {

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



      <section className="background-guideline">
        <h1>全中华生活营报名指南</h1>
      </section>


    {/* <div className="row">
      <div className="circle">
        <h2>
          1
        </h2>
      </div>
      <div className="circle">
        <h2>
          2
        </h2>
      </div>
      <div className="circle">
        <h2>
          3
        </h2>
      </div>

      </div> */}
      <div className="background-guideline1">

      <section className="hidden">
        <div className="card-container-guideline">
          <h2 className="title-guideline">
            第一阶段 （网上报名）
          </h2>
          <h3 className="content-guideline">
            *请在以下网络表格填上个人资料
          </h3>
          <img src={baomingzhinan1Img} alt="baomingzhinan1" className="baomingzhinan1" />
          <button className="baoming">
            北马分站报名表格
          </button>
        </div>
      </section>

      <section className="hidden">
        <div className="card-container-guideline">
          <h2 className="title-guideline">
            第二阶段 （付费方式）
          </h2>
          <h3 className="content-guideline">
            注意：所有想参与的营员需要以银行汇款方式把数额  <strong style={{ color:"red" }}>90令吉（RM90）的营费 （仅限于北马分站）</strong>缴清, 报名才被受理
          </h3>
          <img src={baomingzhinan2Img} alt="baomingzhinan2" className="baomingzhinan2" />
          <img src={baomingzhinan3Img} alt="baomingzhinan2" className="baomingzhinan3" />
          <h3 className="content-guideline2">
          若有任何关于付款方式方面的疑惑,请联络:
                  </h3>
                  <h3 className="content-guideline3">
                  梁佩錤（财政）：011-1123 7528
                  </h3>
                  <h3 className="content-guideline4">
                  ​谢佳纹（主席）：010-988 2869
                  </h3>
        </div>
      </section>

      <section className="hidden" style={ { paddingBottom: "200px"} }>
        <div className="card-container-guideline">
          <h2 className="title-guideline">
            第三阶段 （付费方式）
          </h2>
          <h3 className="content-guideline">
            注意：所有想参与的营员需要以银行汇款方式把数额  <strong style={{ color:"red" }}>90令吉（RM90）的营费 （仅限于北马分站）</strong>缴清, 报名才被受理
          </h3>
          <img src={baomingzhinan2Img} alt="baomingzhinan2" className="baomingzhinan2" />
          <img src={baomingzhinan3Img} alt="baomingzhinan2" className="baomingzhinan3" />
          <h3 className="content-guideline2">
          若有任何关于付款方式方面的疑惑,请联络:
                  </h3>
                  <h3 className="content-guideline3">
                  梁佩錤（财政）：011-1123 7528
                  </h3>
                  <h3 className="content-guideline4">
                  ​谢佳纹（主席）：010-988 2869
                  </h3>
        </div>
      </section>
      </div>
    </>
  )
}

export default Guideline
