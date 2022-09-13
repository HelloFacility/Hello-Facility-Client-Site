import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './Components/FontPage/BlogPage/AddBlog';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addBlog' element={<AddBlog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
