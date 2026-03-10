import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <div className='flex justify-between px-10 items-center bg-gray-300'>
            {/*logo */}
            <img className='py-2 rounded-[50%]' width="80px" src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg" alt="" />
            {/*ul of links */}
            <ul className='flex gap-10 '>
                <li>
                    <NavLink to="" className={({isActive})=>(isActive?"text-blue-100 bg-blue-500":"")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="products" className={({isActive})=>(isActive?"text-blue-100 bg-blue-500":"")}>ProductsList</NavLink>
                </li>
                <li>
                    <NavLink to="contact" className={({isActive})=>(isActive?"text-blue-100 bg-blue-500":"")}>ContactUs</NavLink>
                </li>
            </ul>
    </div>
    )
}

export default Header