import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
    let data = localStorage.getItem('data')
    data = JSON.parse(data)
    const navigate = useNavigate()

    const logout=()=>{
        localStorage.clear()
        navigate('/signup')
    }
    
    return (
        <div>
            <img
                className='logoStyle'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VSvR9cAIBp_sgu_tofOXvVAXOy9cn3WZNQ&usqp=CAU" alt="logo" />
           
           <p className='titleStyle'>Book_Shop</p>
     {
        data ? <ul className='nav-ul'>
            <li><Link to='/'>Book List</Link></li>
            <li><Link to='/add'>Add Book</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          
            <li> <Link onClick={logout} to='/signup'>Logout [{data.name}]</Link> </li>            
        </ul>
                :
                <ul className='nav-ul nav-right'>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
          }
        </div>
    )
}
export default Nav