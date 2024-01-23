import './Accounts.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { MdArrowDropDownCircle } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

const Estatement = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [isCalendarOpen1, setIsCalendarOpen1] = useState(false);

    const handleCalendarToggle = () => {
        setIsCalendarOpen(!isCalendarOpen);

    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);

    };
    const handleCalendarToggle1 = () => {

        setIsCalendarOpen1(!isCalendarOpen1)
    };

    const handleDateChange1 = (date) => {

        setSelectedDate1(date);
        setIsCalendarOpen1(false);
    };


    return (
        <>
            <div className='container-fluid' style={{marginTop:"90px"}}>
                <div className='row'>
                    <div className='col-3'>
                        <div>
                            <BankaccountSidebar />
                        </div>
                        </div>
                    <div className='col-9'>
                    <div className="estatement_container">
                <p className='estatement_heading'>e-Statement</p>
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Account type:</div>
                        <div className='estatement_select'>
                            <select id="sel1" className='estatement_option'>
                                <option>-Select Type of Account- </option>
                                <option>Bank Account</option>
                                <option>Credit Card</option>
                                <option>Demat Account</option>
                            </select>
                            <div className='estatement_downicon'><MdArrowDropDownCircle className='estatement_icon1' /></div>
                        </div>
                    </div>
                </div>
                {/* account number */}
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Account number:</div>
                        <div className='estatement_select'>
                            <select id="sel1" className='estatement_option'>
                                <option>-Select An Account- </option>
                                <option>987656789876</option>
                                <option>4010356012347865</option>
                                <option>098756789</option>
                            </select>
                            <div className='estatement_downicon'><MdArrowDropDownCircle className='estatement_icon1' /></div>
                        </div>
                    </div>
                </div>
                {/* statement */}
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_statementtype'><input type='radio' id='estatement_statementname' />
                        <div htmlFor='estatement_statementname' className='estatement_statementname'>Mini Statement</div>
                    </div>
                </div>
                {/* period */}
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Period:</div>
                        <div className='estatement_select'>
                            <div className='estatement_option'>

                                <DatePicker className='estatement_datepick'
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    popperPlacement="top-end"
                                    popperModifiers={{
                                        preventOverflow: {
                                            enabled: true,
                                            escapeWithReference: false,
                                            boundariesElement: 'viewport',
                                        },
                                    }}
                                    open={isCalendarOpen}
                                    onClickOutside={() => setIsCalendarOpen(false)}
                                    dateFormat="MMMM d, yyyy"
                                    showYearDropdown
                                    placeholderText='From'
                                    isClearable
                                />
                            </div>
                            <div className='estatement_downicon1'>
                                <button className='estatement_calenderbtn' onClick={handleCalendarToggle}><FcCalendar className='estatement_fccalender' /></button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Period:</div>
                        <div className='estatement_select'>
                            <div className='estatement_option'>

                                <DatePicker className='estatement_datepick'
                                    selected={selectedDate1}
                                    onChange={handleDateChange1}
                                    popperPlacement="top-end"
                                    popperModifiers={{
                                        preventOverflow: {
                                            enabled: true,
                                            escapeWithReference: false,
                                            boundariesElement: 'viewport',
                                        },
                                    }}
                                    open={isCalendarOpen1}
                                    onClickOutside={() => setIsCalendarOpen1(false)}
                                    dateFormat="MMMM d, yyyy"
                                    showYearDropdown
                                    placeholderText='To'
                                    isClearable
                                />
                            </div>
                            <div className='estatement_downicon1'>
                                <button className='estatement_calenderbtn' onClick={handleCalendarToggle1}><FcCalendar className='estatement_fccalender' /></button>
                            </div>

                        </div>
                    </div>
                </div>

                

                <div className='container-fluid estatement_buttons'>
                    <button className='estatement_view'>View</button>
                    <button className='estatement_download'>Download</button>
                </div>
                <h6 className='estatement_note'>Note:</h6>
                <div className='container-fluid'>
                    
                    <ul>
                        <li>Transactions for the current and previous month only can be viewed / downloaded through this option.eg: You can view/download statement from 01/12/2023 upto 12/01/2024.</li>
                        <li>To download statements prior to last month, kindly use the e-statement - Upto 5 Years' option or click here.</li>
                        <li>Please click on 'Select Period' option to save and download your Account Statement.</li>
                    </ul>

                </div>
            </div>
                        </div>
                    </div>
            </div>
           

        </>
    )
}



export default Estatement;