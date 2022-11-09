
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
function App() {
  return (
    <div className='App'>
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
