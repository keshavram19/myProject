import { useState } from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
const ApplyForLoan = () => {
  const [loan, setLoan] = useState("personalloan");
  return (
    <>
      <h4 className="applyforloan_heading">Apply For Loans</h4>
      <hr />
      <div className=" applyforloan_navmain">
        <li
          className={loan === "personalloan" ? "applyforloan_buttonon" : ""}
          onClick={() => setLoan("personalloan")}
        >
          <HiOutlineCurrencyRupee className="applyforloan_icon" />
          Personal Loans
        </li>
        <li
          className={loan === "creditcard" ? "applyforloan_buttonon" : ""}
          onClick={() => setLoan("creditcard")}
        >
          <FaCreditCard className="applyforloan_icon" />
          Credit Cards
        </li>
        <li
          className={loan === "homeloan" ? "applyforloan_buttonon" : ""}
          onClick={() => setLoan("homeloan")}
        >
          <IoHomeOutline className="applyforloan_icon" />
          Home Loans
        </li>
        <li
          className={loan === "carloan" ? "applyforloan_buttonon" : ""}
          onClick={() => setLoan("carloan")}
        >
          <FaCarAlt className="applyforloan_icon" />
          Car Loans
        </li>
      </div>
      {loan === "personalloan" && (
        <div className="applyforloan_content">
          <h6>
            Your one-stop-shop for fulfilling all your financial aspirations.{" "}
          </h6>
          <p className="applyforloan_para1">
            If you're looking for the personal loan that's easy to get,your
            search ends here.ROYAL ISLAMIC Bank Personal loans are easy to get
            and absolutely hassle free.
          </p>
          <h6 className="applyforloan_para1">
            ROYAL ISLAMIC Bank personal loan-Key benefits{" "}
          </h6>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Avail personal loan upto Rs 25 lakhs
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              No security guarantee required
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">Faster processing</div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">Minimun documentation</div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Intrest rate starting from 10.5%
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Flexible repayment option of 12-72* months
            </div>
          </div>
          <div className="applyforloan_para3">
            <span className="applyforloan_para2">Click here</span> to know more
            about ROYAL ISLAMIC-Digital lending
          </div>
          <div className="applyforloan_divbutton">
            <button className="applyforloan_btn">Apply Now</button>
          </div>
        </div>
      )}

      {/* creditcard */}
      {loan === "creditcard" && (
        <div className="applyforloan_content">
          <h6>Credit Cards</h6>
          <p className="applyforloan_para1">
            Check out your best credit card{" "}
            <span className="applyforloan_para2">Check now</span>
          </p>
          <div className="applyforloan_banner">
            <div className="applyforloan_bannercontent">
              <div className="applyforloan_bannericon1">
                <BsFillFuelPumpDieselFill className="applyforloan_bannericon" />
              </div>
              <div>
                Earn upto <span className="applyforloan_litres">50 Litres</span>{" "}
                of free fuel annually{" "}
              </div>
            </div>
            <div>Presenting ROYAL ISLAMIC Bank fuel credit card</div>
          </div>
          <h6 className="applyforloan_para1">
            ROYAL ISLAMIC Bank Fuel credit card-Key benefits{" "}
          </h6>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Earn up to 50 Litres of Free fuel annually
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Earn 5% of your spends as Fuel Points at IndianOil outlets (Max
              250 Fuel Points per month in first 6 months, Max 150 Fuel Points
              post 6 months from card issuance)
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Earn 5% of your spends as Fuel Points on Groceries and Bill
              Payments (Max 100 Fuel Points per month on each category)
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Earn 1 Fuel Point for every ₹150 spent on all other purchases
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              1% fuel surcharge waiver at all fuel stations across India
              ​​​​​​​(on minimum trasaction of ₹400. Max CashBack of ₹250 per
              statement cycle)
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Spend ₹50,000 and above in the first year and get a waiver on the
              renewal membership fee
            </div>
          </div>
          <div className="applyforloan_para3">
            <span className="applyforloan_para2">Click here</span> to get more
            credit cards
          </div>
          <div className="applyforloan_divbutton">
            <button className="applyforloan_btn">Apply Now</button>
          </div>
        </div>
      )}

      {/* homeloan */}
      {loan === "homeloan" && (
        <div className="applyforloan_content">
          <h6>
            Your one-stop-shop for fulfilling all your financial aspirations.{" "}
          </h6>
          <p className="applyforloan_para1">
            If you're looking for the Home loan that's easy to get,your search
            ends here.ROYAL ISLAMIC Bank Home loans are easy to get and
            absolutely hassle free.
          </p>
          <div className="applyforloan_homeloanbanner">
            <div className="applyforloan_homeloanbannercontent">
              <h4>Fast,Easy,Affordable</h4>
              <h4 className="applyforloan_litres">Home Loans</h4>
              <p>Avail home loans at 8.50%pa onwards.</p>
              <button className="applyforloan_instantbtn">
                Instant Call Back
              </button>
            </div>
          </div>
          <h6 className="applyforloan_para1">
            ROYAL ISLAMIC Bank Home loan-Key benefits{" "}
          </h6>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Upto 0.50% of the loan amount or Rs. 3000/- whichever is higher +
              applicable taxes / statutory levies. Minimum Retention Amount: 50%
              of applicable fees or Rs. 3000/- +applicable taxes/statutory
              levies whichever is higher
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Upto 1.50 % of the Loan amount or Rs. 4500/- whichever is higher+
              applicable taxes / statutory levies. Minimum Retention Amount: 50%
              of applicable fees or Rs. 4500/- +applicable taxes/statutory
              levies whichever is higher
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Upto 1.25% of the Loan amount or Rs. 3000/- whichever is higher +
              applicable taxes / statutory levies and charges. Minimum Retention
              Amount: 50% of applicable fees or Rs. 3000/-+applicable
              taxes/statutory levies whichever is higher
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Upto 1.50% of the Loan amount or Rs. 4500/- whichever is higher +
              applicable taxes / statutory levies and charges. Minimum Retention
              Amount: 50% of applicable fees or Rs. 4500/-+applicable
              taxes/statutory levies whichever is higher
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              Up to 2.00% of the loan amount+ applicable taxes / statutory
              levies. Minimum Retention Amount: 50% of applicable fees or Rs.
              3000/-+applicable taxes/statutory levies whichever is higher
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              A maximum of 18% P. A. on overdue instalment amounts.
            </div>
          </div>
          <div className="applyforloan_para3">
            <span className="applyforloan_para2">Click here</span> to know more
            about ROYAL ISLAMIC-Home Loans
          </div>
          <div className="applyforloan_divbutton">
            <button className="applyforloan_btn">Apply Now</button>
          </div>
        </div>
      )}

      {/* carloan */}
      {loan === "carloan" && (
        <div className="applyforloan_content">
          <h6>
            Get the perfect car, and the perfect loan – the way you want it.
            Now, faster than ever!{" "}
          </h6>
          <p className="applyforloan_para1">
            All You Need To Know About Car Loan
          </p>
          <div className="applyforloan_carloanbanner"></div>
          <h6 className="applyforloan_para1">
            ROYAL ISLAMIC Bank Car loan-Key benefits{" "}
          </h6>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              The thrill of bringing your brand-new car home is special. Car
              Loan has been the driver behind fulfilling the dreams of people to
              own cars. What if we told you that there was an easy, quick and
              seamless way to get your car?. ROYAL ISLAMIC Bank Xpress Car Loan
              is committed to making your car buying experience smoother than
              ever. It provides 100% financing on select vehicles,
              pocket-friendly EMIs, and flexible repayments
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              ROYAL ISLAMIC Bank Xpress Car Loan is 100% digital and you can
              apply for it anytime, anywhere. You can instantly apply for the
              loan and it only takes 30 minutes with our end-to-end digital
              process. There is no physical verification process and you don’t
              need to submit any physical documents.
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              It does not matter where you stay, you can apply for the loan from
              anywhere in India. ROYAL ISLAMIC Bank Xpress Car Loan ensures that
              your Auto Loan is disbursed instantly to your car dealer through
              Ne;tBanking. You can avail of this facility with the following
              simple steps: Log into your ROYAL ISLAMIC Bank NetBanking account
              — go to the Borrow tab — Click on the New Car Loan.
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              With ROYAL ISLAMIC Bank Car Loans, you can get an Auto Loan of up
              to ₹25 lakhs on a wide range of cars and multi-utility vehicles.
              You can enjoy up to 100% on-road finance on your New Car Loan. You
              can apply for Top-Up Loans for extra financing. ROYAL ISLAMIC
              Bank's existing Car Loan customers can avail of the Top-Up Loan
              facility without any extra documentation.
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              ROYAL ISLAMIC Bank Xpress Car Loan comes with flexible repayment
              tenures tailored to your needs at the most affordable Car Loan
              rates. You get to select the repayment tenure from 12 to 84 months
              along with quick and easy processing and approval.
            </div>
          </div>
          <div className="applyforloan_benefits">
            <div className="applyforloan_benefitsicon">
              <TiTick className="applyforloan_benefitsicon" />
            </div>
            <div className="applyforloan_para1">
              While you enjoy your ride, the bank has got you covered with its
              insurance facility. ROYAL ISLAMIC Bank offers a comprehensively
              packaged insurance product that offers you protection against
              uncertainties like accidental death, permanent total disability as
              well as accidental hospitalisation.
            </div>
          </div>
          <div className="applyforloan_para3">
            <span className="applyforloan_para2">Click here</span> to know more
            about ROYAL ISLAMIC-Car loans
          </div>
          <div className="applyforloan_divbutton">
            <button className="applyforloan_btn">Apply Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyForLoan;
