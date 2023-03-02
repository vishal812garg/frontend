import { NavLink } from "react-router-dom";
import  "../Componentcss/LeftSidebarHome.css";
import Politics from "./Componet Leftsidebar/Politics";
export default function LeftSidebarHome(){

   // Link Style
  let TextDecoration = {textDecoration:"none"} 

    return(
        
      //  Main Div
        <div className="Left">
                       
                               {/* Card Div    */}
                              <div className="upper-item">

                                    {/* Image and Name Div */}

                                        <NavLink to="/Politics">  
                                         <div className="image-name">
                                             <span><img src="https://th-i.thgim.com/public/opinion/lead/article22458274.ece/alternates/LANDSCAPE_1200/18THiStock-484604271" alt="img"/></span>
                                             <span>Politics</span>
                                         </div>
                                         </NavLink>

                                         <div className="image-name">
                                             <span><img src="https://ihplb.b-cdn.net/wp-content/uploads/2021/09/backwater-750x430.jpg" alt="img"/></span>
                                             <span>Visiting and Travel</span>
                                         </div>

                                         <div className="image-name">
                                             <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreOvB-dnNxnP_9JnU3pWqF8m-5JzuqqYmCg&usqp=CAU" alt="img"/></span>
                                             <span>Tecnology</span>
                                         </div>

                                         <div className="image-name">
                                             <span><img src="https://cdn-radiotime-logos.tunein.com/s226064g.png" alt="img"/></span>
                                             <span>Classic Rock Music</span>
                                         </div>

                                         <div className="image-name">
                                             <span><img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Santhome_Basilica.jpg" alt="img"/></span>
                                             <span>Catholic Churches</span>
                                         </div>

                                         <div className="image-name">
                                             <span><img src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2015/10/Europe-US-economies-copy.jpg" alt="img"/></span>
                                             <span>Europe and USA</span>
                                         </div>
                                      


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
        </div>
        
    )
}