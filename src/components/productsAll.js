import React from 'react'
import ProductCart from '../components/productCart'
import SectionTitle from '../components/sectionTitle'
import { products } from '../products'

const productsAll = () => {
  return (
    <div>
        <SectionTitle text="Services"/>
        <div className='grid pt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default productsAll