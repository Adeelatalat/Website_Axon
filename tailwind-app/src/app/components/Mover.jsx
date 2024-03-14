'use client'

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import React from 'react'

const Mover = () => {
  return (

    <div >
        <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
       <SwiperSlide ><img src='/assets/axon1.jpg'  /><p className='first' style={{marginTop:"-450px" , marginLeft:"150px", fontSize:"23px"}} >BEHIND THE COLLECTION
       </p><h1 style={{marginLeft:"148px", fontSize:"37px", fontWeight:"bold", marginTop:"10px"}}>TERRY WEBB - FRANCO' DESIGNER</h1>
       <p style={{marginLeft:"150px",fontSize:"21px", marginTop:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing  <br /> eveniet voluptatem architecto</p>
       <button style={{backgroundColor:"#7CB9E8" , height:"40px", width:'120px', marginTop:"30px", marginLeft:"145px"}}>Show Now!</button>
       
       </SwiperSlide>
        <SwiperSlide className='common'><img src='/assets/axon2.jpg'/>
        <p style={{marginTop:"-450px" , marginLeft:"860px", fontSize:"23px"}} className='	transform: translateY(0.125rem);' >BEHIND THE COLLECTION
       </p><h1 style={{marginLeft:"530px", fontSize:"37px", fontWeight:"bold", marginTop:"10px"}}>TERRY WEBB - FRANCO' DESIGNER</h1>
       <p style={{marginLeft:"655px",fontSize:"21px", marginTop:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing   </p><p style={{marginLeft:"875px",fontSize:"21px"}}>eveniet voluptatem architecto</p>
       <button style={{backgroundColor:"#7CB9E8" , height:"40px", width:'120px', marginTop:"30px", marginLeft:"1050px"}}>Show Now!</button>
       
        </SwiperSlide>
       
      </Swiper>

    </div>
  )
}

export default Mover
