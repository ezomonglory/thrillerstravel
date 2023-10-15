import Image from 'next/image'
import React from 'react'

const SidebarLink = ({icon, text}) => {
  return (
    <div className='flex space-x-[8px] items-center ' >
        {/* <Image className="w-[24px] h-[24px] bg-red-500 "  /> */}
        {/* <div className='w-[24px] h-[24px] bg-blue-400 ' >        

        </div> */}

    {icon}

        <h1 className='text-gray-500' >{text}</h1>
    </div>
  )
}

export default SidebarLink