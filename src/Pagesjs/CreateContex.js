import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

function ThemProvider({ children }){
   let [theme, setThem] = useState("white"); 
   let [font, setFont] = useState("black");

   return(
       <ThemeContext.Provider value={{theme, setThem, font, setFont}}>{ children }</ThemeContext.Provider> 
   )  
}

const useThem = () => useContext(ThemeContext);


export { ThemProvider, useThem };