import React, { useState } from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Loading from '../../shared/Loding/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';


const Home = () => {
    const navigate = useNavigate();


    // Sliders
    const { data: sliders, isLoading: sliderLoading } = useQuery('sliders', () => (
        axios.get('/api/sliders')
            .then(res => res?.data)
    ));

    // Categories
    const {data:categories, isLoading: categoriesLoading} = useQuery('homepage-categories', ()=>(
        axios.get('/api/categories')
        .then(res => res?.data) 
    ));

    // Latest products
    const { data: latestProducts, isLoading: latestProductsLoading } = useQuery('latest-products', () => (
        axios.get('/api/latest-products')
            .then(res => res?.data)
    ));

    // Set loading status
    if(sliderLoading || categoriesLoading || latestProductsLoading){
        return <Loading />
    }

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


            {/* Categories  */}

            <div className='mt-3'>
                <div className='p-2 bg-black text-center'>
                    <h1 className=' text-4xl text-white'>FIND YOUR COICE</h1>
                </div>

                {/* display all categories */}
                <div className='grid grid-cols-6 gap-5 mt-3'>
                    {
                        categories?.map(category => (
                            <CategoryCard 
                                key={category._id}
                                category={category}
                            />
                        ))
                    }
                </div>
            </div>


            {/*  */}

        </div>
    );
};

export default Home;