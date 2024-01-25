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
    <div className="demat_account_page_main-container-col-12">
      <div className="col-md-8">
        <div className="demat-account-page-container">
          <h1>Now, Conveniently open your online Demat and Trading Account</h1>
          <div className='demat_account_icons'>
            <h5><AiOutlineFileUnknown size={"30px"} color='red' />NO Paper Work</h5>
            <h5><BsCheck2Circle size={"30px"} color='red'/>Convenient simple</h5>
            <h5><SiEasyeda size={"30px"} color='red'/>Simple Processing</h5>
          </div>
          <button onClick={handleOpenDematAccountClick}>
            Open Demat Account
          </button>
        </div>
        <div className="demat_image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EB6fSs8HZihG1fqrQbeQGluRcemq94FEDnzeS22NSYf4NP9N" alt="Image" />
      </div>
      </div>
      
      <div className="button-container col-12" >
      <div className='banking_header'>
        <h5>Have an ICICI Bank Demat Account</h5>
      </div>
      <div className='internet_banking'>
      <a href="#existing-demat-account">Click here</a>  <span>to link your Demat Account to Internet Banking User ID</span>
      </div>
      <div className='banking_header'>
        <h5>Don't have an ICICI Bank Demat Account</h5>
      </div>
      <div className='internet_banking'>
      <a href="#new-demat-account">Click here</a>  <span>to open a new Demat Account and link to Internet Banking User ID</span>
      </div>
    </div>
    </div>
  );
};

export default DematAccountPage;