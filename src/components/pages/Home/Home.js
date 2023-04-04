import React, { useState } from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Loading from '../../shared/Loding/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
    // Sliders
    const { data: sliders, isLoading } = useQuery('sliders', () => (
        axios.get('/api/sliders')
            .then(res => res?.data)
    ));

    return (    
        <div>
            <PageTitle text='Home' />

            {/* Sliders */}
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        sliders?.map(slider => (
                            <SwiperSlide
                                key={slider?._id}>
                                <img src={slider?.img} alt="slider" />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>


            {/*  */}

        </div>
    );
};

export default Home;