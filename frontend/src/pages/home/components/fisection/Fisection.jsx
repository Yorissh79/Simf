import React from 'react'
import style from './Fisection.module.scss'
import Card from '../fisection/components/card/Card'

const Fisection = () => {

    const data = [
        {
            "who" : "f",
            "name": "Expert Technicians"
        },
        {
            "who" : "s",
            "name": "Professional Service"
        },
        {
            "who" : "t",
            "name": "Great Support"
        },
        {
            "who" : "fo",
            "name": "Technical Skills"
        },
        {
            "who" : "fi",
            "name": "Highly Recomended"
        },
        {
            "who" : "si",
            "name": "Positive Reviews"
        }
    ]

    return (
       <div className={style.main}>
            <p className={style.f}>Some Features that Made us Unique</p> 
            <p className={style.s}> Who are in extremely love with eco friendly system. </p>
            
            <div className={style.cards}>
                {data.map((item) => <Card item={item}/>)}
            </div>
       </div>
    )
}

export default Fisection