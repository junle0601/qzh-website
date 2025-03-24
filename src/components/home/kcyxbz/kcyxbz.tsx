import KeCheng from './kecheng'
import YouXi from './youxi'
import './kcyxbz.css'

const kcyxbz = () => {
  return (
    <>
    <div className="wrapper-kcyxbz">
        <div className="card-container-kcyxbz">
            <div className='row-kcyxbz'>
                课程与游戏并重
            </div>
        </div>
    </div>
      <div className='row'>
        <KeCheng/>
        <YouXi/>
    </div>

      
    </>
  )
}

export default kcyxbz
