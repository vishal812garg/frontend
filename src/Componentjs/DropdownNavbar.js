import { NavLink } from "react-router-dom";
import "../Componentcss/NavbarHost.css";
import { useThem } from "../Pagesjs/CreateContex";
export default function NavbarHost(){
     
    // Link Style
     let TextDecoration = {textDecoration:"none"} 

     const { theme, setThem} = useThem();
      console.log(theme)

    return(
        
        <>
            <div className="dropdown" id="dropdown">
                          <img className="btn dropdown-toggle" data-bs-toggle="dropdown" src="https://thumbs.dreamstime.com/z/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="dropdown img"/>
                  <ul className="dropdown-menu" id="dropdown-menu">

                      <div id="Image">
                           <img src="https://thumbs.dreamstime.com/z/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="dropdown img"/> 
                           <h6>John</h6>
                      </div>

                      <hr/>
                       
                      <div className="i">
                           <span><i class="fa-solid fa-message"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Messages</span>  
                           </NavLink>               
                           
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-bullhorn"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Create Ad</span>  
                           </NavLink>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-dollar-sign"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Monetization</span>  
                           </NavLink> 
                      </div>

                      <div className="i">
                           <span><i class="fa-sharp fa-solid fa-chart-simple"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Your Content and Stats</span>  
                           </NavLink>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-bookmark"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Bookmarks</span>  
                           </NavLink>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-pen-to-square"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Drafts</span>  
                           </NavLink>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-star-of-life"></i></span>
                           <NavLink to="#" style={TextDecoration}>
                                <span className="s">Try Quora+</span>  
                           </NavLink>
                      </div>
                     
                     <hr/>

                     <div>
                        <NavLink><span onMouseOver={()=>setThem (theme === "white" ? "black" : "white")}>Dark Mode</span></NavLink>
                     </div> 

                     <div>
                        <span>Setting</span>
                     </div>

                     <div>
                        <span>Languages</span>
                     </div>

                     <div>
                        <span>Help</span>
                     </div>

                     <div>
                        <span>Logout</span>
                     </div>

                    <hr/>

                    {/* Links Div */}
               <div className="lower-item">

                      <NavLink to="#" style={TextDecoration}><span>About</span></NavLink>

                          <span>.</span>
                      <NavLink to="#" style={TextDecoration}><span>Careers</span></NavLink>
                           <span>.</span><br/>

                      <NavLink to="#" style={TextDecoration}><span>Terms</span></NavLink>

                           <span>.</span>
                      <NavLink to="#" style={TextDecoration}><span>Privacy</span></NavLink>
                           <span>.</span><br/>

                      <NavLink to="#" style={TextDecoration}><span>Acceptable Use</span></NavLink>
                            <span>.</span><br/>

                      <NavLink to="#" style={TextDecoration}><span>Businesses</span></NavLink>
                            <span>.</span>
                      <NavLink to="#" style={TextDecoration}><span>Press</span></NavLink>
                            <span>.</span><br/>

                      <NavLink to="#" style={TextDecoration}><span>Your Ad Choices</span></NavLink>
                            <span>.</span><br/>

                      <NavLink to="#" style={TextDecoration}><span>Grievance officer</span></NavLink>

                    </div>
  
                     </ul>


              </div>

        </>
    )
}