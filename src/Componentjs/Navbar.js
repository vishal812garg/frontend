import { NavLink } from "react-router-dom"
import "../Componentcss/Navbar.css";
import NavbarHost from "./DropdownNavbar";
import { useThem } from "../Pagesjs/CreateContex";
export default function Navbar(){

  const { theme, setThem } = useThem();
      console.log(theme)


    return(

        <div className="mainnav" style={{backgroundColor:theme}}>

        {/* Navbar   */}
        <nav className="nav">

          {/*Quora Image*/ }
         <div className="image-quora"> 
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="img"/>
         </div>

           {/*House Font*/ }
         <div className="house">
           <NavLink to="/" className={({ isActive, isPending }) => (isActive ? 'active' : 'inactive')}><i className="fa-solid fa-house fa-xl" ></i></NavLink>
         </div>

           {/*Rectangle-list Font*/ }
          <div className="rectangle">   
           <NavLink to="/following" className={({ isActive, isPending }) => (isActive ? 'active' : 'inactive')}><i className="fa-solid fa-rectangle-list fa-xl" ></i></NavLink>
           </div>

           {/*pen-to-square Font*/ }
           <div className="pen">
           <NavLink to="/answer" className={({ isActive, isPending }) => (isActive ? 'active' : 'inactive')}><i className="fa-solid fa-pen-to-square fa-xl" ></i></NavLink>
           </div>

           {/*people-group Font*/ }
           <div className="spaces">
           <NavLink to="/spaces" className={({ isActive, isPending }) => (isActive ? 'active' : 'inactive')}><i className="fa-solid fa-people-group fa-xl" ></i></NavLink>
           </div>

           {/*bell Font*/ }
           <div className="bell">
           <NavLink to="/bell" className={({ isActive, isPending }) => (isActive ? 'active' : 'inactive')}><i className="fa-regular fa-bell fa-xl" ></i></NavLink> 
           </div> 


           {/*input search quora*/ }
           <div className="searchquora">
               <i class="fa-solid fa-magnifying-glass"></i>
               <input type="search" placeholder="Search Quora"/>
           </div>  


          {/*input Tryquora*/ }
          <div className="tryquora">   
          <input  placeholder='TryQuora+'/>
          </div>

          {/*Host Image*/ }
           <div className="image-b">
               <NavbarHost/>
          </div>

           {/*globe font*/ }
           <div className="globe">
            <i className="fa-solid fa-globe fa-xl" ></i>
          </div> 

           {/*DropDown*/ }  
            
          <div className="btn-group dropdown">
               <button type="button" className="btn btn-danger add-button" >
                    Add question
               </button>
              <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split create-post" data-bs-toggle="dropdown" aria-expanded="false">
                 <span class="visually-hidden">Toggle Dropright</span>
              </button>
           <ul className="dropdown-menu">
               <NavLink to="#"><li className="li" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pen"></i>Create post</li></NavLink>
           </ul>
         </div>
 

          </nav>
    
           

        </div>
    )
}