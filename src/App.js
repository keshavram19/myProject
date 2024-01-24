import { Routes, Route } from "react-router-dom";
import Accounts from "./components/User_portal/Netbanking/Bank_Accounts/Accounts";
import Statements from "./components/User_portal/Netbanking/Bank_Accounts/Statements";
import StatementByMail from "./components/User_portal/Netbanking/Bank_Accounts/Statement_by_email";
import DebitAndAtm from "./components/User_portal/Netbanking/Bank_Accounts/DebitAndAtm";
import GeneratePin from "./components/User_portal/Netbanking/Bank_Accounts/GeneratePin";
import BlockCard from "./components/User_portal/Netbanking/Bank_Accounts/BlockCard";
import Reissuecard from "./components/User_portal/Netbanking/Bank_Accounts/ReissueCard";
import ManageCardLimit from "./components/User_portal/Netbanking/Bank_Accounts/ManageCardLimit";
import ChequeBookReq from "./components/User_portal/Netbanking/Bank_Accounts/ChequeBookReq";
import ViewAndUpdatePancard from "./components/User_portal/Netbanking/Bank_Accounts/ViewUpdatePANCard";
import UpdateForm60 from "./components/User_portal/Netbanking/Bank_Accounts/UpdateForm60";
import PMSocialSecuritySchemes from "./components/User_portal/Netbanking/Bank_Accounts/PMSocialSecuritySchemes";
import BankRewardPoints from "./components/User_portal/Netbanking/Bank_Accounts/BankRewards";
import ServiceRequest from "./components/User_portal/Netbanking/Bank_Accounts/ServiceRequest";
import FixedDeposit from "./components/User_portal/Netbanking/Bank_Accounts/FixedDeposit";
import RecurringDeposit from "./components/User_portal/Netbanking/Bank_Accounts/ReccuringDeposit";
import IWishDeposits from "./components/User_portal/Netbanking/Bank_Accounts/IWishDeposits";
import Fdadvice from "./components/User_portal/Netbanking/Bank_Accounts/FDAdvice";
import RenewFD from "./components/User_portal/Netbanking/Bank_Accounts/RenewFD";
import PayLater from "./components/User_portal/Netbanking/Bank_Accounts/Paylater";
import Estatement from "./components/User_portal/Netbanking/Bank_Accounts/EStatement";
import Mypayee from "./components/User_portal/Netbanking/Fund_Transfer/MyPayee";
import TransactionStatus from "./components/User_portal/Netbanking/Fund_Transfer/TransactionStatus";
import ScheduledTransaction from "./components/User_portal/Netbanking/Fund_Transfer/ScheduledTransaction";
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
import ChangeUserId from "./components/User_portal/Netbanking/Profile/change-userID/ChangeUserId";
import UpdateProfilePhoto from "./components/User_portal/Netbanking/Profile/update-profile-photo/UpdateProfilePhoto";
import UpdateAccountPreferences from "./components/User_portal/Netbanking/Profile/update-account-preferences/UpdateAccountPreferences";
import FavouriteActivities from "./components/User_portal/Netbanking/Profile/favourite-activites/FavouriteActivities";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
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

        {/* bank accounts */}
        <Route path="/user/overview" element={<Overview />} />
        <Route path="/user/account" element={<Accounts />} />
        <Route path="/user/account/statement" element={<Statements />} />
        <Route
          path="/user/account/statement-by-email"
          element={<StatementByMail />}
        />
        <Route path="/user/account/debit-atm-card" element={<DebitAndAtm />} />
        <Route
          path="/user/account/generate-debitcard-pin"
          element={<GeneratePin />}
        />
        <Route path="/user/account/block-debit-card" element={<BlockCard />} />
        <Route path="/user/account/reissue-card" element={<Reissuecard />} />
        <Route
          path="/user/account/manage-cardlimit"
          element={<ManageCardLimit />}
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
        <Route path="/user/account/fixed-deposits" element={<FixedDeposit />} />
        <Route
          path="/user/account/reccuring-deposits"
          element={<RecurringDeposit />}
        />
        <Route
          path="/user/account/iwish-deposits"
          element={<IWishDeposits />}
        />
        <Route path="/user/account/fd-advice" element={<Fdadvice />} />
        <Route path="/user/account/renew-fd" element={<RenewFD />} />
        <Route path="/user/account/paylater" element={<PayLater />} />
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
        {/* user portal ends */}
      </Routes>
    </div>
  );
}

export default App;
