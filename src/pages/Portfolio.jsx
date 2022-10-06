import catmania from '../images/catmania.png'
import lizmandala from '../images/lizmandala.png'
import LizYoga from '../images/lizyoga.png'
import ponchos from '../images/ponchos-trujillo.png'
import myguitars from '../images/myguitarss.es.png'
import '../styles/Portfolio.scss'

function Portfolio(){
    return(
        <div className="contenedor-portfolio">
            <div>
                <img src={ponchos}/>
                <p><a href="https://ponchos-trujillos.vercel.app" target="_blank">Ponchos-trujillos.com</a> es un e-commerce creada con react de productos relacionados a ponchos de distintos paises de latinoamerica, principalmente son ponchos fabricados en los andes peruanos y construida a travez de lana de piel de alpaca, en esta página puedes navegar y seleccionar el poncho que desea, ya que es muy facil de utilizar, debido al diseño simple y elgante de la página.</p>
            </div>
            <div>
                <img src={myguitars}/>
                <p><a href="https://myguitars637952.live-website.com" target="_blank">myguitars.es</a> es un e-commerce creado en wordpress utilizando plugins como Elementor y WooCommerce lo que permitió crear esta página web en un par de horas,debido a la simplicidad de la página, aún así la página web tiene un diseño amigable y permite una interacción simple para que los usuarios puedan adquirir la guitarra que desean de forma sencilla.</p>
            </div>
            <div>
                <img src={LizYoga}/>
                <p><a href="https://liz-yoga.vercel.app" target="_blank">LizYoga.com</a> es una página web creada con react instructiva sobre yoga  en el cual podemos obtener toda clase de información referente a yoga , ademas de ponernos en contacto para poder recibir clases de yoga personalizados.
                La página cuenta con un diseño minimalista en tonos rozas que trasmite mucha paz y tranquilidad al navegar por este, ademas de ser un diseño elegante creado por rafael juarez flores.</p>
            </div>
            <div>
                <img src={catmania}/>
            <p><a href="https://catmania.io" target="_blank">catmania.io</a> es una aplicación web, el cual trata de un videojuego online que consta de nfts en la cual los usuarios compran, venden e intercambiaban nfts los cuales en su mayoria eran imagenes de gatos, el cual acumulaba tokens al jugar con ellos, lo cual incrementaba el valor de los nfts para luego poder venderlo, intercambarlo o retirar tus ingresos , a traves del sistema de criptomonedas de MetaMask, el cual consiste en un monedero que almacena las criptomonedas acumuladas debido a los nfts.</p>
            </div>
            <div>
                <img src={lizmandala}/>
            <p><a href="https://lizmandala.com" target="_blank">Lizmandala.com</a> es una página web orientada a la espiritualidad de las personas y ayudarlos con algunas posiciones de yoga , bienestar y salud para mejorar la vida de sus usuarios, el diseño de esta página es totalmente responsiva y trata de varios componentes organizadas con CSS-Grid, ademas del logo giratorio que se encuentra en medio, debajo del navbar.</p>
            </div>
        </div>
    )
}

export default Portfolio;