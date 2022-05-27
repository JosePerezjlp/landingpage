import './nosotros.css'
import ubicacion from '../../assets/img/ubicacion.png';
const Nosotros = ()=>{
    return (
        <div className="nosotros">
            <h1>Nosotros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere placerat magna, nec suscipit dolor posuere et. Fusce suscipit eros in ultricies tincidunt. Vestibulum tincidunt blandit dui vel fermentum. Nunc aliquet efficitur metus, et viverra lectus luctus pharetra. Nullam efficitur posuere arcu, et cursus ante pretium at. Sed euismod leo in felis tristique aliquam. Morbi vel libero eget turpis venenatis aliquet. Integer ac laoreet sem, sed auctor lectus. Donec a odio et enim viverra aliquet. Aenean rhoncus felis vel risus ultricies ornare. Vestibulum eu facilisis enim. Integer nec lectus at leo ultricies porta. Praesent risus ipsum, aliquam eu maximus sed, rutrum at nulla. Vivamus et pellentesque eros. Fusce ligula dolor.</p>
            <img src={ubicacion} alt="asd"/>
        </div>
    ) 
}

export default Nosotros;