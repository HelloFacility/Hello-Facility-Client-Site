import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './Components/FontPage/BlogPage/AddBlog';
import BuildingManagementSolution from './Components/FontPage/SubMenuPage/CleaningService/BuildingManagementSolution';
import CarRental from './Components/FontPage/SubMenuPage/CleaningService/CarRental';
import CleaningService from './Components/FontPage/SubMenuPage/CleaningService/CleaningService';
import PestControl from './Components/FontPage/SubMenuPage/CleaningService/PestControl';
import StationarySupply from './Components/FontPage/SubMenuPage/CleaningService/StationarySupply';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addBlog' element={<AddBlog />}></Route>
        <Route path='/cleaningService' element={<CleaningService />}></Route>
        <Route path='/pestControl' element={<PestControl />}></Route>
        <Route path='/carRental' element={<CarRental />}></Route>
        <Route path='/buildingManagement' element={<BuildingManagementSolution />}></Route>
        <Route path='/stationarySupply' element={<StationarySupply />}></Route>
      </Routes>
    </div>
  );
}

export default App;
