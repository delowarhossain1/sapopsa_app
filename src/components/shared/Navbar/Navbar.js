import React, { useEffect, useState } from 'react';
import logo from "../../../images/logo/sapopsa.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { getProducts } from "../../../utilites/addToCard";
import { useQuery } from 'react-query';
import axios from 'axios';
import Menu from './Menu';

const Navbar = ({ refetch }) => {
    const navigate = useNavigate();
    // const [user] = useAuthState(auth);
    const [addToCardProducts, setaddToCardProducts] = useState(0);
    const [webHeading, setWebHeading] = useState({ heading: '', isDispaly: false });

    // Get add to card products
    useEffect(() => {
        const products = getProducts();
        setaddToCardProducts(products?.length);
    }, [refetch]);

    // Get web heading
    const getWebHeading = useQuery('nav-web-heading', () => (
        axios.get('/api/web-heading')
            .then(res => setWebHeading(res?.data))
    ));

    // Handle search
    const handleSearch = (event) => {
        event.preventDefault();

        const text = event.target.text.value;
        if (text?.length > 3) {
            navigate(`/search/${text}`);
        }
    }

    // Get cagories
    const { data: categories } = useQuery('nav-categories-list', () => (
        axios.get('/api/categories-list')
            .then(res => res?.data)
    ));


    return (
        <div>
            {/* Navbar heading */}
            <div className='p-2 bg-black text-white'>
                <marquee>{webHeading?.heading}</marquee>
            </div>

            {/* Menu */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">

                            <Menu title='Men' items={categories?.men} />
                            <Menu title='Women' items={categories?.women} />
                            <Menu title='Sports' items={categories?.sports} />

                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-12' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1 z-10">
                        <Menu title='Men' items={categories?.men} />
                        <Menu title='Women' items={categories?.women} />
                        <Menu title='Sports' items={categories?.sports} />
                    </ul>


                </div>
                <div className="navbar-end">
                    {/* Search bar */}
                    <div className='flex items-center space-x-3'>

                        <form onSubmit={handleSearch}>
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input input-bordered input-sm" name='text' />
                                    <button className="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </form>

                        <Link to='/add-to-card'>
                            <div className='flex cursor-pointer'>
                                <FiShoppingCart className='text-3xl' />


                                <span className=" bg-pink-900 p-1 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-[-10px]">{addToCardProducts}</span>

                            </div>
                        </Link>

                        <Link to='/login' className='text-xl cursor-pointer'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;