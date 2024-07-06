import './App.css';
import Calculator from './units/calculator';
import Footer from './units/footer';
import Login from './units/login';
import Register from './units/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/register" element={<Register />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/calculator" element={<Calculator />}></Route>
<Route path="/*" element={<img style={{display:'block',marginLeft:'auto',marginRight:'auto'}}
alt="not found"
width={"800px"}
height={"600px"}
src="./i.avif"
/>}></Route>
</Routes>
</BrowserRouter>
<Footer/>
</>
  );
}

export default App;
