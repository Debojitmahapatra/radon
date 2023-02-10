import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Sign.css'
function SignUp() {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPass] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const navigate = useNavigate()
    
    async function getAllData() {
        console.log({ title, name, image, email, phone, password, address: { street, city, pincode } });
        let data = { title, name, image, email, phone, password, address: { street, city, pincode } }
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result);
        if (result.status===true) {
           navigate('/login')
        }else{
            alert(result.message)
        }
    }
    return (
        <div className='register'>
            <h1>SIGN UP</h1>
            <input className="input-box" type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
            <input className="input-box" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="input-box" type='text' value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Image" />
            <input className="input-box" type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="input-box" type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />
            <input className="input-box" type='text' value={password} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
            <h2>Address :</h2>
            <input className="input-box1" type='text' value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street" />
            <input className="input-box1" type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
            <input className="input-box1" type='text' value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Enter Pincode" />
            <button onClick={getAllData} className='register-button' type='button'>sign up</button>
        </div>
    )
}
export default SignUp