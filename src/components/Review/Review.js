import React from "react";
import './Review.css'
import {useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "react-multi-carousel/lib/styles.css";




const Review_book=()=>{
  

  
  
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    const [category, setCategory]= useState('')
    const [image, setImage]= useState('')
    const [id, setId]=useState('')
 
    const [review, setReview] = useState([]);


    const params = useParams()
    const nav = useNavigate()

   

    useEffect(()=>{
        getProduct()
        
        getReview()
    },[])


    const getProduct=async()=>{
       let  result= await fetch(`http://localhost:5000/books/${params.id}`,{
            headers:{
                authorization: `${JSON.parse(localStorage.getItem('token'))}`
              }
        });
            result=await result.json()
            
            if(result.data){
            setName(result.data.title)
            setPrice(result.data.price)
            setCategory(result.data.excerpt)
            setImage(result.data.image)
            setId(result.data._id)
            setReview(result.data.reviewsData)
            }else{
              alert(result.message)
            }

             console.warn(result.data._id)
    }

    const getReview=async()=>{
  //     let  result= await fetch(`http://localhost:5000/getbooks/${params.id}/review`,{
  //          headers:{
  //              authorization: `${JSON.parse(localStorage.getItem('token'))}`
  //            }
  //      });
  //          result=await result.json()
  //          console.log(result)
  //          if(result){
  //           setReview(result.data);
  //          }else{
  //          alert( result.message)
  //          }
         
  //         //  setId(result.bookId)
  //         //  console.warn(result)
  console.log("i am here")
   }
    
// console.warn(id)
   

    return (
       <>
     

<div className="wrapper">
    <div className="product-img">
      <img src={image} alt={name} height="420" width="327"/>
    </div>
    <div className="product-info">
      <div className="product-text">
      <div className="product-info">
      <div className="product-text">
        <h1>{name}</h1>
        <h2>by studio and friends</h2>
        <p>{category}</p>
      </div>
      <div className="product-price-btn">
        {/* <p>₹<span>{price}</span></p> */}
        <div className="bumbas">₹ {price}</div>
        <div className="butyn">
        <button type="button">Buy now</button>
        <button type="button" onClick={()=>nav(`/add_review/${id}`)}>Comment</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>




  <div className="mid">
    <div className="scrl">
  
      {
        
       
       review.length>0 ? review.map((item, index) => (
        <ul key={index}>
          <li >
            {
             
                <div className="toder">
          <h3>{item.name}</h3>
          <p>{item.review}</p>
          <p className="p2">Rating : {item.rating}</p>
          </div>
         
          
       
 } </li>
        </ul>
      ))

      
      : <h1>No review yet</h1>
      }

    </div>
</div>      

      </>
    )
}

export default Review_book