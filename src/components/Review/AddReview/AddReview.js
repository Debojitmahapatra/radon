
import {  useState } from 'react'
import { useParams } from 'react-router-dom'

const AddReview=()=>{

    const [name, setName]= useState('')
    const [rating, setRating]= useState('')
    const [review, setReview]= useState('')
   
    const params = useParams()
    let userId = localStorage.getItem('data')
    userId= JSON.parse(userId)
    userId=userId._id

    // useEffect(()=>{
    //     createComment()
    // },[])

    const createComment = async()=>{
        let result = await fetch(`http://localhost:5000/books/${params.id}/review`,{
            method: 'post',
            body: JSON.stringify({name, rating, review, userId }),
            headers:{
                'Content-Type':'application/json',
                authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result= await result.json()
        console.warn(result.status)

        if(result.status===true){
            alert(result.message)
            setName('')
            setRating('')
            setReview('')
        }else{
            alert(result.message)
        }
       }


    return(
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
            

            <button onClick={createComment} className="btn">Add review</button>
        </div>
    )
}


export default AddReview