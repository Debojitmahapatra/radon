import React from "react";
import './UpdateProduct.css'
import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";



const Update_product = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [image, setImage] = useState('')
    const [ISBN, setISBN] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')

    const params = useParams()
    const nav = useNavigate()

    useEffect(() => {
        getProduct()
    },[])


    const getProduct = async () => {
        let result = await fetch(`http://localhost:5000/books/${params.id}`, {
            headers: {
                authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        setTitle(result.data.title)
        setPrice(result.data.price)
        setCategory(result.data.category)
        setSubcategory(result.data.subcategory)
        setExcerpt(result.data.excerpt)
        setImage(result.data.image)
        setISBN(result.data.ISBN)
       
    }

    const updateProduct = async () => {
        // console.warn(name, price);
        let result = await fetch(`http://localhost:5000/books/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ title, excerpt, ISBN, category, subcategory, price, image }),
            headers: {
                'Content-Type': "application/json",
                authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        if (result.status === true) {
            // console.warn(result.message)
            // console.warn(result)
            alert("Successful")
            setTitle('')
            setPrice('')
            setCategory('')
            setSubcategory('')
            setImage('')
            setExcerpt('')
            setISBN('')
            nav('/mybooks')
        }
        else {
            alert(result.message)
        }

    }

    return (
        <div className="box" >
            <h1>Update product</h1>


            <input type='text' placeholder="Enter product title" className="inputProduct"
                value={title} onChange={(e) => { setTitle(e.target.value) }}
            />


            <input type='text' placeholder="Enter product image" className="inputProduct"
                value={image} onChange={(e) => { setImage(e.target.value) }}
            />


            <input type='text' placeholder="Enter price" className="inputProduct"
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />


            <input type='text' placeholder="Enter excerpt" className="inputProduct"
                value={excerpt} onChange={(e) => { setExcerpt(e.target.value) }}
            />


            <input type='text' placeholder="Enter category" className="inputProduct"
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />


            <input type='text' placeholder="Enter sub-category" className="inputProduct"
                value={subcategory} onChange={(e) => { setSubcategory(e.target.value) }}
            />

            <input type='text' placeholder="Enter ISBN" className="inputProduct"
                value={ISBN} onChange={(e) => { setISBN(e.target.value) }}
            />

            <button onClick={updateProduct} className="btn">Update product</button>
        </div>
    )
}

export default Update_product