import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/protectedRoute";
import Accounts from "./components/User_portal/Netbanking/Bank_Accounts/Accounts";
import Statements from "./components/User_portal/Netbanking/Bank_Accounts/Statements";
import StatementByMail from "./components/User_portal/Netbanking/Bank_Accounts/Statement_by_email";
import DebitAndAtm from "./components/User_portal/Netbanking/Bank_Accounts/DebitAndAtm";
import GeneratePin from "./components/User_portal/Netbanking/Bank_Accounts/GeneratePin";
import BlockCard from "./components/User_portal/Netbanking/Bank_Accounts/BlockCard";
import Reissuecard from "./components/User_portal/Netbanking/Bank_Accounts/ReissueCard";
import ManageCardLimit from "./components/User_portal/Netbanking/Bank_Accounts/ManageCardLimit";


//  import OTPPage from "./components/User_portal/Netbanking/Bank_Accounts/OtpPage";


import ChequeBookReq from "./components/User_portal/Netbanking/Bank_Accounts/ChequeBookReq";
import ViewAndUpdatePancard from "./components/User_portal/Netbanking/Bank_Accounts/ViewUpdatePANCard";
import UpdateForm60 from "./components/User_portal/Netbanking/Bank_Accounts/UpdateForm60";
import PMSocialSecuritySchemes from "./components/User_portal/Netbanking/Bank_Accounts/PMSocialSecuritySchemes";
import BankRewardPoints from "./components/User_portal/Netbanking/Bank_Accounts/BankRewards";
import ServiceRequest from "./components/User_portal/Netbanking/Bank_Accounts/ServiceRequest";
import FixedDeposit from "./components/User_portal/Netbanking/Bank_Accounts/FixedDeposit";
import RecurringDeposit from "./components/User_portal/Netbanking/Bank_Accounts/ReccuringDeposit";
import Fdadvice from "./components/User_portal/Netbanking/Bank_Accounts/FDAdvice";
import RenewFD from "./components/User_portal/Netbanking/Bank_Accounts/RenewFD";
import PayLater from "./components/User_portal/Netbanking/Bank_Accounts/Paylater";
import Estatement from "./components/User_portal/Netbanking/Bank_Accounts/EStatement";
import Mypayee from "./components/User_portal/Netbanking/Fund_Transfer/MyPayee";
import TransactionStatus from "./components/User_portal/Netbanking/Fund_Transfer/TransactionStatus";
import ScheduledTransaction from "./components/User_portal/Netbanking/Fund_Transfer/ScheduledTransaction";
import Viewaccount from "./components/User_portal/Netbanking/Loans/Viewaccounts";
import Loanservices from "./components/User_portal/Netbanking/Loans/Loanservices";
import Loanservices1 from "./components/User_portal/Netbanking/Loans/Loanservices1";
import CompletedTransaction from "./components/User_portal/Netbanking/Fund_Transfer/CompletedTransaction";
import PaymentSummary from "./components/User_portal/Netbanking/Fund_Transfer/PaymentSummery";
import WireTransaction from "./components/User_portal/Netbanking/Fund_Transfer/WireTransaction";
import UpiTransaction from "./components/User_portal/Netbanking/Fund_Transfer/UPITransactionStatus";
import QuickFundTransfer from "./components/User_portal/Netbanking/Fund_Transfer/QuickFundTransfer";
import GenerateMMID from "./components/User_portal/Netbanking/Fund_Transfer/GenereateMMID";
import ManagePayees from "./components/User_portal/Netbanking/Fund_Transfer/ManagePayees";
import ConfirmBiller from "./components/User_portal/Netbanking/Fund_Transfer/ConfirmBiller";
import ConfirmPayee from "./components/User_portal/Netbanking/Fund_Transfer/ConfirmPayee";
import InwardRemitance from "./components/User_portal/Netbanking/Fund_Transfer/InwardRemittance";
import TaxCenter from "./components/User_portal/Netbanking/Fund_Transfer/TaxCenter";
import InterestCertificate from "./components/User_portal/Netbanking/Fund_Transfer/InterestCertificate";
import Disclaimer from "./components/User_portal/Netbanking/Fund_Transfer/Disclaimer";
import TaxPayment from "./components/User_portal/Netbanking/Fund_Transfer/Taxpayment";
import IncomeTaxEfill from "./components/User_portal/Netbanking/Fund_Transfer/IncometaxEfill";
import BillRechargeFastag from "./components/User_portal/Netbanking/Fund_Transfer/BillRecahrageAndFastag";
import LandingPage from "./components/User_portal/Home/LandingPage";
import PersonalLoginPage from "./components/User_portal/Login/PersonalLoginPage";
import CorporateLoginPage from "./components/User_portal/Login/CorporateLoginPage";
import Overview from "./components/User_portal/Netbanking/Overview/Overview";
import Viewsummary from "./components/User_portal/Netbanking/Account-Summary/view-summary/viewsummary";
import Navbar from "./components/User_portal/Netbanking/Overview/Navbar";
import Linkaccounts from "./components/User_portal/Netbanking/Account-Summary/link-my-accounts/linkaccounts";
import ViewProfile from "./components/User_portal/Netbanking/Profile/ViewProfile/ViewProfile";
import ChangeNickName from "./components/User_portal/Netbanking/Profile/change-nick-names/ChangeNickName";
import ChangeEmail from "./components/User_portal/Netbanking/Profile/change-email/ChangeEmail";
import ChangeFormat from "./components/User_portal/Netbanking/Profile/change-format/ChangeFormat";
import ChangePassword from "./components/User_portal/Netbanking/Profile/change-password/ChangePassword";
import GenerateDebitOrCreditPin from "./components/User_portal/Netbanking/Profile/generate-card-pin/GeneratePin";
import PaymentTransactionLimit from "./components/User_portal/Netbanking/Profile/paymenttransactionlimit/paymenttranslimit";
import ChangeUserId from "./components/User_portal/Netbanking/Profile/change-userID/ChangeUserId";
import UpdateProfilePhoto from "./components/User_portal/Netbanking/Profile/update-profile-photo/UpdateProfilePhoto";
import UpdateAccountPreferences from "./components/User_portal/Netbanking/Profile/update-account-preferences/UpdateAccountPreferences";
import FavouriteActivities from "./components/User_portal/Netbanking/Profile/favourite-activites/FavouriteActivities";
import CreditCard from "./components/User_portal/Netbanking/CreditCards/CreditCard";
import RegisteredBillers from "./components/User_portal/Netbanking/CreditCards/RegisteredBillers";
import ConvertToEMI from "./components/User_portal/Netbanking/CreditCards/CoverttoEmi";
import EMISubmit from "./components/User_portal/Netbanking/CreditCards/EmiSubmit";
import AutoDebitInstructions from "./components/User_portal/Netbanking/CreditCards/Autodebitsetup";
import VirtualCreditCards from "./components/User_portal/Netbanking/CreditCards/VirtualCreditCard";
import BillingCycleChange from "./components/User_portal/Netbanking/CreditCards/BillingCycleChange";
import GenerateCreditCardPin from "./components/User_portal/Netbanking/CreditCards/GenerateCreditCardPin";
import BlockCreditCard from "./components/User_portal/Netbanking/CreditCards/Blockyourcreditcard";
import AlertSubscription from "./components/User_portal/Netbanking/CreditCards/AlertSubscription";
import PhysicalPin from "./components/User_portal/Netbanking/CreditCards/Physicalpin";
import Viewlastcredit from "./components/User_portal/Netbanking/CreditCards/Viewlastcreditcard";
import CreditcardRewards from "./components/User_portal/Netbanking/CreditCards/CreditcardRewards";
import Loanaccounts from "./components/User_portal/Netbanking/Loans/Loanaccounts";
import ApplyForLoan from "./components/User_portal/Netbanking/Loans/Applyforloan";
import LoanApplicationTracking from "./components/User_portal/Netbanking/Loans/Loanapplicationtracking";
import ApplyOnline from "./components/User_portal/Netbanking/Loans/Applyonline";
import ForexCardSection from "./components/User_portal/Netbanking/CreditCards/Forexcards";
import PrepaidCard from "./components/User_portal/Netbanking/CreditCards/Prepaidcards";
import MerchantstandingInstructions from "./components/User_portal/Netbanking/CreditCards/MerchantstandingInstructions";
import DematAccountPage from "./components/User_portal/Netbanking/Investments/Demat";
import NationalpensionServiceRequestsPage from "./components/User_portal/Netbanking/Investments/Nationalpensionsystem";
import GuaranteedPensionPlan from "./components/User_portal/Netbanking/Investments/GuranteedPensionPlan";
import TermLifeInsurance from "./components/User_portal/Netbanking/Investments/TermLifeInsurance";
import EasyClaimSettlement from "./components/User_portal/Netbanking/Investments/Easyclaimsettlement";
import PersonalizeTransactionlimits from "./components/User_portal/Netbanking/Bank_Accounts/PersonalizeTranscationslimits";
import PayBills from "./components/User_portal/Netbanking/Bank_Accounts/Paybills";
import ConfirmPaye from "./components/User_portal/Netbanking/Bank_Accounts/ConfirmPayee";
import ViewPayee from "./components/User_portal/Netbanking/Bank_Accounts/Viewordeletepayee";
import CancerCover from "./components/User_portal/Netbanking/Investments/CancerCover";
import GeneralInsurance from "./components/User_portal/Netbanking/Investments/GeneralInsurnace";
import MyMailBox from "./components/User_portal/Netbanking/Customerservice.js/Mymailbox";
import ELocker from "./components/User_portal/Netbanking/Customerservice.js/ELocker";
import DropDownBankAccount from "./components/User_portal/Netbanking/Customerservice.js/Servierequestdropdown";
import Servicerequest from "./components/User_portal/Netbanking/Customerservice.js/Servicerequest";
import CustomerserviceTaxCentre from "./components/User_portal/Netbanking/Customerservice.js/Taxcenter";
import BillDetails from "./components/User_portal/Netbanking/Bank_Accounts/BillDetails";
import FinancialJourney from "./components/User_portal/Netbanking/Profile/Financial_Journey/FinancialJourney";
import Renewfixedform from "./components/User_portal/Netbanking/Bank_Accounts/Renewfixedform";
import FixedRecurringForm from "./components/User_portal/Netbanking/Bank_Accounts/Fixed_recurringForm";
import RecurringForm from "./components/User_portal/Netbanking/Bank_Accounts/Recurring_deposit_form";
// import OtpPage from "./components/User_portal/Netbanking/Bank_Accounts/OtpPage";
import UpdatePancardOtpPage from "./components/User_portal/Netbanking/Bank_Accounts/UpdatePancardOtp";
import GenerateDebitCardPinOTP from "./components/User_portal/Netbanking/Bank_Accounts/GenerateDebitPinOtp";
import GenerateDebitCardPin from "./components/User_portal/Netbanking/Bank_Accounts/GenerateDebitCardPin";
import ReissueLostATMcard from "./components/User_portal/Netbanking/Bank_Accounts/ReissueLostATM";
import GenerateRequestLostATM from "./components/User_portal/Netbanking/Bank_Accounts/GenerateRequestLostATM";
import ReissueCardRequest from "./components/User_portal/Netbanking/Bank_Accounts/ReissueCardRequest";
import OTPPage from "./components/User_portal/Netbanking/Fund_Transfer/OTPpage";
import Form16A from "./components/User_portal/Netbanking/Customerservice.js/Form16A";
import Form16AOTPPage from "./components/User_portal/Netbanking/Customerservice.js/Form16aOTP";
import ConvertToEMISubmit from "./components/User_portal/Netbanking/CreditCards/ConverttoEMISubmit";
import AutoDebitConfirm from "./components/User_portal/Netbanking/CreditCards/AutodebitSetupconfirm";
import ConvertToEMIOtp from "./components/User_portal/Netbanking/CreditCards/convertToEMIOtp";

