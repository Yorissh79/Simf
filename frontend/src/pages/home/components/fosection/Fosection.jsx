import React from 'react'
import style from './Fosection.module.scss'

const Fosection = () => {
    return (
        <div className={style.main}>

            <div className={style.text}>
                <p className={style.f}>Brand new app to blow your mind</p>
                <p className={style.s}>We’ve made a life that will change you </p>
                <p className={style.t}> We are here to listen from you deliver exellence </p>
                <p className={style.fo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>Get Stated Now</button>
            </div>

            <div className={style.imgbox}>
                <div className={style.overlay}></div>
                <img src="https://preview.colorlib.com/theme/robotics/img/video-bg.jpg" alt="" />
            </div>

        </div>
    )
}

export default Fosection