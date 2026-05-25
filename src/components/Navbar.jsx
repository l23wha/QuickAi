import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import "../index.css"

const Navbar = () => {

  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (

    <div className='fixed top-0 left-0 z-50 w-full bg-white flex items-center justify-between px-6 sm:px-20 py-4'>

      <img
        src={assets.logo}
        alt="Logo"
        className='w-32 sm:w-44 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {
        user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className='flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-2 cursor-pointer'
          >
            Get Started
            <ArrowRight className='w-4 h-4' />
          </button>
        )
      }

    </div>
  )
}

export default Navbar
