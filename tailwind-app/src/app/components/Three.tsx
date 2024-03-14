import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
const Three = () => {
  return (
    <div className='bg-white h-8'>
        <div style={{paddingLeft:"130px", display:"flex" , alignItems:"center" , marginTop:"20px"}}>
<FaPaperPlane  style={{color:"#0096FF"}} />
<p style={{marginLeft:"13px", fontSize:'14px'}}><b>NO LIMITED</b></p>
<p style={{marginLeft:"13px"}}>|</p>
<p style={{marginLeft:"13px",fontSize:"14px"}} className='text-slate-400'>WorldWide fee Shipping</p>
<MdRefresh style={{marginLeft:"50px" ,color:"#0096FF", fontSize:"24px"}} />
<p style={{marginLeft:"17px",fontSize:'14px'}}><b>MONEY BACK</b></p>
<p style={{marginLeft:"13px"}}>|</p>
<p style={{marginLeft:"13px",fontSize:"14px"}} className='text-slate-400'>Seven days money back guarantee</p>
<FaHeadphones style={{marginLeft:"50px" ,color:"#0096FF", fontSize:"24px"}} />
<p style={{marginLeft:"17px",fontSize:'14px'}}><b>SAFETY</b></p>
<p style={{marginLeft:"13px"}}>|</p>
<p style={{marginLeft:"13px",fontSize:"14px"}} className='text-slate-400'>We never share your individual info</p>

</div>
    </div>
  )
}

export default Three
