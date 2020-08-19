import React from 'react';
import { DesktopNavbar } from './navbar/desktopNavbar';
import { DesktopSidebar } from './sidebar/desktopSidebar';
import '../App.css'
import { MobileNavbar } from './navbar/mobileNavbar';
import { MobileSidebar } from './sidebar/mobileSidebar';

const Layout = (props) => {
    return (
        <div>
            <div className='desktopNavbar'>
                <DesktopNavbar />
            </div>
            <div className='mobileNavbar'>
                <MobileNavbar />
            </div>
            <div className='desktopSidebar'>
                <DesktopSidebar />
            </div>
            <div className='mobileSidebar'>
                <MobileSidebar />
            </div>
            <div className='main_dashboard'>
                {props.children}
            </div>
        </div>
    )
}

export { Layout }