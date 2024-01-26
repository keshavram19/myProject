import React from 'react';
import './FavouriteActivities.css'
import OverviewSidebar from '../../Sidebar/OverViewSidebar'

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const activities = [
    {
        listOfActivities: 'Buy/Recharge Fastag',
        typeOfActivity: 'Non-Financial'
    },
    {
        listOfActivities: 'Financial Journey',
        typeOfActivity: 'Non-Financial'
    },
    {
        listOfActivities: 'Pay Bills',
        typeOfActivity: 'Financial'
    },
    {
        listOfActivities: 'Fund Transfer',
        typeOfActivity: 'Financial'
    },
    {
        listOfActivities: 'Tax Center',
        typeOfActivity: 'Non-Financial'
    },
    {
        listOfActivities: 'Favourities',
        typeOfActivity: 'Non-Financial'
    },
    {
        listOfActivities: 'Quick Pay',
        typeOfActivity: 'Financial'
    },
    {
        listOfActivities: 'My Transactions',
        typeOfActivity: 'Financial'
    },
    {
        listOfActivities: 'Manage Payees',
        typeOfActivity: 'Financial'
    }
];

const FavouriteActivities = () => {

    const [favouriteActivities, setFavouriteActivities] = useState([]);
    const [activity, setActivity] = useState('')
    const handleCheckboxChange = () => {
        const isSelected = favouriteActivities.includes(activity);

        if (isSelected) {
            setFavouriteActivities(favouriteActivities.filter(selected => selected !== activity));
        }
        else {
            setFavouriteActivities([...favouriteActivities, activity]);
        }
    }

    

    return (
        <>
            <div className='container-fluid' style={{ marginTop: "90px" }}>
                <div className='row'>
                    <div className='col-3'>
                        <OverviewSidebar />
                    </div>
                    <div className='col-9'>
                        <div className="container">
                            <div className='fav_activity_editmy_profile'>Edit My Profile: Favourite Activities</div>
                            <div className='d-flex align-items-center my-2'>
                                <div>Select a module to add your favourite activity: </div>
                                <div className='ml-3'>
                                    <select required className='fav_activity_payments_transfer_dropdown'>
                                        <option value=''>PAYMENTS & TRANSFER</option>
                                    </select>
                                </div>
                                <div className='ml-3'>
                                    <button className='fav_activity_search_btn'>SEARCH</button>
                                </div>
                            </div>
                            <div>
                                Choose upto 15 favourite activities. Select an account and use the arrow button to move them around.
                                Click Update button to confirm.
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div>Activities</div>
                                    <div>
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th><MdOutlineCheckBoxOutlineBlank /></th>
                                                    <th>List of Activities</th>
                                                    <th>Type of Activity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activities.map((eachActivity, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <input type='checkbox'
                                                                onClick={()=>setActivity(eachActivity)}                                                            >
                                                            </input>
                                                        </td>
                                                        <td>{eachActivity.listOfActivities}</td>
                                                        <td>{eachActivity.typeOfActivity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <button ><MdKeyboardArrowLeft /></button>
                                    </div>
                                    <div>
                                        <button onClick={handleCheckboxChange}><MdKeyboardArrowRight /></button>
                                    </div>
                                </div>

                                <div>
                                    <div>Favourite Activities</div>
                                    <div>
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th><MdOutlineCheckBoxOutlineBlank /></th>
                                                    <th>List of Activities</th>
                                                    <th>Type of Activity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    favouriteActivities.map((selectedActivity, index) => (
                                                        <tr>
                                                            <td>
                                                                <input type='checkbox'></input>
                                                            </td>
                                                            <td>{selectedActivity.listOfActivities}</td>
                                                            <td>{selectedActivity.typeOfActivity}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FavouriteActivities;