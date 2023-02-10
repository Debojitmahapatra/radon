import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateReview() {

    const params = useParams()
    let nav = useNavigate()
    let revData = localStorage.getItem('rev')
     revData= JSON.parse(revData)

    const [name, setName]= useState(revData.name)
    const [rating, setRating]= useState(revData.rating)
    const [review, setReview]= useState(revData.review)
   
   

    // useEffect(()=>{
    //     updateComment()
    // },[])

    const updateComment = async()=>{
        // setName(revData.name)
        let result= await fetch(`http://localhost:5000/books/${params.userId}/review/${params.bookId}`,{
            method:"Put",
            body: JSON.stringify({name, rating, review }),
            headers:{
                'Content-Type':'application/json',
                authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result= await result.json()
        console.warn(result.status)

        if(result.status===true){
            alert(result.message)
            localStorage.removeItem('rev')
            setName('')
            setRating('')
            setReview('')
            nav('/profile')
        }else{
            alert(result.message)
        }
       }


  return (
    <div className="box" >
            <h1>Add review</h1>

            <input type='text' placeholder="Enter your name" className="inputProduct"
           value={name} onChange={(e)=>{setName(e.target.value)}}
            />
          

           <input type='text' placeholder="Enter your rating between 1 to 5" className="inputProduct"
           value={rating} onChange={(e)=>{setRating(e.target.value)}}
            />
         
            <input type='text' placeholder="Enter your feedback" className="inputProduct"
           value={review} onChange={(e)=>{setReview(e.target.value)}}
            />
            

            <button onClick={updateComment} className="btn">Update review</button>
        </div>
  )
}

export default UpdateReview
