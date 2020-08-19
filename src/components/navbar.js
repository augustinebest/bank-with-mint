import React from 'react';
import './component.css';
import notification from '../assets/notification.svg';
import avatar from '../assets/avatar.png';

const Navbar = () => {
    return (
        <div className='myNavbar'>
            <div className='logo_'>TransMonitor</div>
            <form className='search_form'>
                <i className='fas fa-search mySearch'></i>
                <input type='text' placeholder='Search' />
            </form>
            <ul className='myNavigation'>
                <li>Support</li>
                <li>FAQ</li>
                <li><img src={notification} /></li>
                <li>
                    <div>Hello</div>
                    <div className='name_'>Oluwaleke Ojo</div>
                </li>
                <li className='ava_'>
                    <img className='avatar_' src={avatar} />
                </li>
            </ul>
        </div>
    )
}

export { Navbar };