import React from 'react';
import '../component.css';
import { overview, wallet, wallet2, wallet3, circle, order1, order2, order3, user, notification, avatar } from '../../assets/index';

const MobileSidebar = (props) => {
    let classes = 'mobile_side';
    if (props.status) {
        classes += ' open_'
    }
    return (
        <div className={classes}>
            <div>
                <div className='mob_desc'>
                    <div>
                        <div className='__name'>Hello Oluwaleke Ojo</div>
                    </div>
                    <div className='mob_prof'>
                        <div className=''>
                            <img className='' src={avatar} />
                        </div>
                        <div><img src={notification} /></div>
                    </div>
                    <div className='mobile_link'>
                        <div>Support</div>
                        <div>FAQ</div>
                    </div>
                    <div className='mob_search'>
                        <i className='fas fa-search'></i>
                        <input type='text' placeholder='Search' />
                    </div>
                </div>
                <div className='mx100'>
                    <button className='m_btn'>GENERATE INVOICE</button>
                </div>
                <ul>
                    <div className='main_'>Main</div>
                    <li className='active'><img src={overview} />Overview</li>
                    <div className='payment_'>Payments</div>
                    <li><img src={wallet} />All Payments</li>
                    <li><img src={wallet2} />Reconcilled Payments</li>
                    <li><img src={wallet3} />Un - Reconcilled Payments</li>
                    <li><img src={circle} />Manual Settlement</li>
                    <div className='order_'>Orders</div>
                    <li><img src={order1} />All Orders</li>
                    <li><img src={order2} />Pending Orders</li>
                    <li><img src={order3} />Reconcilled Orders</li>
                    <li className='mt-4'><img src={user} />Merchant Profile</li>
                </ul>
            </div>
        </div>
    )
}

export { MobileSidebar }