import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl px-5 sm:px-10 py-2'>
        <div className='w-10 h-10 md:h-14 md:w-14'><Image src="/logo.png" width={100} height={100} alt='logo'/></div>
        <div></div>
    </div>
  )
}

export default Navbar