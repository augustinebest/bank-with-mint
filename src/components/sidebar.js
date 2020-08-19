import React from 'react';
import './component.css';
import { overview, wallet, wallet2, wallet3, circle, order1, order2, order3, user } from '../assets/index';

const Sidebar = () => {
    return (
        <div className='mySidebar'>
            <div className='mx100'>
                <button>GENERATE INVOICE</button>
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
    )
}

export { Sidebar }