import ManagrCardOtpPage from "./components/User_portal/Netbanking/Bank_Accounts/manageCardOtp";
import CreditCardPin from "./components/User_portal/Netbanking/CreditCards/creditcardPin";
import CreditCardPinOtp from "./components/User_portal/Netbanking/CreditCards/creditCardPinOtp";
import CreditCardOtp from "./components/User_portal/Netbanking/CreditCards/CreditCardOtp";
import AccountOpeningForm from "./components/User_portal/AccountOpeningForm/AccountOpeningForm";
import AccountSuccessPage from "./components/User_portal/AccountOpeningForm/AccountSuccessPage";
import Adminhome from "./components/User_portal/admin_portal/admin_home/Admihome";
import RequestedDatalist from "./components/User_portal/admin_portal/opening_requested_details/RequestedDatalist";
import IndividualDatalist from "./components/User_portal/admin_portal/opening_requested_details/Individuallist/AccountOpeningForm";
import VirtualPaye from "./components/User_portal/Netbanking/Fund_Transfer/VirtualPayee";

import MyProtectedComponent from './components/ProtectedRoute/tokenExpire';

import ReissueCardTable from "./components/User_portal/admin_portal/reissuecardTrack/reissueCardTrack";
import ReissueGenerateOrReject from "./components/User_portal/admin_portal/reissuecardTrack/reissuecardGenerateorReject";

