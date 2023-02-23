import Modal from "./ShowModal";
import "../Componentcss/SpacesBody.css";
export default function SpacesBody(){
      
    let Items = [
        {
          Bigimage:"https://www.nitinbang.com/wp-content/uploads/2016/07/general-knowledge.jpg",
          Smallimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_KTJduv0oRYeISILcb8xSoNtHz84xjS3gamUvtepqfQTOpmYN2KBZhAsE3vWHFrmQP0&usqp=CAU",
          Heading:"General knowledge",
          Pera:"A space which enables our knowledge."
        },
        {
          Bigimage:"https://i0.wp.com/focusnews.in/wp-content/uploads/2023/01/As-the-chatgpty-craze-is-growing-competitors-have-come-up.jpg?resize=350%2C200&ssl=1",
          Smallimage:"https://qph.cf2.quoracdn.net/main-thumb-ti-3549702-200-vuaptewjbzrdbhpegzqqyfiokbxhghfd.jpeg",
          Heading:"ChatGPT Community",
          Pera:"The space is focused on discussing & sharing knowledge about ChatGPT OpenAI."
        },
        {
          Bigimage:"https://www.firstrankseoservices.com/blog/wp-content/uploads/2021/11/BT-Digital-Marketing-HUB.jpg",
          Smallimage:"https://digitalhubsolution.com/front/images/loader.gif",
          Heading:"Digital Marketing Hub",
          Pera:"Share Your Digital Marketing Related stuff Here.."
        },
        {
          Bigimage:"https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=999&h=562&crop=1",
          Smallimage:"https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?w=2000",
          Heading:"YouTube ♧ promote",
          Pera:"You can promote your YouTube videos and channel."
        },
        {
          Bigimage:"https://static.toiimg.com/thumb/resizemode-4,msid-92392625,width-1200,height-900/92392625.jpg",
          Smallimage:"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/cc/99/19/cc9919be-34f8-b717-368b-a4233328248c/Prod-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png",
          Heading:"Get Insta Followers",
          Pera:"This Space for Instagram Releted Contents and Share Your Insta ID & Stories"
        },
        {
          Bigimage:"https://im.hunt.in/cg/iol//about/profile/politics/Politics-in-India.jpg",
          Smallimage:"https://cdn.slidesharecdn.com/ss_thumbnails/fcpresentationsem1-171003154815-thumbnail.jpg?width=640&height=640&fit=bounds",
          Heading:"Indian - Politics",
          Pera:"Jay Hind"
        },
        {
          Bigimage:"https://study.com/cimages/course-image/virginia-sol-world-history-geography-to-1500-test-prep-practice_217975_large.jpg",
          Smallimage:"https://thumbs.dreamstime.com/z/world-history-concept-design-vector-illustration-decorative-192493107.jpg",
          Heading:"World History",
          Pera:"My answers on World History here"
        },
        {
          Bigimage:"https://www.shutterstock.com/image-vector/learn-english-word-cloud-concept-260nw-414369976.jpg",
          Smallimage:"https://thumbs.dreamstime.com/z/english-colored-rainbow-word-text-suitable-logo-design-card-brochure-typography-127992761.jpg",
          Heading:"English words",
          Pera:"A platform where get a new english word to learn daily"
        }
    ]
    return(
        <>
         
         <div id="h-p">
           <h4>Discover Spaces</h4>

           <p>Spaces you might like</p>
         </div>
 
          <div id="Spaces-main-box">

            <div id="id">

             {
              Items.map((item)=>(
                      

                             <div>
                                   
                                   <div id="Spaces-card-box">

                                        <div id="Big-Small">
                                            <span><img src={item.Bigimage} alt="img"  id="Img-a"/></span><br/>
                                            <span><img src={item.Smallimage} alt="img" id="Img-b"/></span>
                                        </div>

                                        <span>{item.Heading}</span>

                                        <div>
                                            <p>{item.Pera}</p>
                                            <Modal/> 
                              <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ask</div>
                                        </div>

                                   </div>

                             </div>     


                    
              ))
             }
             </div>


        </div>
           
        </>
    )
}