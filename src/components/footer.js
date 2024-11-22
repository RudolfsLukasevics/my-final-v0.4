import React from 'react'
import SectionTitle from './sectionTitle'
import { FaRegCopyright } from "react-icons/fa6";


const footer = () => {
  return (
    <footer>
<div>
  <SectionTitle/>
  <div className='flex justify-between items-center mb-5'>
    <article>
<p className=' pl-5 font-bold'>
    My contact information:
    </p>
    <p className=' pl-5'>
    rlukasevics@coa.edu
    </p>
    <p className=' pl-5'>
    +1-207-881-97-00
     </p>
     </article>
     <article>
        <>Copyright © 2024 Rudy's Consulting LLC. All rights reserved.</>
   
     </article>
     <article>
Thank you Shaiah for support
     </article>
    
     </div>
</div>
    </footer>
  )
}

export default footer