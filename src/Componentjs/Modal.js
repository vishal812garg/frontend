import { useModal } from "./ModalContex";
import { useState } from "react";

export default function Modal(){
  
   const {info, setInfo} = useModal();


let [ nameimage, setNameimage] = useState("");
let [ name, setName] = useState("");
let [ Sponsored, setSponsored] = useState("");
let [ pera, setPera] = useState("");
let [ lowerimage, setLowerimage] = useState("");

let Information = () => {
  let obj = {
        nameimage:nameimage,
        name:name,
        Sponsored:Sponsored,
        pera:pera,
        lowerimage:lowerimage
  }
  
  let newValue = [...info, obj];
  
  setInfo(newValue);

  setNameimage("");
  setName("");
  setSponsored("");
  setPera("");
  setLowerimage("");
  }

    return(
     <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

               
                    <input type="text" value={nameimage} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Leftimage" onChange={(e)=> setNameimage(e.target.value)}/><br/>
                    <input type="text" value={name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="name" onChange={(e)=> setName(e.target.value)}/><br/>
                    <input type="text" value={Sponsored} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder=" Sponsored" onChange={(e)=> setSponsored(e.target.value)}/><br/>
                    <input type="text" value={pera} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Pera" onChange={(e)=> setPera(e.target.value)}/><br/>
                    <input type="text" value={lowerimage} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Image" onChange={(e)=> setLowerimage(e.target.value)}/>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={Information}>Post</button>
          </div>
        </div>
      </div>
    </div>
 </div>

</>

    )
}