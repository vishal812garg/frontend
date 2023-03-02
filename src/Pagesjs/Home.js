import "../Pagescss/Home.css";
import LeftSidebarHome from "../Componentjs/LeftSidebarHome";
import MainupperHome from "../Componentjs/MainupperHome";

export default function Home(){
    return(
        <>
          
            <div id="Mainbody">

                 <div id="body">

                       <div id="Lsidebar">
                            <LeftSidebarHome/>         
                       </div>

                       <div id="Mainupper">
                            <MainupperHome/>
                       </div>


                       <div id="Rsidebar">
                            <div>
                                 <img src="https://cdn.testbook.com/products/2022/July/26/__w-200-400-600__/Full-Stack-Development-Career-Program-(6-Months)_Course-Card.jpg.jpeg" alt="img"/>
                            </div>

                            <div>
                               <img src="https://cdn.testbook.com/products/2022/July/26/__w-200-400-600__/Full-Stack-Development-Career-Program-(6-Months)_Course-Card.jpg.jpeg" alt="img"/>
                            </div>        
                       </div>

                 </div>



            </div>
        </>
    )
}