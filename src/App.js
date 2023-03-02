import './App.css';
import Navbar from './Componentjs/Navbar';
import Home from "./Pagesjs/Home"
import Following from './Pagesjs/Following';
import Spaces from './Pagesjs/Spaces';
import Answer from './Pagesjs/Answer';
import Bell from './Pagesjs/Bell';
import Politics from './Componentjs/Componet Leftsidebar/Politics';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
         <Routes>
               <Route path="/" element={<Home/>}/> 
               <Route path="/Politics" element={<Politics/>}></Route>
               <Route path="/following" element={<Following/>}/>
               <Route path="/Answer" element={<Answer/>}/>
               <Route path="/Spaces" element={<Spaces/>}/>
               <Route path="/Bell" element={<Bell/>}/>
         </Routes>
    </div>
  );
}

export default App;
