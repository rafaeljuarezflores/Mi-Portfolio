import '../styles/Presentacion.scss';
import perfil from '../images/perfil4.jpg';
import linkedin from '../images/icons/Linkedin.png';
import github from '../images/icons/GitHub-Light.png';

function Presentacion() {

    return (
        <div className='presentacion' id='presentacion'>
            <img id='image_perfil' src={perfil} alt="" width="210px" />
            <div id='columna1'>
                <h2 id='titulo_presentacion'>Hola, soy <span id='nombre_presentacion'>rafael juarez flores</span></h2>
                <h2 id='subtitulo_presentacion'>Programador Full-Stack</h2>
                <p id='parrafo_presentacion'>+3 años inmerso en la creación de diversos proyectos web. <br /> <br />
                Me apasiona el mundo de la programación y el poder crear todo tipo de software a traves de este, ya que me parece muy interesante el poder diseñar la parte visual de una página web, ademas de contribuir a crear y editar la lógica del servidor al desarollar un proyecto.
                </p>
                
                <div id='content_bottoms_presentacion'>
                    <a href='mailto:rafeljuarezflores@gmail.com' id='contacto'>Contáctame</a>
                    <a href="https://github.com/rafaeljuarezflores" target='blank'><img src={github} alt="linkedin" /></a>
                    <a href="https://www.linkedin.com/in/rafael-juarez-flores-6b524620a" target='blank'><img src={linkedin} alt="linkedin" id='linkedin' /></a>
                </div>
            </div>
        </div>
    )

}

export default Presentacion;
