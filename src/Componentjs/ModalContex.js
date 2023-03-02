import { createContext, useContext, useState } from "react";

const Context = createContext();

 function ModalProvider({children}){

let [ nameimage, setNameimage] = useState("");
let [ name, setName] = useState("");
let [ Sponsored, setSponsored] = useState("");
let [ pera, setPera] = useState("");
let [ lowerimage, setLowerimage] = useState("");

let [info, setInfo] = useState([
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
])


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
}

    return(
            <Context.Provider value={{info, setInfo}}>{children}</Context.Provider>
    )
}

const useModal = () => useContext(Context);

export {useModal, ModalProvider};
