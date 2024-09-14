import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <ul className='flex justify-center gap-5 '>
        <Link href={'/about'}>Projects</Link>
        <Link href={'/skills'}>skills</Link>
        <Link href={'/contact'}>Contact Me</Link>
      </ul>
    </div>
  )
}

export default Navbar
