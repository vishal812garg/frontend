import LeftSidebarHome from "../LeftSidebarHome";
import "../Componet Leftsidebar/Politics.css";
export default function Politics(){
    return(
        <>  

        <div id="Mainbody">

                 <div id="body">

                       <div id="Lsidebar">
                            <LeftSidebarHome/>         
                       </div>

                       <div id="Mainupper">

                            <div id="image-Heading">
                                 <span><img src="https://th-i.thgim.com/public/opinion/lead/article22458274.ece/alternates/LANDSCAPE_1200/18THiStock-484604271"alt="img"/></span>
                                 <span><h4>Politics</h4></span>
                            </div>

                            <div id="spaces-legend-image">
                                <div id="spaces"><p>Spaces related to Politics</p></div>
                                
                                <div className="legend-image">
                                     <div><img src="https://sfvhs.com/wp-content/uploads/elementor/thumbs/urban-legends-ozfojrfm1ga88c0qslaqsgrjag7gdhgs09opm089wq.jpg" alt="img"/></div>
                                     <div className="h-p">
                                          <h6>Legend's Fact</h6>
                                          <p>Knowledge makes a perfect man</p>
                                     </div>    
                                </div>

                                <div className="legend-image">
                                     <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_7TATi2ggSLrk6eKtHFY3kV_qlxbrFFrbw&usqp=CAU" alt="img"/></div>
                                     <div className="h-p">
                                          <h6>Democracy and Politics</h6>
                                          <p>Democracy and Politics</p>
                                     </div>
                                </div>

                                <div className="legend-image">
                                     <div><img src="https://upload.wikimedia.org/wikipedia/en/a/a5/An_Encyclopedia_of_World_History_%281948_edition%29.jpg" alt="img"/></div>
                                     <div className="h-p">
                                          <h6>World History</h6>
                                          <p>My answers on World History here</p>
                                     </div>
                                </div>
                            </div>

                       </div>

                   </div>
        </div>

        </>
    )
}