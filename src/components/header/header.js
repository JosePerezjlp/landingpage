import "./header.css";
import NavBar from "../navbar/navbar";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";

const Header = () => {
    const [cheked,setCheked]= useState(false);
    useEffect(()=>{
        setCheked(true);
    },[])
  return (
    <div className="contenedorHeader">
      <div>
        <div className="tittle">
          <h1>Shalala</h1>
        </div>
        <div className="nav">
          <NavBar />
        </div>
      </div>

      
      <div className="welcome" data-aos="fade-up">
        <h1>Bienvenidos a <br/> <span>Shalala</span></h1>
        <ArrowDownwardIcon className="arrow" />
      </div>
      
    </div>
  );
};

export default Header;
