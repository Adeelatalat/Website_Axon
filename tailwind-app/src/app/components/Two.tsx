import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import Link from 'next/link';

const Two = () => {
  return (
    <div>
        <header className='bg-blue-950 flex items-center gap-14'  style={{height:"120px", paddingLeft:"160px", color:"white"}}>
            <div style={{color:"#0096FF", fontSize:"28px",paddingLeft:"20px"}}>

        <FaSearch   /></div>
       
        <Link href={"/"}>HOME</Link>
        <Link href={"/footware"}>FOOTWARE</Link>
        <Link href={"/mens"}>MEN'S</Link>
<img src="/assets/Axon.png" alt="" />
<Link href={"/seamles"}>SEAMLES</Link>
        <Link href={"/women"}>WOMEN</Link>
        <Link href={"/pages"}>PAGES</Link>
        <FaShoppingBasket  style={{fontSize:"34px", color:"#0096FF"}}/>
        
        </header>
      
    </div>
  )
}

export default Two
