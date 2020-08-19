import React from 'react';
import { Layout } from '../components/layout';
import { chart, big_graph } from '../assets/index';
import './home.css'

const Home = () => {

    const items = [
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'reconcile'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'pending'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'reconcile'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'reconcile'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'pending'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'unreconcile'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'reconcile'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'unreconcile'
        },
        {
            type: 'Apple Mac Book 15” 250 SSD 12GB',
            price: '$73430',
            transactionNo: '1234567890',
            time: '12:30',
            status: 'pending'
        }
    ]
    return (
        <Layout>
            <div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='chart_ mtb_'>
                            <div>
                                <div className='small_desc'>Daily Transaction Volume</div>
                                <div className='big_desc'>2,342</div>
                            </div>
                            <img src={chart} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='chart_ mtb_'>
                            <div>
                                <div className='small_desc'>Daily Transaction Value</div>
                                <div className='big_desc'>₦4,000,000</div>
                            </div>
                            <img src={chart} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='chart_ mtb_'>
                            <div>
                                <div className='small_desc'>Total Transaction Volume</div>
                                <div className='big_desc'>452,000</div>
                            </div>
                            <img src={chart} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='chart_ mtb_'>
                            <div>
                                <div className='small_desc'>Total Transaction Value</div>
                                <div className='big_desc'>₦4,000,000</div>
                            </div>
                            <img src={chart} />
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-8 parRight'>
                        <div className='big_chart'>
                            <div className='big_chart_header'>
                                <div className='chart_date'>Today: 5, Aug 2018</div>
                                <div className='big_chart_nav'>
                                    <select>
                                        <option>1 Jan - 1 Jun</option>
                                    </select>
                                    <div className='chart_btn'>
                                        <button><i className='fas fa-angle-left'></i></button>
                                        <button><i className='fas fa-angle-right'></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className='chart_img'>
                                <div className='chart_big_num'>
                                    <div className='chart_num'>
                                        Jan
                                    </div>
                                    <div className='chart_num'>
                                        Feb
                                    </div>
                                    <div className='chart_num'>
                                        Mar
                                    </div>
                                    <div className='chart_num'>
                                        Apr
                                    </div>
                                    <div className='chart_num'>
                                        May
                                    </div>
                                    <div className='chart_num'>
                                        Jun
                                    </div>
                                </div>
                                <img src={big_graph} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 parLeft'>
                        <div className='side_chart'>
                            <div className='ord_name'>Orders</div>
                            <div className='color_prog'>
                                <div></div>
                                <div></div>
                            </div>
                            <div className='order_list'>Pending Orders: <span className='_yellow'>20</span></div>
                            <div className='order_list'>Reconcilled Orders: <span className='_green'>80</span></div>
                            <div className='order_list'>Total Orders: <span className='_blue'>100</span></div>
                        </div>
                        <div className='side_chart'>
                            <div className='ord_name'>Payments</div>
                            <div className='color_prog'>
                                <div></div>
                                <div></div>
                            </div>
                            <div className='order_list'>Un-reconcilled Payments: <span className='_yellow'>20</span></div>
                            <div className='order_list'>Reconcilled Payments: <span className='_green'>80</span></div>
                            <div className='order_list'>Total Payments: <span className='_blue'>100</span></div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 _pyheader'>Payments</div>
                <div className='row my-3 _tablehd'>
                    <div className='col-md-4 mtb_'>
                        <div className='desc_1'>
                            <span>Showing</span>
                            <select>
                                <option>20</option>
                            </select>
                            <span>
                                out of 500 payments
                            </span>
                        </div>
                    </div>
                    <div className='col-md-4 mtb_'>
                        <div className='desc_2'>
                            <i className='fas fa-search mySearch2'></i>
                            <input type='text' placeholder='Search payments' />
                        </div>
                    </div>
                    <div className='col-md-4 mtb_'>
                        <div className='desc_3'>
                            <span>Show</span>
                            <select>
                                <option>All</option>
                                <option>Reconcilled</option>
                                <option>Un-reconcilled</option>
                                <option>Settled</option>
                                <option>Unsettled</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Item Type</td>
                                    <td>Price</td>
                                    <td>Transaction No</td>
                                    <td>Time</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><button className='__circle'>vw</button>{item.type}</td>
                                                <td>{item.price}</td>
                                                <td>{item.transactionNo}</td>
                                                <td>{item.time}</td>
                                                {
                                                    item.status === 'reconcile' ? 
                                                    <td><button className='btn_ta reconcile_'>⬤ &nbsp;Reconcilled</button><i className='fas fa-angle-down'></i></td>
                                                    :
                                                    item.status === 'unreconcile' ?
                                                    <td><button className='btn_ta unreconcile_'>⬤ &nbsp;Un-reconcilled</button><i className='fas fa-angle-down'></i></td>
                                                    :
                                                    item.status === 'pending' ?
                                                    <td><button className='btn_ta pending_'>⬤ &nbsp;Pending</button><i className='fas fa-angle-down'></i></td>
                                                    : null
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mx-50'>
                    <div>Showing 1 to 10 of 500 entries</div>
                    <div>
                        <button>Previous</button>
                        <button>1</button>
                        <button>2</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export { Home }