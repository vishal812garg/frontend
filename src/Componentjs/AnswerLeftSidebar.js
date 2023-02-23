import "../Componentcss/AnswerLeftSidebar.css"

export default function AnswerLeftSidebar(){

   let Item = ["Questions for you", "Answer requests","Drafts"];

    return(
        
             //  Main Div
        <div className="sidebarLeft">
             <p>Questions</p>    
             <hr/> 
        {
            Item.map((item) => (
                <>
                               {/* Card Div    */}
                              <div className="card">

                                    {/* Image and Name Div */}
                                    <div className="item">
                                         <span>{item}</span>
                                    </div>

                              </div>
                </>                 
                    ))
                 }    
         </div>         
    )
 };                 
    
