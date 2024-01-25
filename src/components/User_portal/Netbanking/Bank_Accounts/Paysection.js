import React from 'react';
import { useState } from 'react';
import { FaRegCreditCard } from "react-icons/fa6";
import { TfiMobile } from "react-icons/tfi";
import { FaGooglePay } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdOutlineSouthWest } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { IoWater } from "react-icons/io5";
import { GiSuspensionBridge } from "react-icons/gi";
import { BsUmbrella } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { PiCylinderFill } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { MdConnectedTv } from "react-icons/md";
 import { FaSearch } from "react-icons/fa";
 import { FaChevronCircleRight } from "react-icons/fa";
 import { FaChevronCircleUp } from "react-icons/fa";
 import { FaCar } from 'react-icons/fa';
 
const PaySection = () =>{
    
	const [show, setShow] = useState (true);

	const renderPayBillsSearch= () =>{
		return(
	    <>
		
		<input type='text' id='name' placeholder='Serach Biller' className='input_serachbiller_container'/>
		<  FaSearch  className='searchbiller_icon_card'/>
		</>
		)
	}

	const renderCreditcard= () =>{
		return(
	    <>
	    <div className='card_paybill_contaiiner'>
		<FaRegCreditCard className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>credit card</p>
		</div>
		</>
		)
	}

	const renderMobilecard= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<TfiMobile className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Mobile Recharge</p>
		</div>
		</>
		)
	}

	const renderGooglePay= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaGooglePay className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>GooglePay</p>
		</div>
		</>
		)
	}

	const renderDemat= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaCoins className='cardIcon_section_container'/>
	    <p className='icon-paysection_container'>Demat</p>
		</div>
		</>
		)
	}

	const renderDonation= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaDonate className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Donation</p>
		</div>
		</>
		)
	}

	const renderEsop= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<MdOutlineSouthWest className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>ESOP</p>
		</div>
		</>
		)
	}

	
	const renderLoans= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaHandHoldingWater className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Loans</p>
		</div>
		</>
		)
	}

	const renderUtility= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<AiOutlineSolution className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Utility</p>
		</div>
		</>
		)
	}

	const renderWater= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<IoWater className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Water</p>
		</div>
		</>
		)
	}

	const renderPension= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<GiSuspensionBridge className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Pension</p>
		</div>
		</>
		)
	}

	const renderInsurance= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<BsUmbrella className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Insurance</p>
		</div>
		</>
		)
	}

	const renderPostpaid= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaMobileAlt className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Postpaid</p>
		</div>
		</>
		)
	}

	const renderElectricity= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<RiLightbulbFlashLine className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Electricity</p>
		</div>
		</>
		)
	}

	const renderGas= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<PiCylinderFill className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Gas</p>
		</div>
		</>
		)
	}

	const renderMutualFund= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<GiMoneyStack className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Mutual Fund</p>
		</div>
		</>
		)
	}

	const renderLandline= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<TbDeviceLandlinePhone className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Landline</p>
		</div>
		</>
		)
	}

	const renderFastag= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaCar  className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Fastag</p>
		</div>
		</>
		)
	}
    
	const renderOtherFastag= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaCar  className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>OtherFastag</p>
		</div>
		</>
		)
	}

	const renderEducation= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<FaGraduationCap className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>Education</p>
		</div>
		</>
		)
	}

	const renderDTH= () =>{
		return(
	    <>
		 <div className='card_paybill_contaiiner'>
		<MdConnectedTv className='cardIcon_section_container'/>
	    <p className='icon_paysection_container'>DTH</p>
		</div>
		</>
		)
	}

	
	


	return(
         <>
		<div>
			<div className='row'>
				

			<div className='col-md-12'>
		<div>{renderPayBillsSearch ()}</div>
		</div>
		</div>
		<div className='PaySection_biller_container'>
		<div className='row'>
		   
		   
			<div className='col-md-1.5'>
			
				
        <div>{renderCreditcard()}</div>
		</div>
		
		<div className='col-md-1.5'>
			
		<div >{renderMobilecard()}</div>
		</div>
		
		<div className='col-md-1.5'>
		<div>{renderGooglePay()}</div>
		</div>
	    <div className='col-md-1.5'>
		<div >{ renderDemat()}</div>
		</div>
		{/* </div> */}

		{/* <div className='row'> */}
           
		
		<div className='col-md-1.5'>
		<div >{renderEsop()}</div>
		</div>
		<div className='col-md-1.5'>
		<div>{ renderDonation()}</div>
		</div>
		
		<div className='col-md-1.5'>
		<div>{ renderLoans()}</div>
		</div>
		<div className='col-md-1.5'>
		<div>{  renderUtility()}</div>
		</div>
		
			</div>
		
		
		
		
         <div className='row'>
			
		 <div className='col-md-1.5'>
		<div>{ renderWater()}</div>
		</div>
		<div className='col-md-1.5'>
		<div>{  renderPension()}</div>
		</div>
		
		<div className='col-md-1.5'>
		<div>{ renderInsurance()}</div>
		</div>
	
		<div className='col-md-1.5'>
		<div>{ renderPostpaid()}</div>
		</div>
		{/* </div> */}
		
		{/* <div className='row'> */}
			
		<div className='col-md-1.5'>
		<div>{ renderElectricity()}</div>
			</div>		
			<div className='col-md-1.5'>
		<div>{ renderGas()}</div>
		</div>
		<div className='col-md-1.5'>
		<div>{ renderMutualFund()}</div>
		</div>
		<div className='col-md-1.5'>
		<div>{ renderLandline()}</div>
		</div>
		</div>
	    <div className='row'>

		<div className='col-md-1.5'>
		<div>{renderFastag()}</div>
		</div> 

		<div className='col-md-1.5'>
		<div>{renderOtherFastag()}</div>
		</div> 
		<div className='col-md-1.5'>
		<div>{ renderEducation()}</div>
			</div>
			<div className='col-md-1.5'>
		<div>{renderDTH()}</div>
		</div>

		
	 {/* <div className='col-md-1.5'>
		<div>{renderFastag()}</div>
		</div> 

		<div className='col-md-1.5'>
		<div>{renderOtherFastag()}</div>
		</div>  */}


		<div className='col-md-1.5'>

			<p  className='buttonIcons_paysection_container' onClick={() => setShow (!show)}>{show ? < FaChevronCircleUp /> : < FaChevronCircleRight className='criclebutton'/>}</p>
		</div>
		</div>
		</div>
		</div>
		
		</>
		
		
		
		
		
		
	)
}
export default PaySection;