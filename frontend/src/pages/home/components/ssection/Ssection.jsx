import React, { useEffect } from 'react'
import style from './Ssection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/Card'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'

const Ssection = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.products.data)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)


    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    console.log(data)
    if (loading) <p>Loading ...</p>
    if (error) <p>Error</p>

    return (
        <div className={style.main}>
            
            <p className={style.f}>Featured Robotics Products to Show</p>
            <p className={style.s}> Who are in extremely love with eco friendly system.</p>

            <div className={style.cards}>
                {data?.map(item => <Card item={item}/>)}
            </div>

        </div>
    )
}

export default Ssection