import React from 'react'
import style from './Tsection.module.scss'

const Tsection = () => {
    return (
       <div className={style.main}>

            <div className={style.imgbox}>
                <img src="https://preview.colorlib.com/theme/robotics/img/about-img.png" alt="" />
            </div>

            <div className={style.text}>
                <p className={style.f}>Globally Connected by Large Network</p>
                <p className={style.s}> We are here to listen from you deliver exellence </p>
                <p className={style.t}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. </p>
                <button>Get details</button>
            </div>

       </div>
    )
}

export default Tsection