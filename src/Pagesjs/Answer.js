import "../Pagescss/Answer.css"
import AnswerLeftSidebar from "../Componentjs/AnswerLeftSidebar"
export default function Answer(){
    return(
        <>

         <div className="Main-Box">

               <div className="Main-body">

                     <div className="Lsidebar">
                          <AnswerLeftSidebar/>  
                     </div>

                     <div className="Body-Card">
                        
                        <div className="C">  

                            <div className="Image">
                                 <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="img"/>  
                            </div>

                            <div className="Heading">
                                <p>Answer Requests</p>
                            </div>

                            <div>
                                <span>Ask for answers from other users by clicking Request Answer on a question. Requests you receive will show up here.</span>
                            </div>

                            <div>
                                    <button type="button" className="btn btn-primary rounded-pill">See Top Questions</button>
                            </div>
                 
                        </div>

                     </div>

               </div>



         </div>


        </>
    )
}