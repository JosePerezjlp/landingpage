import './navbar.css'
import {useState} from "react";
const NavBar = ()=>{
    const [isdisabled,setIsDisabled]= useState(false); 

    const animacionActiva = ()=>{
        setIsDisabled(!isdisabled)
    }
    return(
        <div>
        <button type="button" onClick={animacionActiva}>
           <div className={isdisabled? "linedos":"line"}><span ></span></div>
            <span className={isdisabled?"cancel":"line"}></span>
           <div className={isdisabled? "linetres":"line"}> <span></span></div>
                        
        </button>
        <div className={isdisabled? "menucontenedor":"menucontenedortwo"}>
        <a href='dsd'>Inicio</a>
        <a href='dsd'>Nosotros</a>
        <a href='dsd'>Contacto</a>
        </div>
        </div>
    )
}
export default NavBar;