import AdminLogin from "./components/User_portal/admin_portal/admin_login/AdminLogin";

import AdminChequeBookRequest from "./components/User_portal/admin_portal/admin_home/ChequeBookRequest";
import ShareMyAccountDetails from "./components/User_portal/Netbanking/Profile/ShareMyAccountDetails/ShareMyAccountDetails";

import LimitExceed from "./components/User_portal/Netbanking/Fund_Transfer/LimitExced";

import Dashboard from "./components/User_portal/Netbanking/Dashbord/Dashboard";
import Creditcardapplication from "./components/User_portal/Netbanking/Loans/Creditcardapplication";

import ApplyDebiCard from "./components/User_portal/Netbanking/Bank_Accounts/ApplyforDebitCard";

import PrivacyPolicy from "./components/User_portal/Login/TermsAndConditions/privacypolicy";
import TermsAndConditions from "./components/User_portal/Login/TermsAndConditions/TermsandConditions";







function App() {
  const location = useLocation();
  const hide =
    location.pathname === "/" ||
    location.pathname === "/netbanking-personal-login" ||
    location.pathname === "/netbanking-corporate-login" ||
    location.pathname === "/account-opening" ||
    location.pathname === "/account-success" ||

    location.pathname === "/admin/chequebookreq" ||
    
    location.pathname === "/admin/reissuecard" ||
    location.pathname === "/admin/reissuecardGenerateorReject" ||

    location.pathname.includes("/admin/")||
    location.pathname === '/privacy-policy'||
    location.pathname === '/termsandcondtions';




  return (
    <div>
      {!hide && <Navbar />}
      <Routes>
        <Route>
          {/* user portal starts */}

          <Route path="/" element={<LandingPage />} />




          <Route
            path="/netbanking-personal-login"
            element={<PersonalLoginPage />}
          />
          <Route
            path="/netbanking-corporate-login"
            element={<CorporateLoginPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/termsandcondtions" element={<TermsAndConditions/>} />


          {/* bank accounts */}
          <Route path="/user/overview" element={<Overview />} />


          <Route path="/user/account" element={<Accounts />} />
          {/* <Route path="/user/account" element={<MyProtectedComponent />}>
              <Route index element={<Accounts />} />
          </Route> */}


          <Route path="/user/account/statement" element={<Statements />} />

          <Route
            path="/user/account/statement-by-email"
            element={<StatementByMail />}
          />

          <Route
            path="/user/account/personalizetranscationlimits"
            element={<PersonalizeTransactionlimits />}
          />
          <Route path="/user/account/paybills" element={<PayBills />} />
          <Route path="/user/account/confirmpaye" element={<ConfirmPaye />} />
          <Route path="/user/account/Viewpayee" element={<ViewPayee />} />
          <Route path="/user/account/debit-atm-card" element={<DebitAndAtm />} />

          <Route path="/user/account/debit-card-apply" element={<ApplyDebiCard />} />

          <Route
            path="/user/account/generate-debitcard-pin"
            element={<GeneratePin />}
          />
          <Route
            path="/user/account/generate-debit-card-pin-otp"
            element={<GenerateDebitCardPinOTP />}
          />
          <Route
            path="/user/account/generate-debit-card-pin"
            element={<GenerateDebitCardPin />}
          />
          <Route path="/user/account/block-debit-card" element={<BlockCard />} />
          <Route path="/user/account/reissue-card" element={<Reissuecard />} />
          <Route
            path="/user/account/reissue-lost-atm-card"
            element={<ReissueLostATMcard />}
          />
          <Route
            path="/user/account/generate-request-lost-atm-card"
            element={<GenerateRequestLostATM />}
          />
          <Route
            path="/user/account/generate-request-lost-service-atm"
            element={<ReissueCardRequest />}
          />
          <Route
            path="/user/account/manage-cardlimit"
            element={<ManageCardLimit />}
          />
          <Route
            path="/user/account/manage-card-limit-otp"
            element={<OTPPage />}
          />

          <Route
            path="/user/account/update-pancard-otp"
            element={<UpdatePancardOtpPage />}
          />

          <Route
            path="/user/account/manage-card-otp"
            element={<ManagrCardOtpPage />}
          />


          <Route
            path="/user/account/chequebook-req"
            element={<ChequeBookReq />}
          />
          <Route
            path="/user/account/view-update-pancard"
            element={<ViewAndUpdatePancard />}
          />
          <Route path="/user/account/update-form60" element={<UpdateForm60 />} />
          <Route
            path="/user/account/pmsocial-securityschmes"
            element={<PMSocialSecuritySchemes />}
          />
          <Route
            path="/user/account/bank-rewardspoints"
            element={<BankRewardPoints />}
          />
          <Route
            path="/user/account/service-request"
            element={<ServiceRequest />}
          />
          <Route path="/user/account/fixed-deposits" 
          element={<FixedDeposit />} />
          {/* <Route path="/user/account/iwish-deposits" element={} /> */}
          <Route
            path="/user/account/reccuring-deposits"
            element={<RecurringDeposit />}
          />
          <Route
            path="/user/account/fixed-reccuring-form"
            element={<FixedRecurringForm />}
          />

          <Route
            path="/user/account/reccuring-form"
            element={<RecurringForm />}
          />

          <Route path="/user/account/fd-advice" element={<Fdadvice />} />
          <Route path="/user/account/renew-fd" element={<RenewFD />} />
          <Route path="/user/account/renewfixed" element={<Renewfixedform />} />

          <Route path="/user/account/paylater" element={<PayLater />} />
          <Route path="/user/account/billDetails" element={<BillDetails />} />
          <Route path="/user/account/e-statement" element={<Estatement />} />

          {/* fund transfer */}
          <Route path="/user/fundtransfer/mypayee" element={<Mypayee />} />
          <Route
            path="/user/fundtransfer/transaction-status"
            element={<TransactionStatus />}
          />
          <Route
            path="/user/fundtransfer/scheduled-transaction"
            element={<ScheduledTransaction />}
          />
          <Route
            path="/user/fundtransfer/completed-transaction"
            element={<CompletedTransaction />}
          />
          <Route
            path="/user/fundtransfer/payment-summary"
            element={<PaymentSummary />}
          />
          <Route
            path="/user/fundtransfer/wire-transaction"
            element={<WireTransaction />}
          />
          <Route
            path="/user/fundtransfer/upi-transaction-status"
            element={<UpiTransaction />}
          />
          <Route
            path="/user/fundtransfer/quickfundtransfer"
            element={<QuickFundTransfer />}
          />
          <Route path="/user/fundtransfer/limitexceed" element={<LimitExceed/>} />
          <Route
            exact
            path="/user/fundtransfer/quickfundtransfer-otp-page"
            element={<OTPPage />}
          />

          <Route
            path="/user/fundtransfer/generate-mmid"
            element={<GenerateMMID />}
          />
          <Route
            path="/user/fundtransfer/manage-payees"
            element={<ManagePayees />}
          />
          <Route
            path="/user/fundtransfer/confirm-biller"
            element={<ConfirmBiller />}
          />
          <Route
            path="/user/fundtransfer/confirm-payee"
            element={<ConfirmPayee />}
          />
          <Route
            path="/user/fundtransfer/inward-remitance"
            element={<InwardRemitance />}
          />
          <Route path="/user/fundtransfer/tax-center" element={<TaxCenter />} />
          <Route
            path="/user/fundtransfer/interest-certificate"
            element={<InterestCertificate />}
          />
          <Route path="/user/fundtransfer/disclaimer" element={<Disclaimer />} />
          <Route path="/user/fundtransfer/tax-payment" element={<TaxPayment />} />
          <Route
            path="/user/fundtransfer/incometax-Efill"
            element={<IncomeTaxEfill />}
          />
          <Route
            path="/user/fundtransfer/bill-recharge"
            element={<BillRechargeFastag />}
          />

          {/* Account summary */}

          <Route
            exact
            path="/user/accountsummary/viewsummary"
            element={<Viewsummary />}
          />
          <Route
            exact
            path="/user/accountsummary/linkaccounts"
            element={<Linkaccounts />}
          />

          {/* profile */}
          <Route exact path="/user/viewprofile" element={<ViewProfile />} />
          <Route
            exact
            path="/user/profile/generatepin"
            element={<GenerateDebitOrCreditPin />}
          />
          <Route
            exact
            path="/user/profile/changeemail"
            element={<ChangeEmail />}
          />
          <Route
            exact
            path="/user/profile/changepassword"
            element={<ChangePassword />}
          />
          <Route
            exact
            path="/user/profile/changeuserid"
            element={<ChangeUserId />}
          />
          <Route
            exact
            path="/user/profile/changeformat"
            element={<ChangeFormat />}
          />
          <Route
            exact
            path="/user/profile/changenickname"
            element={<ChangeNickName />}
          />
          <Route
            exact
            path="/user/profile/changeprofilephoto"
            element={<UpdateProfilePhoto />}
          />
          <Route
            exact
            path="/user/profile/updateaccountpreferences"
            element={<UpdateAccountPreferences />}
          />
          <Route
            exact
            path="/user/profile/favouriteactivities"
            element={<FavouriteActivities />}
          />

          <Route
            exact
            path="/user/profile/financialjourney"
            element={<FinancialJourney />}
          />

            <Route
            exact
            path="/user/profile/sharemyaccountdetails"
            element={<ShareMyAccountDetails/>}
          />

          <Route
            exact
            path="/user/profile/payment"
            element={<FinancialJourney />}
          />
           <Route
            exact
            path="/user/profile/paymenttransactionlimit"
            element={<PaymentTransactionLimit />}
          />

          {/* account opening starts */}
          <Route exact path="/account-opening" element={<AccountOpeningForm />} />
          <Route exact path="/account-success" element={<AccountSuccessPage />} />
          {/* account opening starts */}

          {/* CARDS & LOANS Started */}

          <Route exact path="/user/credit-cards" element={<CreditCard />} />
          <Route
            exact
            path="/user/registered-billers"
            element={<RegisteredBillers />}
          />
          <Route exact path="/user/covert-to-emi" element={<ConvertToEMI />} />
          <Route exact path="/user/emi-submit" element={<EMISubmit />} />

          <Route exact path="/user/convert-to-emi-submit" element={<ConvertToEMISubmit />} />
          <Route exact path="/user/convert-to-emi-submit-otp" element={<ConvertToEMIOtp />} />
          <Route exact path="/user/auto-debit-instructions" element={<AutoDebitInstructions />} />
          <Route exact path="/user/auto-debit-confirm" element={<AutoDebitConfirm />} />
          <Route exact path="/user/virtual-credit-cards" element={<VirtualCreditCards />} />
          <Route exact path="/user/request-billing-cycle-change" element={<BillingCycleChange />} />
          <Route exact path="/user/generate-credit-card-pin" element={<GenerateCreditCardPin />} />
          <Route exact path="/user/generate-creditcard-pin" element={<CreditCardPin />} />
          <Route exact path="/user/blockcreditcard" element={<BlockCreditCard />} />
          <Route exact path="/user/alertsubscription" element={<AlertSubscription />} />







          <Route exact path="/user/physicalpin" element={<PhysicalPin />} />
          <Route
            exact
            path="/user/viewlastcreditcard"
            element={<Viewlastcredit />}
          />
          <Route
            exact
            path="/user/creditcardrewards"
            element={<CreditcardRewards />}
          />
          <Route exact path="/user/loanaccounts" element={<Loanaccounts />} />
          <Route exact path="/user/applyforloan" element={<ApplyForLoan />} />
          <Route
            exact
            path="/user/loanapplicationtracking"
            element={<LoanApplicationTracking />}
          />
          <Route exact path="/user/applyonline" element={<ApplyOnline />} />
          <Route exact path="/user/forexcards" element={<ForexCardSection />} />
          <Route exact path="/user/prepaidcards" element={<PrepaidCard />} />
          <Route
            exact
            path="/user/merchantstandinginstructions"
            element={<MerchantstandingInstructions />}
          />
          <Route exact path="/user/demataccount" element={<DematAccountPage />} />
          <Route exact path="/user/account/generate-credit-card-pin-otp" element={<CreditCardPinOtp />} />
          <Route exact path="/user/account/generate-credit-card-pin-otp" element={<CreditCardOtp />} />


          <Route exact path="/user/viewaccounts" element={<Viewaccount />} />
          <Route exact path="/user/loanservices" element={<Loanservices />} />
          <Route exact path="/user/loanservices1" element={<Loanservices1 />} />
          <Route exact path="/user/Dashboard"element={<Dashboard/>}/>
          <Route exact path="/user/Creditcardapplication"element={<Creditcardapplication/>}/>

          {/* CARDS & LOANS ends */}

          {/* Investments starts */}

          <Route exact path="/user/demataccount" element={<DematAccountPage />} />
          <Route
            exact
            path="/user/nps"
            element={<NationalpensionServiceRequestsPage />}
          />
          <Route
            exact
            path="/user/guranteedpensionplan"
            element={<GuaranteedPensionPlan />}
          />
          <Route
            exact
            path="/user/termlifeinsurance"
            element={<TermLifeInsurance />}
          />
          <Route
            exact
            path="/user/easyclaimsettlement"
            element={<EasyClaimSettlement />}
          />
          <Route exact path="/user/cancercover" element={<CancerCover />} />
          <Route
            exact
            path="/user/generalinsurnace"
            element={<GeneralInsurance />}
          />

          {/* Investments ends */}

          {/* Customer service starts */}




          <Route exact path="/user/customerservice/form16a" element={<Form16A />} />
          <Route exact path="/user/customerservice/form16aotppage" element={<Form16AOTPPage />} />



          <Route
            exact
            path="/user/customerservice/servicerequestslist"
            element={<DropDownBankAccount />}
          />
          <Route
            exact
            path="/user/customerservice/servicerequests"
            element={<Servicerequest />}
          />
          <Route
            exact
            path="/user/customerservice/mymailbox"
            element={<MyMailBox />}
          />
          <Route
            exact
            path="/user/customerservice/elocker"
            element={<ELocker />}
          />
          <Route
            exact
            path="/user/customerservice/taxcenter"
            element={<CustomerserviceTaxCentre />}
          />


          {/* customer service ends */}

          {/* Admin side */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/all-data" element={<Adminhome />} />
          <Route path="/admin/confirm-details" element={<IndividualDatalist />} />
          <Route path="/admin/requested-data" element={<RequestedDatalist />} />
          <Route path="/admin/chequebookreq" element={<AdminChequeBookRequest />} />
          
             <Route path="/admin/reissuecard" element={<ReissueCardTable />} />
            <Route path="/admin/reissuecardGenerateorReject" element={<ReissueGenerateOrReject />} />
            

           
          

          {/* Admin side  */}

          {/* user portal ends */}

          {/* Default route */}
          <Route path="*" element={<Navigate to="/" />} />
       
          

        </Route>

      </Routes>



    </div>
  );
}

export default App;
