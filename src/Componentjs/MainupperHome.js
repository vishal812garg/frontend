import "../Componentcss/MainupperHome.css"
import { NavLink } from "react-router-dom"
// import { useState } from "react"
 import Modal from "./Modal"
 import { useModal } from "./ModalContex"
export default function MainupperHome(){
      
      const {nameimage, name, Sponsored, pera, lowerimage, info} = useModal();
      console.log(info);
   

    return(
        <>
           {/* Main Body Div */}
           <div className="main">

                   {/* Upper Div  */}
                  <div className="upper">

                        {/* Image Div */}
                        <div className="img-input">
                             <img  src="https://thumbs.dreamstime.com/z/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="img"/>
                             <span ><input type="text" placeholder="What do you want to ask or share?"/></span>
                        </div>


                        {/* Font Div */}
                        <div className="d-flex justify-content-around ">
                                 
                               <Modal/> 
                              <NavLink to="#" className="text-decoration-none text-secondary"><div  data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pen"></i>Post</div></NavLink>
                              <NavLink to="#" className="text-decoration-none text-secondary"><div><i class="fa-solid fa-question"></i>Ask</div></NavLink> 
                              <NavLink to="#" className="text-decoration-none text-secondary"><div ><i className="fa-solid fa-pen-to-square"></i>Answer</div></NavLink>
                               
                      </div>




                  {/* Lower Div  */}
                  <div className="lower">
                         {
                            info.map((item)=>(
                                   <>
                                   {/* Card Div */}
                                   <div className="card">

                                       <div className="box">

                                             {/* Image Div */}
                                            <div className="image">
                                                <img src={item.nameimage} alt="img"/>
                                            </div>
                                      
                                            {/* Name and Sponsored Div */}
                                            <div className="name-sponsored">
                                                <span ><strong>{item.name}</strong></span><br/>
                                                <span className="sponsored">{item.Sponsored}</span>
                                            </div>
                                      </div>
                                    
                                    {/* Pera Div */}
                                    <div className="pera">
                                          <p>{item.pera}</p>              
                                    </div>

                                    {/* Image Div */}
                                    <div className="box-image">
                                          <img src={item.lowerimage} alt="img"/>
                                    </div>


                                    <div id="up-down">
                                          <div>
                                                <span><i class="fa-solid fa-up-long"></i></span>
                                                <span id="up">Upvote.120</span>
                                          </div>
                                          

                                          <div id="down">
                                               <span><i class="fa-solid fa-down-long"></i></span>
                                          </div>
                                    </div>

                                </div>  
                                </>                  
                            ))
                         }
                  </div>

             </div> 
         </div>
        </>
    )
}