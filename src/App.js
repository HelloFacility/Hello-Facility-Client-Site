import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdditionalBlog from './Components/AdditionalPage/AdditionalBlog';
import AdditionalClient from './Components/AdditionalPage/AdditionalClient';
import AdditionalGallery from './Components/AdditionalPage/AdditionalGallery';
import ContactUs from './Components/AdditionalPage/ContactUs';
import AddBlogs from './Components/Dashboard/AdminDashboard/AddBlog/AddBlogs';
import AddPost from './Components/Dashboard/AdminDashboard/AddPost/AddPost';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import ManageProfile from './Components/Dashboard/AdminDashboard/ManageProfile/ManageProfile';
import ManageUser from './Components/Dashboard/AdminDashboard/ManageUser/ManageUser';
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
import AddBlog from './Components/FontPage/BlogPage/AddBlog';
import BuildingManagementSolution from './Components/FontPage/SubMenuPage/BuildingManagementSolution/BuildingManagementSolution';
import MonthlyCarRental from './Components/FontPage/SubMenuPage/CarRental/MonthlyCarRental';
import OnDemandService from './Components/FontPage/SubMenuPage/CarRental/OnDemandService';
import WeedingCarRental from './Components/FontPage/SubMenuPage/CarRental/WeedingCarRental';
import BathroomCleaning from './Components/FontPage/SubMenuPage/CleaningService/BathroomCleaning';
import CarpetCleaning from './Components/FontPage/SubMenuPage/CleaningService/CarpetCleaning';
import CommercialCleaning from './Components/FontPage/SubMenuPage/CleaningService/CommercialCleaning';
import KitchenCleaning from './Components/FontPage/SubMenuPage/CleaningService/KitchenCleaning';
import RegularOfficeCleaning from './Components/FontPage/SubMenuPage/CleaningService/RegularOfficeCleaning';
import SofaCleaning from './Components/FontPage/SubMenuPage/CleaningService/SofaCleaning';
import Gardening from './Components/FontPage/SubMenuPage/Gardening/Gardening';
import AntControl from './Components/FontPage/SubMenuPage/PestControl/AntControl';
import CockroachControl from './Components/FontPage/SubMenuPage/PestControl/CockroachControl';
import FumigationService from './Components/FontPage/SubMenuPage/PestControl/FumigationService';
import RodentControl from './Components/FontPage/SubMenuPage/PestControl/RodentControl';
import TermiteControl from './Components/FontPage/SubMenuPage/PestControl/TermiteControl';
import WoodBorer from './Components/FontPage/SubMenuPage/PestControl/WoodBorer';
import StationarySupply from './Components/FontPage/SubMenuPage/StationarySupply/StationarySupply';
import Home from './Components/Home/Home';
import MyOrder from './Components/Dashboard/CustomersDashboard/MyOrder/MyOrder';
import MyReview from './Components/Dashboard/CustomersDashboard/MyReview/MyReview';
import MyProfile from './Components/Dashboard/CustomersDashboard/MyProfile/MyProfile';
import AddressBook from './Components/Dashboard/CustomersDashboard/AddressBook/AddressBook';
import Coupon from './Components/Dashboard/CustomersDashboard/Coupon/Coupon';
import RequestService from './Components/Dashboard/CustomersDashboard/RequestService/RequestService';
import MyCancellations from './Components/Dashboard/CustomersDashboard/MyCancellations/MyCancellations';
import AddNewAddress from './Components/Dashboard/CustomersDashboard/AddressBook/AddNewAddress';
import EditProfile from './Components/Dashboard/CustomersDashboard/MyProfile/EditProfile';
import EditAddress from './Components/Dashboard/CustomersDashboard/AddressBook/EditAddress';
import ManageOrder from './Components/Dashboard/AdminDashboard/ManageOrder/ManageOrder';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addBlog' element={<AddBlog />}></Route>
        <Route path='/commercialCleaningService' element={<CommercialCleaning />}></Route>
        <Route path='/regularOfficeCleaning' element={<RegularOfficeCleaning />}></Route>
        <Route path='/carpetCleaning' element={<CarpetCleaning />}></Route>
        <Route path='/sofaCleaning' element={<SofaCleaning />}></Route>
        <Route path='/kitchenCleaning' element={<KitchenCleaning />}></Route>
        <Route path='/bathroomCleaning' element={<BathroomCleaning />}></Route>
        <Route path='/antControl' element={<AntControl />}></Route>
        <Route path='/cockroachControl' element={<CockroachControl />}></Route>
        <Route path='/fumigationService' element={<FumigationService />}></Route>
        <Route path='/rodentControl' element={<RodentControl />}></Route>
        <Route path='/termiteControl' element={<TermiteControl />}></Route>
        <Route path='/woodBorer' element={<WoodBorer />}></Route>
        <Route path='/monthlyCarRental' element={<MonthlyCarRental />}></Route>
        <Route path='/onDemandService' element={<OnDemandService />}></Route>
        <Route path='/weedingCarRental' element={<WeedingCarRental />}></Route>
        <Route path='/buildingManagement' element={<BuildingManagementSolution />}></Route>
        <Route path='/stationarySupply' element={<StationarySupply />}></Route>
        <Route path='/Gardening' element={<Gardening />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/additionalClient' element={<AdditionalClient />}></Route>
        <Route path='/additionalGallery' element={<AdditionalGallery />}></Route>
        <Route path='/additionalBlog' element={<AdditionalBlog />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>

        {/* Admin Dashboard Start*/}
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route index element={<MyProfile />}></Route>
          <Route path="myProfile" element={<MyProfile />}></Route>
          <Route path="manageProfile" element={<ManageProfile />} />
          <Route path="addBlogs" element={<AddBlogs />}></Route>
          <Route path="addPost" element={<AddPost />}></Route>
          <Route path="manageUser" element={<ManageUser />}></Route>
          <Route path="manageOrder" element={<ManageOrder />}></Route>

          {/* For Customer */}
          <Route path="myOrder" element={<MyOrder />}></Route>
          <Route path="myReview" element={<MyReview />}></Route>
          <Route path="addressBook" element={<AddressBook />}></Route>
          <Route path="coupon" element={<Coupon />}></Route>
          <Route path="requestService" element={<RequestService />}></Route>
          <Route path="myCancellations" element={<MyCancellations />}></Route>
          <Route path="addNewAddress" element={<AddNewAddress />}></Route>
          <Route path="editProfile" element={<EditProfile />}></Route>
          <Route path="editAddress" element={<EditAddress />}></Route>
          {/* For Customer */}

        </Route>
        {/* Admin Dashboard End*/}

      </Routes>
    </div>
  );
}

export default App;
