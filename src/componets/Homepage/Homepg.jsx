import React from 'react'
import Header from '../utility/Header'
import Slider from './Slider'
import Sliderimg from './Sliderimg'
import Product from '../Admin/Product'
import Footer from '../Admin/Footer'
import About from '../utility/About'

function Homepg() {
    return (
        <>
            <Header />
            <Sliderimg />
            <Slider />
            <Product/>
            <About/>
            <Footer/>
          
        </>
    )
}

export default Homepg
