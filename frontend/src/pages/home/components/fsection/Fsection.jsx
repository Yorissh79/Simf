import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}>Improved Production level with Robotics </p>
                <p className={style.s}>Everyone wants the innovation through robotics </p>
                <button>View details</button>
            </div>

            <div className={style.imgbox}>
                <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
            </div>
        </div>
    )
}

export default Fsection