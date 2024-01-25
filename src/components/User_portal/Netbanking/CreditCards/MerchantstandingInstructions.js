import React from "react";

import  './Creditcard.css'
const MerchantstandingInstructions = () => {

  return (
    <>
      <div className="container-fluid merchant_heading col-md-12" style={{marginTop:"90px"}}>
        <h4 >Merchant Standing Instructions</h4>
        <p style={{color: "black"}}> You can manage standing instructions for various merchants</p>

        <div className="container-fluid merchant_list d-flex flex-wrap">

          <div className="col-md-2.5 ml-5">
            <p>Shopify Commerce</p>
            <p>Wefast India</p>
            <p>Hostinger pte</p>
            <p>Mebigo Labs</p>
            <p>SUN TV NETWORK</p>
            <p>Zoho Technologies</p>
            <p>People Interactive</p>
            <p>Big Rock</p>
          </div>

          <div className="col-md-2.5 ml-5 ">
            <p>EDUNETWORK</p>
            <p>TITAN COMPANY</p>
            <p>HDFC ERGO</p>
            <p>Viacom18media</p>
            <p>smallcase technologies</p>
            <p>Hoichoi Technologies</p>
            <p>Culver Max</p>
          </div>

          <div className=" col-md-2.5 ml-5  ">
            <p>NIVA BUPA</p>
            <p>EROSNOW</p>
            <p>HT DIGITAL</p>
            <p>JIO HAPTIK</p>
            <p>Sony Pictures</p>
            <p>Anchorage Technologies</p>
            <p>HINDUSTAN MEDIA</p>
          </div>

          <div className="col-md-2.5 ml-5 ">
            <p>Sponsifyme Technologies</p>
            <p>Hostgatar</p>
            <p>Royal Bison Autornetals</p>
            <p>Zaurac Consulting</p>
            <p>Xfionite Technologies</p>
            <p>Printline Media</p>
            <p>Corsera</p>
          </div>

          <div className="col-md-2 ml-5">
            <p>Meru Mobility</p>
            <p>Bal Raksha Bharat</p>
            <p>Diverse Retails</p>
            <p>AEGON LIFE</p>
            <p>Bluehost INDIA</p>
            <p>TagMango PvtLTD</p>
            <p>Digibox Technologies</p>
            <p>Isha Foundation</p>
          </div>

        </div>

      </div>

      <form>
        
        <label htmlFor='box1' className="merchant_checkbox"><input type="checkbox" id='box1'></input>By clicking on the button, you will be entering a website operated by other parties. Royal Islamic Bank does not control or endorse such websites and bears no responsibility for them.</label>
      </form>

      <div>
        <button className="merchant_button">FOR MERCHANT LISTED ABOVE CLICK HERE</button>
        <button className="merchant_button1">FOR ANY OTHER MERCHANT CLICK HERE</button>
      </div>
    </>
  )
}

export default MerchantstandingInstructions;