import React from "react";
import './AddProduct.css'
import {useState} from 'react'

const Addproduct=()=>{
  
    const [title, setTitle]= useState('')
    const [price, setPrice]= useState('')
    const [excerpt, setExcerpt]= useState('')
    const [image, setImage]= useState('')
    const [ISBN, setISBN]= useState('')
    const [category, setCategory]= useState('')
    const [subcategory, setSubcategory]= useState('')
    

    const addProduct= async()=>{
     console.log({title, price, image, excerpt,  ISBN, category, subcategory});
        const userId =JSON.parse(localStorage.getItem('data'))._id
        console.warn(userId)
        
        let result= await fetch('http://localhost:5000/books', {
            method: 'post',
            body: JSON.stringify({title, price, image, excerpt,userId, ISBN, category, subcategory}),
            headers:{
                'Content-Type':'application/json',
                authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
            }

        })
        result=await result.json()
        console.warn(result)

        if(result.status===true){
             alert("Successful")  
             setTitle('')
             setPrice('') 
             setExcerpt('')
             setImage('')
             setISBN('')
             setCategory('')
             setSubcategory('')
        }
        else{
            alert(result.message)
        }
    }

    return (
        <div className="box" >
            <h1>Add product</h1>

            <input type='text' placeholder="Enter product title" className="inputProduct"
           value={title} onChange={(e)=>{setTitle(e.target.value)}}
            />
          
           <input type='text' placeholder="Enter product image" className="inputProduct"
           value={image} onChange={(e)=>{setImage(e.target.value)}}
            />
        

            <input type='text' placeholder="Enter price" className="inputProduct"
           value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />
             

            <input type='text' placeholder="Enter excerpt" className="inputProduct"
           value={excerpt} onChange={(e)=>{setExcerpt(e.target.value)}}
            />
             

            <input type='text' placeholder="Enter category" className="inputProduct"
           value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            

             <input type='text' placeholder="Enter sub-category" className="inputProduct"
           value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}
            />

             <input type='text' placeholder="Enter ISBN" className="inputProduct"
           value={ISBN} onChange={(e)=>{setISBN(e.target.value)}}
            />

            <button onClick={addProduct} className="btn">Add product</button>
        </div>
    )
}


export default Addproduct
