// import { Link } from "react-router-dom";

import "../Componentcss/BellLeftSidebar.css";
export default function BellLeftSidebar(){

    let Item = ["All Notifications","Stories","Stories","Questions","Spaces","People updates",
                 "Comments and mentions"," Upvotes","Your content","Your profile","Your profile",
                 "Announcements","Earnings","Subscriptions"];
 
     return(
         
              //  Main Div
         <div className="BellsidebarLeft">
              <p>Filters</p>    
              <hr/> 
         {
             Item.map((item) => (
                 <>
                                {/* Card Div    */}
                               <div className="Bell-card">
 
                                     {/* Image and Name Div */}
                                     <div className="Bell-item">
                                           <span>{item}</span>
                                     </div>
 
                               </div>
                 </>                 
                     ))
                  }    
          </div>         
     )
  };                 
     
 