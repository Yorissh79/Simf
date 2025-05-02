import React, { useEffect } from 'react'
import style from './Admin.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, postProductsThunk } from '../../redux/reducers/productSlice';
import { useFormik } from 'formik';
import Card from './components/card/Card';

const Admin = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.products.data)

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])

    const formik = useFormik({

        initialValues: {
            name: '',
            title: "",
            image: ""
        },
   
        onSubmit: values => {
            dispatch(postProductsThunk(values))
            dispatch(getProductsThunk())
        },
   
      });

    return (
       <div className={style.main}>

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            />

            <label htmlFor="title">Title</label>
            <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            />

            <label htmlFor="name">Image</label>
            <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
            />

            <button type="submit">Submit</button>

        </form>

        <div className={style.cards}>
            {data?.map(item => <Card item={item}/>)} 
        </div>

       </div>
    )
}

export default Admin