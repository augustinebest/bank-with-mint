import React, { useState } from 'react';
import { DesktopNavbar } from './navbar/desktopNavbar';
import { DesktopSidebar } from './sidebar/desktopSidebar';
import '../App.css'
import { MobileNavbar } from './navbar/mobileNavbar';
import { MobileSidebar } from './sidebar/mobileSidebar';

const Layout = (props) => {
    const [ status, setStatus] = useState(false);
    return (
        <div>
            <div className='desktopNavbar'>
                <DesktopNavbar />
            </div>
            <div className='mobileNavbar'>
                <MobileNavbar click={() => {setStatus(!status)}} status={status} />
            </div>
            <div className='desktopSidebar'>
                <DesktopSidebar />
            </div>
            <div className='mobileSidebar'>
                <MobileSidebar status={status} />
            </div>
            <div className='main_dashboard'>
                {props.children}
            </div>
        </div>
    )
}

export { Layout }