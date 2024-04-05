import React from 'react';
import './investments.css';
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { SiEasyeda } from "react-icons/si";

const DematAccountPage = () => {
  const handleOpenDematAccountClick = () => {
    alert('Opening Demat account...');
  };

  return (
    <div className="demat_account_page_main-container container-fluid col-12" style={{marginTop:"60px"}}>
      <div className='row'>
      <div className="col-sm-">
        <div className="demat-account-page-container">
          <h1 style={{color:"#2fb68e"}}>Now, Conveniently open your online Demat and Trading Account</h1>
          <div className='demat_account_icons'>
            <h5 className='m-5'><AiOutlineFileUnknown size={"30px"} color='red' />NO Paper <br/> Work</h5> 
            <h5 className='m-5'><BsCheck2Circle size={"30px"} color='red'/>Convenient <br/> simple</h5>
            <h5 className='m-5'><SiEasyeda size={"30px"} color='red'/>Simple <br/> Processing</h5>
          </div>
          <button className="demat_button" onClick={handleOpenDematAccountClick}>
            Open Demat Account
          </button>
        </div>
        </div>
        {/* </div> */}
        
        {/* <div className='row'> */}
          {/* <div className='col-sm-6'>
        <div className="demat_image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EB6fSs8HZihG1fqrQbeQGluRcemq94FEDnzeS22NSYf4NP9N" alt="Image" />
      </div>
      </div> */}
      
      </div>
      
      <div className="button-container" >
      <div className='banking_header'>
        <h5>Have an Royal Islamic Bank Demat Account</h5>
      </div>
      <div className='internet_banking m-3'>
      <a href="#existing-demat-account">Click here</a>  <span>to link your Demat Account to Internet Banking User ID</span>
      </div>
      <div className='banking_header'>
        <h5>Don't have an Royal Islamic Bank Bank Demat Account</h5>
      </div>
      <div className='internet_banking m-3'>
      <a href="#new-demat-account">Click here</a>  <span>to open a new Demat Account and link to Internet Banking User ID</span>
      </div>
    </div>
    </div>
  );
};

export default DematAccountPage;