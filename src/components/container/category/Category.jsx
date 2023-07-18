import React from 'react'
import CategoryBtn from './btn/CategoryBtn'

export default function Category() {
  return (
    <section className='mt-10'>
      <h2 className='font-bold text-3xl text-center w-full '>
        Popular categories 
        <ul>
          <li> <CategoryBtn icon='/images/category/.png'/></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </h2>
    </section>
  )
}
