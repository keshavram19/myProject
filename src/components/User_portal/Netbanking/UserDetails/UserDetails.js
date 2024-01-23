import React from 'react'
import './UserDetails.css'

function Userdetails() {
    return (
        <div>
            <div class="container userContainer">
                <div className=''>
                    
                    <div className=''>
                        <div class="name">Kavati Deepak Kumar</div>
                        <div className='d-flex'>
                            <div class="icon">
                                <i class="fa-solid fa-user" style={{ fontSize: "40px" }}></i>
                            </div>
                            <div class="buttons d-flex column">
                                <button class="details_btn">PERSONAL DETAILS</button>
                                <button class="details_btn">GENERATE CARD PIN</button>
                            </div>
                        </div>

                        <div class="date">Last visited 12.01.2024 14:44:03 IST</div>
                    </div>
                    <div className='col-8'>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Userdetails
