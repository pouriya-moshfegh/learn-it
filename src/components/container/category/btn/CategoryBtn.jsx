import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function CategoryBtn({icon}) {
  return (
    <Link href='#' className='bg-orange_c px-6 py-2 w-max text-white flex items-center text-sm'>
        <Image width={24} height={24} 
            alt="a nice photo"
            src="/icons/category/design.png" />
            design

    </Link>
  )
}
