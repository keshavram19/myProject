import React, { useState } from "react";
import "./Accounts.css";
import axios from "axios";
import { Col,  Row } from "reactstrap";
import BankaccountSidebar from "../Sidebar/BankaccountSidebar";
axios.defaults.baseURL = "http://localhost:4444/api/";
const Fdadvice = () => {
  // const [email, setEmail] = useState("");
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleSubmit = async () => {
  //   if (!selectedOption) {
  //     alert("Please select an option");
  //     return;
  //   }

  //   try {
  //     // Submit data to the backend
  //     const response = await axios.post("/generate", {
  //       email,
  //       selectedOption,
  //     });
  //     console.log(response.data); // Assuming the server responds with some data
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleSubmit = async () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }
    
  
    try {
      const response = await axios.post("/generate-pdf", {
        email,
        selectedOption,
      });
  
      if (selectedOption === "sendAdvice") {
        alert("Advice email sent successfully.");
      } else if (selectedOption === "downloadDevice") {
        alert("PDF generated and downloaded successfully.");
        // Optionally, you can trigger a file download here if needed.
      }
  
      console.log(response.data); // Assuming the server responds with some data
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again later."); // Provide user feedback
    }
  };
  
  return (
    <section>
      <div className="container-fluid">
        <Row>
          <Col sm="3"></Col>
          <Col sm="9">
            <div className="fixed_hero_container"></div>
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <Row>
          <Col sm="3">
            <BankaccountSidebar />
          </Col>
          <Col sm="9">
            <div >
              {/* <div className="fixed-deposit-container"> */}
              <div className="fixed_deposit">
                <h1>Fixed Deposit Accounts</h1>
              </div>
              {/* <h2>Select Fixed Deposit Account </h2> */}
              <label className="fixed_selectOption">
                Select Fixed Deposit Account{" "}
              </label>
              <select
                className="fixed_selectOption1"
                class="your-dropdown-class"
              >
                {selectedOption === "sendAdvice" && (
                  <div>
                    <label>
                      Please enter your email:
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                )}
                <option value="Please select">Please select 1</option>
                <option value="Please select">Please select 2</option>
                <option value="Please select">Please select 3</option>
              </select>

              <form onSubmit={handleSubmit} className=" fixed_deposit_form">
                <label>
                  <input
                    type="radio"
                    name="fdOption"
                    value="sendAdvice"
                    onChange={() => setSelectedOption("sendAdvice")}
                  />
                  I want FD advice to be sent to my email
                </label>
                <label className=" fixed_form_container">
                  <input
                    type="radio"
                    name="fdOption"
                    value="downloadDevice"
                    onChange={() => setSelectedOption("downloadDevice")}
                  />
                  I want to download FD device
                </label>
                <br />

                <div className=" fixed_button_container">
                  <button type="submit" onSubmit={handleSubmit}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}

            {/* <section> */}
            {/* <div className="container"> */}
            <div className="row">
              <div className="col-md-8">
                <div className="fixed_container_content">
                  <h1>
                    open iWish flexible RD & save any amount,anytime to fulfil
                    your dreams
                  </h1>
                  <button className=" fixed_button_now">Open Now</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fixed_container_content1">
                  <img
                    src=" data:image/jpeg;base64,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"
                    className="img"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
    // </section>
  );
};

export default Fdadvice;
