import React from 'react'
import style from './Card.module.scss'

const Card = ({item}) => {
    return (
       <div className={style.main}>
            <div className={style.imgbox}>
                <img src={item.image} alt="" /> 
            </div>
            <p className={style.f}>{item.name}</p>
            <p className={style.s}>{item.title}</p>

            <button>View Details</button>
       </div>
    )
}

export default Card