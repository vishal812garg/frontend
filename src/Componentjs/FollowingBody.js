import "../Componentcss/FollowingBody.css";

export default function FollowingBody(){
  
    let Item = [
       {
        image:"https://qph.cf2.quoracdn.net/main-thumb-ti-3549702-200-vuaptewjbzrdbhpegzqqyfiokbxhghfd.jpeg",
        name:"ChatGPT Community",
        follow:"16.7k followers",
        pera:"The space is focused on discussing & sharing knowledge about ChatGPT OpenAI."
       },
       {
        image:"https://m.media-amazon.com/images/I/5181CJjeQjL.png",
        name:"General knowledge",
        follow:"22.4k followers",
        pera:"A space which enables our knowledge."
       },
       {
         image:"https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Brain%20banner.jpg?itok=03s8CBUA",
         name:"How To Use The Brain",
         follow:"18.6k followers",
         pera:"Psychology, Motivation, Self-help, Thinking, & Learning (Science & Experiences)"    
       },
       {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMuG50cwg7R__FtBAkKcyTwrt5yAD1OqgAw&usqp=CAU",
        name:"English words",
        follow:"12.9k followers",
        pera:"A platform where get a new english word to learn daily"    
      },
      {
        image:"https://assets.website-files.com/621ca7b6009267905d98302b/6262c9802f96512de3f6d46f_624f206a42b03b4128e4da87_61e6f86ce59a17b6dc3f5eca_improving-communication.jpeg",
        name:"Communication Skills",
        follow:"19.4k followers",
        pera:"Share your experiences to deal with people."    
      },
      {
        image:"https://history.ufl.edu/wp-content/uploads/sites/113/2013/11/world-history-banner1.jpg",
        name:"World History",
        follow:"25.1k followers",
        pera:"My answers on World History here"    
      } 
    ]


    return(

        <div className="main-box">
           <h4>Discover Spaces</h4>
           <p>Spaces you might like</p>
        <>
            {
                Item.map((item)=>(
                    
                    <div className="body-box">
                           <div className="upper-body-box">
                                 
                                  <div>
                                      <img src={item.image} alt="img"/>
                                  </div>

                                  <div>
                                      <span className="name">{item.name}</span><br/>
                                      <span className="follow">{item.follow}</span>
                                  </div>  

                           </div>

                           <div className="lower-body-box">
                                 <p>{item.pera}</p>       
                           </div>

                    </div> 
                ))
            }
             

        </>
        </div>
    )
}