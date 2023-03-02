
import HomeLeftSidebar from "../Componentjs/LeftSidebarHome";
import FollowingBody from "../Componentjs/FollowingBody"; 
export default function Following(){
    return(
        <>

         <div id="Mainbody">

               <div id="body">

                     <div id="Lsidebar">
                          <HomeLeftSidebar/>         
                     </div>

                     <div id="card-body">
                          <FollowingBody/>
                     </div>

               </div>



         </div>


        </>
    )
}