import React from 'react'
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./AllProduct.css";


function AllProduct() {
    const [products, setProducts] = useState([]);
    let nav = useNavigate()
  function logOutUser() {
    localStorage.clear()
    alert("session expired please log in again")
    nav('/login')
  }
    // let uId = localStorage.getItem('woner')
    // uId=JSON.parse(uId)
    // uId=uId._id
  
    useEffect(() => {
      getproducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  
    const getproducts = async () => {
      let result = await fetch("http://localhost:5000/books",{
  
      headers:{
        authorization: `${JSON.parse(localStorage.getItem('token'))}`
      }
  
    })
      result = await result.json();
      
      if(result.data) { setProducts(result.data);}
      else{
        logOutUser()
      }
    };
       console.log("products", products)
  
    // const deleteProduct = async (id) => {
    //   let result = await fetch(`http://localhost:5000/books/${id}`, {
    //     method: "Delete",
    //     headers:{
    //       authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
    //     }
    //   });
    //   result = await result.json();
    //   console.warn(result)
  
    //   if (result.status===true) {
    //     alert(result.message);
    //     getproducts();
    //   }else{
    //     alert(result.message)
    //   }
    // };
  
    const searchHandle = async (e) => {
      let key = e.target.value;
      
      if (key) {
        let result = await fetch(`http://localhost:5000/searchbooks/${key}`,{
  
          headers:{
            authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        result = await result.json();
  
        if (result) {
          setProducts(result);
        }
      } else {
        getproducts();
      }
    };
  
    return (
      <>
      <div className="product-list">
        {/* <h2>Product list</h2> */}
        <input
          className="searchbox"
          type="text"
          placeholder="Search book"
          onChange={searchHandle}
        />
        </div>
  
        <div className="midlle">
        {
        products ? products.map((item, index) => (
          <ul key={index}>
            <li >
              {
                   
            <Card className='classcard56'>
            <Card.Img className='cardImg' variant="top" src={item.image} />
            <Card.Body>
              <Card.Title className='head'>{item.title.slice(0,20)}</Card.Title>
              <Card.Text>{item.excerpt.slice(0,20)}...</Card.Text>
              <Card.Title className='pric'>₹ {item.price}</Card.Title>
              <div className='butn'>
             
              {/* <Button className='cart-btn' onClick={()=>nav(`/users/${item._id}/cart`)} >Add To Cart</Button> */}
              <Button onClick={() => nav(`/view/${item._id}`)} className='cart-btn' >Review</Button>
              </div>
            </Card.Body>
          </Card>
         
   } </li>
          </ul>
        ))
        : <h1>No result found</h1>
        }
      </div>
      </>
    );
}

export default AllProduct
