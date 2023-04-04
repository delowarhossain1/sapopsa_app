import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ title = '', items = []}) => {
    return (
        <li tabIndex={0}>
            <a>
                {title}
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2">
                {
                    items?.map(category => (
                        <li
                            key={category?._id}
                            className='menuItem'
                        >
                            <Link to={`category/${category.route}`}>{category?.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    );
};

export default Menu;