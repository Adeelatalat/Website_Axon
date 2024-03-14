import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import Select from "./Select"
import { FaUserAlt } from "react-icons/fa";
import Account from './Account';
const One = () => {
  return (
    <div className='bg-white h-8'>
        <div className=' mx-12 flex items-center justify-items-center'>
      <FaPhoneAlt className=' text-green-500' />
      <p className='text-slate-400 text-xs'>(+64)12355464</p>
      <div className='text-slate-400 mx-12'>|</div>
      <div className='flex items-center text-slate-400 text-xs'><MdEmail  className='text-green-500' /> axontheme@gmail.com</div>
      <div  style={{marginLeft:"600px"}} className='flex items-center text-green-500 text-xs'>
      <IoMdGlobe />
      <Select/>
      <div className='text-slate-400 mx-12'>|</div>
      </div>
<div className='flex items-center text-xs'>
<FaUserAlt className='text-green-500'/>
<Account/>
</div>
      </div>
  
    </div>
  )
}

export default One
