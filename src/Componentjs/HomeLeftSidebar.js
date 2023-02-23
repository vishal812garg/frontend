import { Link } from "react-router-dom";
import  "../Componentcss/HomeLeftSidebar.css";

export default function HomeLeftSidebar(){
   // Link Style
  let TextDecoration = {textDecoration:"none"} 

   // Left Sidebar Card
  let Topic = [
     {
         image: "https://th-i.thgim.com/public/opinion/lead/article22458274.ece/alternates/LANDSCAPE_1200/18THiStock-484604271",
         name: "Politics" 
     },

     {
        image:"https://ihplb.b-cdn.net/wp-content/uploads/2021/09/backwater-750x430.jpg",
        name:"Visiting and Travel"
     },

     {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreOvB-dnNxnP_9JnU3pWqF8m-5JzuqqYmCg&usqp=CAU",
        name: "Tecnology"
     },

     {
        image:"https://cdn-radiotime-logos.tunein.com/s226064g.png",
        name:"Classic Rock Music"
     },

     {
        image:"https://upload.wikimedia.org/wikipedia/commons/a/aa/Santhome_Basilica.jpg",
        name:"Catholic Churches"
     },

     {
        image: "https://knowledge.wharton.upenn.edu/wp-content/uploads/2015/10/Europe-US-economies-copy.jpg",
        name:"Europe and USA"
     }
  ]

    return(
        
      //  Main Div
        <div className="Left">
        {
            Topic.map((item) => (
               <>
                       
                               {/* Card Div    */}
                              <div className="Leftcard">

                                    {/* Image and Name Div */}
                                    <div className="image-name">
                                         <img src={item.image} alt="img"/>
                                         <span>{item.name}</span>
                                    </div>

                              </div>
                </>                 
                    ))
                 }
               
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
        </div>
        
    )
}