import React from 'react'
import ProductsAll from '../components/productsAll'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <ProductsAll/>
        <Footer/>
    </div>
  )
}

export default Home