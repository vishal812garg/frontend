import { Link } from "react-router-dom";
import "../Componentcss/NavbarHost.css";
export default function NavbarHost(){
     
    // Link Style
     let TextDecoration = {textDecoration:"none"} 

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
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Messages</span>  
                           </Link>               
                           
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-bullhorn"></i></span>
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Create Ad</span>  
                           </Link>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-dollar-sign"></i></span>
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Monetization</span>  
                           </Link> 
                      </div>

                      <div className="i">
                           <span><i class="fa-sharp fa-solid fa-chart-simple"></i></span>
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Your Content and Stats</span>  
                           </Link>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-bookmark"></i></span>
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Bookmarks</span>  
                           </Link>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-pen-to-square"></i></span>
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Drafts</span>  
                           </Link>
                      </div>

                      <div className="i">
                           <span><i class="fa-solid fa-star-of-life"></i></span>
                           <Link to="#" style={TextDecoration}>
                                <span className="s">Try Quora+</span>  
                           </Link>
                      </div>
                     
                     <hr/>

                     <div>
                        <span>Dark Mode</span>
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

                      <Link to="#" style={TextDecoration}><span>About</span></Link>

                          <span>.</span>
                      <Link to="#" style={TextDecoration}><span>Careers</span></Link>
                           <span>.</span><br/>

                      <Link to="#" style={TextDecoration}><span>Terms</span></Link>

                           <span>.</span>
                      <Link to="#" style={TextDecoration}><span>Privacy</span></Link>
                           <span>.</span><br/>

                      <Link to="#" style={TextDecoration}><span>Acceptable Use</span></Link>
                            <span>.</span><br/>

                      <Link to="#" style={TextDecoration}><span>Businesses</span></Link>

                            <span>.</span>
                      <Link to="#" style={TextDecoration}><span>Press</span></Link>
                            <span>.</span><br/>

                      <Link to="#" style={TextDecoration}><span>Your Ad Choices</span></Link>
                            <span>.</span><br/>

                      <Link to="#" style={TextDecoration}><span>Grievance officer</span></Link>

                    </div>
  
                     </ul>


              </div>

        </>
    )
}