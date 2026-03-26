import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './componets/utility/Signup';
import Login from './componets/utility/Login';
import Slider from './componets/Homepage/Slider';
import Homepg from './componets/Homepage/Homepg';
import Header from './componets/utility/Header';
import Sliderimg from './componets/Homepage/Sliderimg';
import Createproduct from './componets/Admin/Createproduct';
import Product from './componets/Admin/Product';
import AddToCart from './componets/Admin/AddToCart';
import ProductDetails from './componets/Admin/ProductDetails';
import Blogs from './componets/utility/Blogs';
import SliderDaata from './componets/Homepage/SliderDaata';
import AllProducts from './componets/Admin/AllProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepg />}></Route>
          <Route path='/Singup' element={<Signup />}></Route>
          <Route path='/Header' element={<Header />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Slider' element={<Slider />}></Route>
          <Route path='/Sliderimg' element={<Sliderimg />}></Route>
          <Route path='/Createproduct' element={<Createproduct />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/AddToCart' element={<AddToCart />}></Route>
          <Route path='/ProductDetails/:id' element={<ProductDetails />}></Route>
          <Route path='/Blogs' element={<Blogs />}></Route>
          <Route path='/SliderDaata/:category' element={<SliderDaata />}></Route>
          <Route path="/admin/Allproduct" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
