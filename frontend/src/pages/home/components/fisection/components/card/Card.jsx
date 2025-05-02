import React from 'react'
import style from './Card.module.scss'
import { CiUser } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { SlBubble } from "react-icons/sl";

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <div className={style.top}>
                {
                    item.who == "f" ? <CiUser style={{fontSize: "25px"}}/> : item.who == "s" ? <FaRegAddressCard style={{fontSize: "25px"}}/> : item.who == "t" ? <GiRotaryPhone style={{fontSize:"25px"}}/> : item.who == "fo" ? <IoRocketOutline style={{fontSize:"25px"}}/> : item.who == "fi" ? <IoDiamondOutline style={{fontSize:"25px"}}/> : item.who == "si" ? <SlBubble style={{fontSize:"25px"}}/> : ""
                }
                <p className={style.f}>{item.name}</p> 
            </div>

            <div className={style.bottom}>
                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power. </p>
            </div>
        </div>
    )
}

export default Card