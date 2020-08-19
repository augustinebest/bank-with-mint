import React from 'react';

const MobileNavbar = (props) => {
    return (
        <div className='mobile_nav'>
            <div className='logo_'>TransMonitor</div>
            <>
                {
                    !props.status ?
                        <div onClick={props.click}><i className='fas fa-bars hamburger'></i></div>
                        :
                        <div onClick={props.click}><i className='fas fa-times hamburger'></i></div>
                }
            </>
        </div>
    )
}

export { MobileNavbar };