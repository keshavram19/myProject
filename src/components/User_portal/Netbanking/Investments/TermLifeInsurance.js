import { useState } from "react";
import './investments.css'
import { LuIndianRupee } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFloppyDisk } from "react-icons/fa6";
import { BiCheckShield } from "react-icons/bi";
import { MdAlignVerticalBottom } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbFileStack } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { HiDocumentDownload } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";





const TermLifeInsurance = () => {
    const [activeTab, setActiveTab] = useState('Buy Now');
    return (
        <div className="container-fluid" style={{marginTop:"90px"}}>
            <div className="row">
                <div className="col-sm-12">
                    <div>
                        <p className='estatement_heading'>Term Life Insurance</p>
                        <div className='container-fluid termlifeinsurance_navbar'>
                            <div className="row">
                            <div className="col-sm-4">
                                <p className={activeTab === 'Buy Now' ? 'termlifeinsurance_buttonon termlifeinsurance_buttonoff px-5 py-2' : 'termlifeinsurance_buttonoff px-5 py-2'} onClick={() => setActiveTab('Buy Now')}>Buy Now</p>
                            </div>
                            <div className="col-sm-4">
                                <p className={activeTab === 'Link Your Policy' ? 'termlifeinsurance_buttonon termlifeinsurance_buttonoff px-3 py-2' : 'termlifeinsurance_buttonoff px-3 py-2'} onClick={() => setActiveTab('Link Your Policy')}>Link Your Policy</p>
                            </div>
                            <div className="col-sm-4">
                                <p className={activeTab === 'Exiting Policy' ? 'termlifeinsurance_buttonon termlifeinsurance_buttonoff px-3 py-2' : 'termlifeinsurance_buttonoff px-3 py-2'} onClick={() => setActiveTab('Exiting Policy')}>Exiting Policy</p>
                            </div>
                            </div>
                           
                        </div>

                        {activeTab === 'Buy Now' ?
                            <>
                                <div className="card p-2 bg-light">
                                    <div className="row mt-4">
                                        <div className="col-sm-12 ">
                                            <div className="card d-flex flex-row align-items-center text-center justify-content-around">
                                                <div className="termlifeinsurance_start">
                                                    <img src="https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705968000&semt=sph" alt="family_image" className="term_insurance_img" />
                                                </div>
                                                <div className="termlifeinsurance_card">
                                                    <p>Insurance with Assurance</p>
                                                    <p>Royal Islamic Pru iprotect smart</p>
                                                    <div className="termlifeinsurance_sign">
                                                        <div>
                                                            <p><h5>Life Cover</h5></p>
                                                            <p><h5><LuIndianRupee /> 50 lakhs</h5></p>
                                                        </div>
                                                        <div className="termlifeinsurance_term">
                                                            <p><h5>Premium </h5></p>
                                                            <p><h5><LuIndianRupee />/month</h5></p>

                                                        </div>
                                                    </div>

                                                    <div className="termlifeinsurance_private mt-3">
                                                        <button className="termlifeinsurance_button">Buy Now*</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <h4>Benefits for you and your family</h4>
                                        <div className="row ">
                                            <div className="col-sm-6 ">
                                                <div className="card  p-5 mt-3 d-flex flex-row align-items-center text-center justify-content-between">
                                                    <p><FaRegHandshake className="term_life_insurance_logos" /></p>
                                                    <p>Protect You against <b>34 critical illenesses</b>  with fixed premium</p>
                                                    <button className="term_life_insurance_buttons"><IoIosArrowForward /></button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card  p-5 mt-3 d-flex flex-row align-items-center text-center justify-content-between">
                                                    <p><BiCheckShield className="term_life_insurance_logos" /></p>
                                                    <p>Extra Cover against <b>accidental death</b></p>
                                                    <button className="term_life_insurance_buttons"><IoIosArrowForward /></button>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="card  p-5 mt-3 d-flex flex-row align-items-center text-center justify-content-between">
                                                    <p><FaHandHoldingUsd className="term_life_insurance_logos" /></p>
                                                    <p><b> 100% payout</b> on diagonsis of terminal illeness </p>
                                                    <button className="term_life_insurance_buttons"><IoIosArrowForward /></button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card  p-5 mt-3 d-flex flex-row align-items-center text-center justify-content-between">
                                                    <p><MdAlignVerticalBottom className="term_life_insurance_logos" /></p>
                                                    <p><b>Tax Benifits</b> u/s 80c,80D & 10(10D)</p>
                                                    <button className="term_life_insurance_buttons"><IoIosArrowForward /></button>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="card  p-5 mt-3 d-flex flex-row align-items-center text-center justify-content-between">
                                                    <p><FaFloppyDisk className="term_life_insurance_logos" /></p>
                                                    <p>Guaranted <b> 1-Day Claim Settlement</b></p>
                                                    <button className="term_life_insurance_buttons"><IoIosArrowForward /></button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card  p-5 mt-3 d-flex flex-row align-items-center text-center justify-content-between">
                                                    <p><HiOutlineClipboardDocumentList className="term_life_insurance_logos" /></p>
                                                    <p><b>Waiver of Premium</b> On Permenantly disabilty</p>
                                                    <button className="term_life_insurance_buttons"><IoIosArrowForward /></button>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h4>Royal Islamic Bank advantage</h4>
                                        <div className="conatiner-fluid text-center">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="card  p-4" style={{height:"30vh"}}>
                                                    <p><TbFileStack className="term_life_insurance_logos" /></p>
                                                    <p>Buy In just 3 minutes</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="card  p-4" style={{height:"30vh"}}>
                                                    <p><BsCardChecklist className="term_life_insurance_logos" /></p>
                                                    <p>Manage your policy through internet banking and imobile app</p>

                                                </div>

                                            </div>
                                            <div className="col-sm-3">
                                                <div className="card p-4" style={{height:"30vh"}}>
                                                    <p><RiCustomerService2Line className="term_life_insurance_logos" /></p>
                                                    <p>On-call assistance by our certified officers</p>
                                                </div>

                                            </div>
                                            <div className="col-sm-3">
                                                <div className="card  p-4" style={{height:"30vh"}}>
                                                    <p><LuBuilding2 className="term_life_insurance_logos" /></p>
                                                    <p>Wide network of Royal Islamic Bank At our service</p>
                                                </div>
                                            </div>

                                        </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3 p-2 text-center term_life_insurance_common">
                                        <p>You are trusting <b>Royal Islamic Prudentiual</b> along with the  over the 3 crore the other custmores   </p>
                                    </div>
                                    <div className="card mt-3 p-2 d-flex flex-row text-center align-items-center justify-content-center">
                                    <HiDocumentDownload className="term_life_insurance_logos" />
                                        <button className="term_life_insurance_btn">Download product Guide</button>
                                    </div>
                                </div>

                            </>
                            : ''}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TermLifeInsurance;