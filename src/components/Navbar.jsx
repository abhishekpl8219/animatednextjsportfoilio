import React from 'react'
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      Navbar
      <div>
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'></Link>
        <span className='mr-1'> 
         Rappy
        </span>
        <span className='w-12 h-8 rounded bg-white text-black flex items-center'> .Dev</span>
      </div>
    </div>
  )
}
