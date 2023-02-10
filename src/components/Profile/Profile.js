
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Profile.css'

const Profile = () => {

  const [review, setReview] = useState([])
  
    let data = localStorage.getItem('data')
    data = JSON.parse(data)
   let id = data._id
  
    const nav = useNavigate()

  //   useEffect(()=>{
  //     getProduct()
     
  // },[])

    const getMyReview=async()=>{
      let  result= await fetch(`http://localhost:5000/getreview/${id}/review`,{
           headers:{
               authorization: `${JSON.parse(localStorage.getItem('token'))}`
             }
       });
           result=await result.json()

         setReview(result)
         
            console.warn(result)
   }

const deleteProduct=async(bookId, revId)=>{
  let result = await fetch(`http://localhost:5000/books/${bookId}/review/${revId}`, {
    method: "Delete",
    headers:{
      authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
  result = await result.json();
   console.warn(result)

  if (result.status===true) {
    alert(result.message);
    getMyReview()
  }else{
    alert(result.message)
  }
}
   
   const uprev=(id, bookId, name, rating, review)=>{
      let rev = {}
      rev.name=name
      rev.rating=rating
      rev.review=review
      localStorage.setItem('rev', JSON.stringify(rev))
       nav(`/update_review/${id}/review/${bookId}`)
    }
     


  return (

    <>
    <div className='profile1'>
      <img src={data.image} alt={data.name}/>
          <h3>{data.name}</h3>
          <article>  {data.email}</article>
          <p>{data.category}</p>
            <button className='but' onClick={()=>nav('/mybooks')}>My product</button>
            <button className='but' onClick={getMyReview}>My comment</button><br/>
            {/* <button className='but2' >My Cart</button> */}
      
    </div>



 
    
    <div className="scrl1">
  
      {
        
       
       review.length>0 ? review.map((item, index) => (
        <ul key={index}>
          <li >
            {
             
             <div className='cardrev1' >
              <div className='ime'>
             <img src={item.bookImage} alt={item.bookName}/>
              </div>
              <div className='rests'>
             <h2>{item.bookName}</h2>
             <article>{item.review.slice(0,20)}...</article>
             <h5>Rating</h5>
             <h4>{item.rating} ★</h4>
             
             <button className="cart-btnts"  onClick={() => deleteProduct( item.bookId, item._id, )}>Delete</button>
             <button className="cart-btnts" onClick={()=>uprev(item._id, item.bookId, item.name, item.rating, item.review)} >Update</button>
              </div>
             </div>
       
 } </li>
        </ul>
      ))

      
      : <h1></h1>
      }

    </div>




</>
  )
}

export default Profile
