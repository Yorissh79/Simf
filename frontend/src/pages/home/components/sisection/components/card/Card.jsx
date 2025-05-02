import React from 'react'
import style from './Card.module.scss'

const Card = ({item}) => {
    return (
       <div className={style.main}>

            <div className={style.imgbox}>
                <img src={item.image} alt="" />
            </div>

            <div className={style.btns}>
                <button>Travel</button>
                <button>Life Style</button>
            </div>

            <div className={style.text}>
                <p className={style.tf}>Portable latest Fashion for young women</p>
                <p className={style.ts}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.</p>
                <p className={style.tt}>31st January, 2018</p>
            </div>

       </div>
    )
}

export default Card