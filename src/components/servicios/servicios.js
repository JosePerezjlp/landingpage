import "./servicios.css";
import masajes from "../../assets/img/masajes.jpg";
import depilacion from "../../assets/img/depilacion.jpeg";
import yoga from "../../assets/img/yoga.jpg";
import exfoliantes from "../../assets/img/exfoliantes.jpg";

const Servicios = () => {
  return (
    <div className="fondo">
        <h1>Nuestro Servicios</h1>
      <div className="contenedorBox">
        <div
          className="contenedor"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="masajes">Masajes corporales</h3>
          <img src={masajes} alt="ss" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere mauris metus. Ut purus quam, ultricies non nulla eget, condimentum facilisis orci. Phasellus quam est, lobortis sit amet imperdiet ac.

</p>
        </div>
        <div
          className="contenedor"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="depilacion">Depilación definitiva</h3>
          <img src={depilacion} alt="ss" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere mauris metus. Ut purus quam, ultricies non nulla eget, condimentum facilisis orci. Phasellus quam est, lobortis sit amet imperdiet ac.

</p>
        </div>
        <div
          className="contenedor"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h3>Ejercicios de relajación</h3>
          <img src={yoga} alt="ss" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere mauris metus. Ut purus quam, ultricies non nulla eget, condimentum facilisis orci. Phasellus quam est, lobortis sit amet imperdiet ac.

</p>
        </div>
        <div
          className="contenedor"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h3>Tratamiento facial</h3>
          <img src={exfoliantes} alt="ss" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere mauris metus. Ut purus quam, ultricies non nulla eget, condimentum facilisis orci. Phasellus quam est, lobortis sit amet imperdiet ac.

</p>
        </div>
      </div>
    </div>
  );
};
export default Servicios;
