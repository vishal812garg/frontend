
import "../Pagescss/Bell.css";
import BellLeftSidebar from "../Componentjs/BellLeftSidebar"
export default function Bell(){
    return(
        <>

         <div className="Bell-Main-Box">

               <div className="Bell-Main-body">

                     <div className="Lsidebar">
                          <BellLeftSidebar/>     
                     </div>

                     <div className="Bell-Body-Card">
                        
                        <div className="Bell-C">  

                            <div className="Image">
                                 <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.no_notification_lightmode.png-26-9e0ef76620dd73d3.png" alt="img"/>  
                            </div>

                            <div className="Heading">
                                <p>No New Notifications</p>
                            </div>

                            <div>
                                <span>Notifications you received in the last 30 days will show up here.</span>
                            </div>

                 
                        </div>

                     </div>

               </div>



         </div>


        </>
    )
}