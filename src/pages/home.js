import React from 'react'
import ProductsAll from '../components/productsAll'
import Hero from '../components/hero'
import About from '../components/about'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <ProductsAll/>
    </div>
  )
}

export default Home