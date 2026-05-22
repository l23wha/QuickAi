import React, { use } from 'react'
import { useClerk, useUser } from '@clerk/clerk-react';


const Sidebar = ({sidebar,setSidebar}) => {
      const {user}=useUser();
       const {signOut,openUserProfile} = useClerk();
  return (
   <div
  className={`w-60 bg-white border-r border-gray-200 min-h-screen
  flex flex-col justify-between
  max-sm:absolute top-14 bottom-0
  ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}
  transition-all duration-300 z-20`}
>

  <div>

    {/* Profile Section */}
    <div className='flex flex-col items-center mt-8'>

      <img
        src={user?.imageUrl}
        alt=''
        className='w-16 rounded-full'
      />

      <h1 className='mt-2 text-base font-medium'>
        {user?.fullName}
      </h1>

    </div>

    {/* Menu Section */}
    <div className='mt-10'>

      

    </div>

  </div>

</div>
  )
}

export default Sidebar
