import React from 'react'
import './FavouriteActivities.css'
import OverviewSidebar from '../../Sidebar/OverViewSidebar'

const FavouriteActivities = () => {
    return (
        <>
            <div className='container-fluid' style={{ marginTop: "90px" }}>
                <div className='row'>
                    <div className='col-3'>
                        <OverviewSidebar />
                    </div>
                    <div className='col-9'>
                        <div className="container">
                            <h2 style={{ color: "orange" }}>Edit my Profile: Favourite Activities</h2>
                            <p>Select a module to add your favourite Activity: PAYMENTS & TRANSFER.</p>

                            <div className="activities">
                                <div className="all-activities">
                                    <h3>Activities</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                
                                            <th><input type="checkbox" /></th>
                                                <th>List of Activities</th>
                                                <th>Type of Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>Buy / Recharge Fastag</td>
                                                <td>Non-Financial</td>

                                            </tr>
                                            <tr>
                                                
                                            <td><input type="checkbox" /></td>
                                                <td>Bill Payment</td>
                                                <td>Financial</td>
                                            </tr>
                                            <tr>
                                                
                                            <td><input type="checkbox" /></td>
                                                <td>Transfer Funds</td>
                                                <td>Financial</td>
                                            </tr>
                                            <tr>
                                                
                                            <td><input type="checkbox" /></td>
                                                <td>Mobile Recharge</td>
                                                <td>Non-Financial</td>
                                        
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='d-flex flex-column justify-content-evenly'>
                                    <button>
                                        left
                                    </button>
                                    <button>
                                       right
                                    </button>
                                </div>
                                <div className="favourite-activities">
                                    <h3>Favourite Activities</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                            <th><input type="checkbox" /></th>

                                                <th>List of Activities</th>
                                                <th>Type of Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>Bank Accounts</td>
                                                <td>Non-Financial</td>
                                               
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>Mobile Recharge</td>
                                                <td>Non-Financial</td>
                             
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                           

                            <button style={{ backgroundColor: "orange", color: "white", padding: "10px", borderRadius: "5px", border: "none" }}>UPDATE</button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FavouriteActivities
