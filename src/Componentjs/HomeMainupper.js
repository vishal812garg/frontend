import "../Componentcss/HomeMainupper.css"
// import { NavLink } from "react-router-dom"
import Modal from "./ShowModal"
export default function HomeMainupper(){
      // Cards
      let info = [
     {
        nameimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGrsutX0Cc6AqQ0SAG8W7rmUPset21613jQ&usqp=CAU",
        name:"Amazon Web Services (AWS)",
        Sponsored:"Sponsored",
        pera:`Build & train machine learning models fast. Get started for free.
              AWS removes the complexity of building, training, and deploying machine learning models at any scale.`,
        lowerimage:"https://www.veritis.com/wp-content/uploads/2018/12/AWS-cloud-migration-tools-and-services.jpg"
     },
     {
        nameimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Tbl_T2OdXP9x4QqcEdW5bnf8XIqJOBAEXu-XeeKYpmYRUeC2dgsidX21jFL3295q9gU&usqp=CAU",
        name:"Divi",
        Sponsored:"Sponsored",
        pera:`This changes everything! Explore the future of WordPress.
              There is a reason why Divi has become the most popular WordPress theme in the world. Find out why.`,
        lowerimage:"https://edyrecommends.b-cdn.net/wp-content/uploads/2021/07/Divi-Responsive-Helper-2-1024x559.jpg"
     },
     {
        nameimage:"https://play-lh.googleusercontent.com/deyz04czPzpKP09vrklnBHU4S-gT_o6wLt2jCZeeifdh53VW6YfBffj8bEPh4xzG6A",
        name:"Grammarly",
        Sponsored:"Sponsored",
        pera:`Free English writing tool.
              Write in clear, mistake-free English with our free writing app. Try now!`,
        lowerimage:"https://i.ytimg.com/vi/scZVLCB1aX0/maxresdefault.jpg"
     }
   ]
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
                        <div id="font">
                              <Modal/> 
                              <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ask</div>
                              <div ><i className="fa-solid fa-pen-to-square"></i>Answer</div>
                              <div ><i className="fa-solid fa-pen"></i>Post</div>
                              
                        </div>
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

        </>
    )
}