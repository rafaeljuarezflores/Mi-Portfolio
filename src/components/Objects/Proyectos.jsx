import catmania from '../../images/trabajos/catmania.png'
import bicaicle from '../../images/proyectos/bicaicle.png';
import myguitars from '../../images/proyectos/myguitarss.es.png';
import PonchosTrujillo from '../../images/proyectos/ponchos-trujillo.png';
import React from '../../images/icons/React-light.svg';
import Astro from '../../images/icons/Astro.svg';
import CSS from '../../images/icons/CSS.svg';
import Sass from '../../images/icons/Sass.svg';
import Tailwind from '../../images/icons/TailwindCSS-Light.svg';
import JavaScript from '../../images/icons/JavaScript.svg';
import Html from '../../images/icons/Html.svg';
import Docker from '../../images/icons/Docker.svg';
import Bootstrap from '../../images/icons/Bootstrap.svg';
import php from '../../images/icons/PHP-Light.svg';


let Object_Proyectos = () => {

    let proyectos = [
        {
            id: 1,
            title: 'Bicaicle',
            desc: 'Bicaicle es una landing page sobre información, mantenimiento y accesorios de bicicletas.',
            img: bicaicle,
            skills: [Html, CSS, JavaScript],
            link: 'https://practicas.pipote.es',
        },
        {
            id: 2,
            title: 'Catmania',
            desc: 'catmania es una página web de ventas de nfts y videojuegos para la obtención de tokens.',
            img: catmania,
            skills: [React, Sass, Docker],
            link: 'https://catmania.io/',
        },
        {
            id: 3,
            title: 'Myguitars',
            desc: 'Myguitars es un e-comerce con ventas de diversos tipos de guitarras y articulos para este.',
            img: myguitars,
            skills: [Astro, Tailwind],
            link: 'https://myguitars.com',
        },
        {
            id: 4,
            title: 'Ponchos Trujillo',
            desc: 'Ponchos trujillo son una e-comerce de venta de ponchos artesanales a un público intenacional.',
            img: PonchosTrujillo,
            skills: [php, Bootstrap],
            link: 'https://ponchos-trujillos.vercel.app',
        },
    ];

    return proyectos

}

export default Object_Proyectos;