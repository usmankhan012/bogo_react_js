import './App.css';
import './Responsive.css'
import 'jquery';
import { BrowserRouter, Switch, Routes, Route, useLocation, } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Pricing from './components/Pricing';
import Business from './components/Business';
import Getregister from './components/Getregister';
import Merchant_subscription from './components/Merchant_subscription';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import VoucherDetails from './components/VoucherDetails'
import User_registration from './components/User_registration';
import Review2 from './components/Review2';
import Review from './components/Review';
import Review3 from './components/Review3';
import Review_campaign from './components/Review_campaign'
import Password from './components/Password';
import Otpverify from './components/Otpverify';
import New_password from './components/New_password';
import Forget_password_otp_verification from './components/Forget_password_otp_verification';
import Campaign_report from './components/Campaign_report';
import App_userregister from './components/App_userregister';
import Choose_Your_Plan from './components/Choose_Your_Plan';
import Campaign from './components/Campaign';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import brand_ambassadors from './components/brand_ambassadors';
import Contact from './components/Contact';
import Bogo_directory from './components/Bogo_directory';
import BusinessCategory_list from './components/BusinessCategory_list';
import BusinessSub_category_list from './components/BusinessSub_category_list';
import Changepassword from './components/Changepassword';
import Contact_list from './components/Contact_list';
import Dashboard from './components/Dashboard';
import DeshboardSlider_Merchant_list from './components/DeshboardSlider_Merchant_list';
import Faq from './components/Faq';
import MerchantUser_list from './components/MerchantUser_list';
import Notification_list from './components/Notification_list';
import Profile_update from './components/Profile_update';
import User_list from './components/User_list';
import WelcomeSlider_Merchant_list from './components/WelcomeSlider_Merchant_list';
function App() {


  // const location = useLocation();
  // const isHome = location.pathname === '/' || location.pathname === '/HomePage';

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/Pricing" element={<Pricing />} />


            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/brand_ambassadors" element={<brand_ambassadors />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Getregister" element={<Getregister />} />
            <Route path="/Bogo_directory" element={<Bogo_directory />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Forget_password" element={<Forget_password_otp_verification />} />
            <Route path="/App_userregister" element={<App_userregister />} />
            <Route path="/User_registration" element={<User_registration />} />



          </Routes>

          {/* <HomePage/> */}

          <Footer />

          {/* <AboutUs/> */}
          {/* <brand_ambassadors/> */}
          {/* <Login/> */}
          {/* <Pricing /> */}
          {/* <Business/> */}
          {/* <Getregister/> */}
          {/* <Merchant_subscription/> */}
          {/* <PrivacyPolicy/> */}
          {/* <TermsConditions/> */}
          {/* <VoucherDetails/> */}
          {/* <User_registration/> */}
          {/* <Review2/> */}
          {/* <Review/> */}
          {/* <Review3/> */}
          {/* <Review_campaign/> */}
          {/* <Password/> */}
          {/* <Otpverify/> */}
          {/* <New_password/> */}
          {/* <Forget_password_otp_verification/> */}
          {/* <Campaign_report/> */}
          {/* <App_userregister/> */}
          {/* <Choose_Your_Plan/> */}
          {/* <Campaign/> */}
          {/* <Contact/> */}
          {/* <Bogo_directory/> */}
          {/* <BusinessCategory_list /> */}
          {/* <BusinessSub_category_list/> */}
          {/* <Changepassword/> */}
          {/* <Contact_list /> */}
          {/* <Dashboard /> */}
          {/* <DeshboardSlider_Merchant_list/> */}
          {/* <Faq /> */}
          {/* <MerchantUser_list/> */}
          {/* <Notification_list/> */}
          {/* <Profile_update /> */}
          {/* <User_list /> */}
          {/* <WelcomeSlider_Merchant_list/> */}
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
