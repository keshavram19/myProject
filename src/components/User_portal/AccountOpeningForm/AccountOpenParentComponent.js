import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [personalDetails, setpersonalDetails] = useState(false);
  const [addressSameAs, setaddressSameAs] = useState(true);
  const [addressSameAs1, setaddressSameAs1] = useState(true);

  const [userData, setUserData] = useState({
    dateofbirth: "",
    email:"",
    mobilenumber: "",
    openaccount: "",
    operatingtype: "",
    prefix: "",
    firstname: "",
    lastname: "",
    aadharnumber: "",
    pannumber: "",
    fathername: "",
    mothername: "",
    gaurdianname: "",
    jointAccountStatus: "",
    declaration:"",
    // Current Address
    currentAddress: {
      flatnumber: "",
      buildingname: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      permanantAddressStatus:""
    },

    // Mailing Address
    permanentAddress: {
      flatnumber: "",
      buildingname: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },

    jointAccountDetails: {
      prefix: "",
      firstname: "",
      lastname: "",
      aadharnumber: "",
      pannumber: "",
      mobilenumber: "",
      fathername: "",
      mothername: "",
      gaurdianname: "",
    },
  });

  return (
    <StateContext.Provider
      value={{
        personalDetails,
        setpersonalDetails,
        addressSameAs,
        setaddressSameAs,
        addressSameAs1,
        setaddressSameAs1,
        userData,
        setUserData,
      }}

    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
