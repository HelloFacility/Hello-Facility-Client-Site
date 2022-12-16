import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdditionalBlog from './Components/AdditionalPage/AdditionalBlog';
import AdditionalClient from './Components/AdditionalPage/AdditionalClient';
import AdditionalGallery from './Components/AdditionalPage/AdditionalGallery';
import ContactUs from './Components/AdditionalPage/ContactUs';
import AddBlog from './Components/FontPage/BlogPage/AddBlog';
import BuildingManagementSolution from './Components/FontPage/SubMenuPage/BuildingManagementSolution/BuildingManagementSolution';
import MonthlyCarRental from './Components/FontPage/SubMenuPage/CarRental/MonthlyCarRental';
import CommercialCleaning from './Components/FontPage/SubMenuPage/CleaningService/CommercialCleaning';
import KitchenCleaning from './Components/FontPage/SubMenuPage/CleaningService/KitchenCleaning';
import StationarySupply from './Components/FontPage/SubMenuPage/StationarySupply/StationarySupply';
import Home from './Components/Home/Home';
import CleaningService from './Components/FontPage/SubMenuPage/CleaningService/CleaningService';
import PestControl from './Components/FontPage/SubMenuPage/PestControl/PestControl';
import CarRental from './Components/FontPage/SubMenuPage/CarRental/CarRental';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addBlog' element={<AddBlog />}></Route>
        <Route path='/commercialCleaningService' element={<CommercialCleaning />}></Route>
        <Route path='/kitchen-cleaning' element={<KitchenCleaning />}></Route>
        <Route path='/monthlyCarRental' element={<MonthlyCarRental />}></Route>
        <Route path='/buildingManagement' element={<BuildingManagementSolution />}></Route>
        <Route path='/stationarySupply' element={<StationarySupply />}></Route>
        <Route path='/additionalClient' element={<AdditionalClient />}></Route>
        <Route path='/additionalGallery' element={<AdditionalGallery />}></Route>
        <Route path='/additionalBlog' element={<AdditionalBlog />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route path='/cleaning-service' element={<CleaningService/>}></Route>
        <Route path='/pest-control' element={<PestControl/>}></Route>
        <Route path='/car-rental' element={<CarRental/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
