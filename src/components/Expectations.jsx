import React from 'react';
import Exp from '../assets/PSD_013.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination]);

function Expectations() {
  return <div className='w-[90%] mx-auto p-8'>
      <h2 className='text-5xl my-8'>Exceeding <br /> Expectations</h2>
      <Swiper spaceBetween={30} pagination={{
        "clickable": true
        }} className="mySwiper">
        <SwiperSlide><div className='w-full flex items-center justify-center'>
            <div>
                <div className=''>
                    <img src={Exp} alt="exp"/>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl mt-4'>Websites</h2>
                    <p className='mb-6'>Solutions that will wow your users</p>
                </div>
            </div>
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full flex items-center justify-center'>
            <div>
                <div className=''>
                    <img src={Exp} alt="exp"/>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl mt-4'>Websites</h2>
                    <p className='mb-6'>Solutions that will wow your users</p>
                </div>
            </div>
        
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full flex items-center justify-center'>
            <div>
                <div className=''>
                    <img src={Exp} alt="exp"/>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl mt-4'>Websites</h2>
                    <p className='mb-6'>Solutions that will wow your users</p>
                </div>
            </div>
        
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full flex items-center justify-center'>
            <div>
                <div className=''>
                    <img src={Exp} alt="exp"/>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl mt-4'>Websites</h2>
                    <p className='mb-6'>Solutions that will wow your users</p>
                </div>
            </div>
        
            </div></SwiperSlide>
        </Swiper>
  </div>;
}

export default Expectations;
