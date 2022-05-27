import './contacto.css'
const Contacto = ()=>{
    return (
        <div>
          <nav className="redes">
        <ul>
          <a href="asd">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="asd">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="asd">
            <i className="fab fa-twitter-square"></i>
          </a>
        </ul>
             
      </nav>
      <div className="direccion">
          <p><i className="fa-solid fa-location-dot"></i> Avenida siempre viva 123 - SALTA - ARGENTINA</p>
          <p><i className="fa-brands fa-whatsapp"></i> 3874543895</p>

        <h6>&copy;Copyright 2022</h6>

        </div>   
        </div>
    ) 
}

export default Contacto;