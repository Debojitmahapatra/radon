
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignUp from './components/SignUp/SignUp';
import PrivateComponent from './components/Private/PrivateComponent';
import Login from './components/Login/Login'
import AddProduct from './components/AddProduct/AddProduct';
import AllProduct from './components/All_product/AllProduct'
import Profile from './components/Profile/Profile';
import ProductList from './components/ProductList/ProductList';
import Updateproduct from './components/Update_product/UpdateProduct';
import AddReview from './components/Review/AddReview/AddReview';
import Review from './components/Review/Review'
import UpdateReview from './components/Review/UpdateReview/UpdateReview';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            {/* <Route path='/' element={<h1>hello i am product</h1>}/>
            <Route path='/add' element={<h1>add your product</h1>} />   */}
            <Route path='/mybooks' element={<ProductList/>}/>
            <Route path='/' element={<AllProduct/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<Updateproduct/>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/view/:id' element={<Review/>} />
            <Route path='/add_review/:id' element={<AddReview/>} />
            <Route path='/update_review/:bookId/review/:userId' element={<UpdateReview/>} />

          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;