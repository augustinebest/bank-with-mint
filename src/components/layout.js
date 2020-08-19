import React from 'react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import '../App.css'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className='main_dashboard'>
                {props.children}
            </div>
        </div>
    )
}

export { Layout }