import { Navigate, Route } from "react-router-dom";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

import { ROUTES } from "./constants/routes";

/* Ionic CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// import "@ionic/react/css/palettes/dark.system.css";

/* Theme */
import "./theme/variables.css";

/* Pages */
import Login from "./pages/Authentication/Login";
import CreateAccount from "./pages/Authentication/CreateAccount/CreateAccount";
import PersonalAndMembership from "./pages/ApplyMembership/PersonalAndMembership";
import ContactAndAddress from "./pages/ApplyMembership/ContactAndAddress";
import EmployeeAndVerification from "./pages/ApplyMembership/EmployeeAndVerification";
import FamilyBeneficiariesAndServices from "./pages/ApplyMembership/FamilyBeneficiariesAndServices";
import ReviewAndSubmit from "./pages/ApplyMembership/ReviewAndSubmit";
import ApplicationSubmitted from "./pages/ApplyMembership/ApplicationSubmitted";

import OTP from "./pages/Authentication/CreateAccount/OTP";
import CreatePassword from "./pages/Authentication/CreateAccount/CreatePassword";
import Home from "./pages/Authentication/Home";
import Onboarding from "./pages/Authentication/Onboarding";
import Splash from "./pages/Authentication/Splash";
import ForgotPassword from "./pages/Authentication/ForgotPassword";

/* Auth Guard */
// import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "./pages/Dashboard/Dashboard";
import Notifications from "./pages/Dashboard/Notifications";
import MakeAPayment from "./pages/Dashboard/components/Home/MakeAPayment";
import MakeADeposit from "./pages/Dashboard/components/Home/MakeADeposit";
import LoanOTP from "./pages/Dashboard/components/Loan/OTP";
import LoanApplication from "./pages/Dashboard/components/Loan/LoanApplication";
import ViewLoan from "./pages/Dashboard/components/Loan/ViewLoan";
import ViewSavings from "./pages/Dashboard/components/Savings/ViewSavings";
import ReviewDeposit from "./pages/Dashboard/components/Savings/ReviewDeposit";
import DepositSuccessful from "./pages/Dashboard/components/Savings/DepositSuccessful";
import ReviewPayment from "./pages/Dashboard/components/Home/ReviewPayment";
import PaymentSuccessful from "./pages/Dashboard/components/Home/PaymentSuccessful";
import AccountVerification from "./pages/Dashboard/components/Accounts/VerificationOfAccount/AccountVerification";
import SelfieVerification from "./pages/Dashboard/components/Accounts/VerificationOfAccount/SelfieVerification";
import IDVerification from "./pages/Dashboard/components/Accounts/VerificationOfAccount/IDVerification";
import IDVerificationInstructions from "./pages/Dashboard/components/Accounts/VerificationOfAccount/IDVerificationInstructions";
import MakeASavingsDeposit from "./pages/Dashboard/components/Savings/MakeASavingsDeposit";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* PUBLIC ROUTES */}

          {/* APPLY MEMBERSHIP */}
          <Route path={ROUTES.APPLY_MEMBERSHIP} element={<PersonalAndMembership />} />
          <Route path={ROUTES.CONTACT_AND_ADDRESS} element={<ContactAndAddress />} />
          <Route path={ROUTES.EMPLOYEE_AND_VERIFICATION} element={<EmployeeAndVerification />} />
          <Route path={ROUTES.FAMILY_BENEFICIARIES_SERVICES} element={<FamilyBeneficiariesAndServices />} />
          <Route path={ROUTES.REVIEW_AND_SUBMIT} element={<ReviewAndSubmit />} />
          <Route path={ROUTES.APPLICATION_SUBMITTED} element={<ApplicationSubmitted />} />
          {/* AUTH */}
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
          <Route path={ROUTES.OTP} element={<OTP />} />
          <Route path={ROUTES.CREATE_PASSWORD} element={<CreatePassword />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES.SPLASH} element={<Splash />} />
          <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
          {/* DASHBOARD */}
          <Route path={ROUTES.MAKE_A_PAYMENT} element={<MakeAPayment />} />
          <Route path={ROUTES.MAKE_A_DEPOSIT} element={<MakeADeposit />} />

          <Route path={ROUTES.REVIEW_PAYMENT} element={<ReviewPayment />} />
          <Route path={ROUTES.PAYMENT_SUCCESSFUL} element={<PaymentSuccessful />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
          <Route path={ROUTES.ACCOUNT_VERIFICATION} element={<AccountVerification />} />
          <Route path={ROUTES.SELFIE_VERIFICATION} element={<SelfieVerification />} />
          <Route path={ROUTES.ID_DOCUMENT_VERIFICATION} element={<IDVerification />} />
          <Route path={ROUTES.INSTRUCTIONS} element={<IDVerificationInstructions />} />
          <Route path={`${ROUTES.DASHBOARD}/*`} element={<Dashboard />} />
          {/* LOANS */}
          <Route path={ROUTES.LOAN_APPLICATION} element={<LoanApplication />} />
          <Route path={ROUTES.LOAN_OTP} element={<LoanOTP />} />
          <Route path={ROUTES.LOAN_SUBMITTED} element={<ApplicationSubmitted />} />
          <Route path={ROUTES.LOAN_VIEW_LOAN} element={<ViewLoan />} />

          {/* SAVINGS */}
          <Route path={ROUTES.VIEW_SAVINGS} element={<ViewSavings />} />
          <Route path={ROUTES.DEPOSIT_SAVINGS} element={<MakeASavingsDeposit />} />
          <Route path={ROUTES.REVIEW_DEPOSIT} element={<ReviewDeposit />} />
          <Route path={ROUTES.DEPOSIT_SUCCESSFUL} element={<DepositSuccessful />} />

          {/* Protected Tabs Layout */}
          {/* <ProtectedRoute path="/app" component={MainTabs} /> */}
          {/* Redirect Root */}
          <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.SPLASH} replace />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
