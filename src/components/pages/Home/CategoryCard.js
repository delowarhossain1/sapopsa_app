import React from 'react';
import { Navigate } from 'react-router-dom';

const CategoryCard = ({category = {}}) => {
    const {route, img, title} = category;

    return (
        <div 
            className='p-2 border'
            onClick={() => Navigate(`/category/${route}`)}
        >
            <img src={img} alt='category' className='mx-full' />
            <h4 className=' bg-orange-600 text-white text-center'>{title}</h4>
        </div>
    );
};

export default CategoryCard;