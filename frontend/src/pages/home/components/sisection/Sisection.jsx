import React from 'react'
import style from './Sisection.module.scss'
import Card from '../sisection/components/card/Card'

const Sisection = () => {

    const data = [
        {
            "image" : "https://preview.colorlib.com/theme/robotics/img/b1.jpg"
        },
        {
            "image" : "https://preview.colorlib.com/theme/robotics/img/b2.jpg"
        }
    ]

    return (
       <div className={style.main}>
        
            <p className={style.f}>Latest News from our Blog</p>
            <p className={style.s}> Who are in extremely love with eco friendly system. </p>

            <div className={style.cards}>
                
                {data.map((item) => <Card item={item}/>)}

            </div>

       </div>
    )
}

export default Sisection