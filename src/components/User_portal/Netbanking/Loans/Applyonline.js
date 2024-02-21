
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const ApplyOnline = ()=>{
    return(<div className="container-fluid">
    <h4 className='applyonline_mainheading'>Apply Online</h4>
    <hr/>
    <div className='applyonline_maincontainer'>
        <div className='applyonline_heading'>
             Offers For You<span className="badge  applyonline_badge">4</span>
        </div>
        <div className=" applyonline_mainrow">
        <div className='row '>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='applyonline_headcontent'>
                        <div className='mr-2'><FaCreditCard className='applyonline_icons'/></div>
                        <div>Credit Card</div>
                    </div>
                    <div className='applyonline_bodycontent'>
                        <p>Get a feature-packed ROYAL ISLAMIC Bank credit card on the fly</p>
                    </div>
                    <div className='applyonline_divbutton'>
                        APPLY NOW
                    </div>
                </div>

            </div>
            <div className='col-md-3'>
                <div className='card'>
                <div className='applyonline_headcontent'>
                        <div className='mr-2'><HiOutlineCurrencyRupee className='applyonline_icons'/></div>
                        <div>Personal Loan</div>
                    </div>
                    <div className='applyonline_bodycontent'>
                        <p className='applyonline_para1'>Click on Apply now to get an instant approval on personal loan application</p>
                        <button className='applyonline_knowbtn'>Know more<IoIosArrowForward/></button>
                    </div>
                    <div className='applyonline_divbutton'>
                        APPLY NOW
                    </div>
                </div>

            </div>
            <div className='col-md-3'>
                <div className='card'>
                <div className='applyonline_headcontent'>
                        <div className='mr-2'><IoHomeOutline className='applyonline_icons'/></div>
                        <div>Home Loan</div>
                    </div>
                    <div className='applyonline_bodycontent'>
                        <p className='applyonline_para1'>Get an online sanction in 5 simple-steps Home Loan</p>
                        <button className='applyonline_knowbtn'>Know more<IoIosArrowForward/></button>
                    </div>
                    <div className='applyonline_divbutton'>
                        APPLY NOW
                    </div>
                </div>

            </div>
            <div className='col-md-3'>
                <div className='card'>
                <div className='applyonline_headcontent'>
                        <div className='mr-2'><FaCarAlt className='applyonline_icons'/></div>
                        <div>Car Loan</div>
                    </div>
                    <div className='applyonline_bodycontent'>
                        <p className='applyonline_para1'>Click on Apply now to get a quick approval on Car Loan application</p>
                        <button className='applyonline_knowbtn'>Know more<IoIosArrowForward/></button>
                    </div>
                    <div className='applyonline_divbutton'>
                        APPLY NOW
                    </div>
                </div>

            </div>

        </div>
        </div>

    </div>
    
    </div>)
}

export default ApplyOnline;