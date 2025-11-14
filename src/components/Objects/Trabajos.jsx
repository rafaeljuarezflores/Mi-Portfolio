import vaelsys from '../../images/trabajos/Vaelsys-Lat.png'
import tnllogistica from '../../images/trabajos/tnllogistica.png'
import nubemedia from '../../images/trabajos/nubemedia.png'
import ReformasEgoavil from '../../images/proyectos/reformasegoavil.es.png';
import React from '../../images/icons/React-light.svg';
import Astro from '../../images/icons/Astro.svg';
import Bootstrap from '../../images/icons/Bootstrap.svg';
import CSS from '../../images/icons/CSS.svg';
import Wordpress from '../../images/icons/Wordpress.svg';
import Sass from '../../images/icons/Sass.svg';
import php from '../../images/icons/PHP-Light.svg';
import Tailwind from '../../images/icons/TailwindCSS-Light.svg';
import TypeScript from '../../images/icons/TypeScript.svg';
import JavaScript from '../../images/icons/JavaScript.svg';

let Object_Trabajos = () => {

    let trabajos = [
        {
            id: 1,
            title: 'Vaelsys',
            desc: 'Es una página web que ofrece servicios de videovigilancia a españa y latinoamérica.',
            img: vaelsys,
            skills: [Wordpress, CSS,php],
            link: 'https://vaelsys.lat',
        },
        {
            id: 2,
            title: 'TNL Logistica',
            desc: 'Empresa de transporte especializado, logística nacional y servicios aeroportuarios.',
            img: tnllogistica,
            skills: [Astro, Sass, Tailwind],
            link: 'https://tnllogisticaaereoportuaria.github.io/',
        },
        {
            id: 3,
            title: 'Reformas Egoavil',
            desc: 'Landing page de una empresa dedicada a las reformas y servicios del hogar.',
            img: ReformasEgoavil,
            skills: [React, TypeScript, Sass],
            link: 'https://catmania.io',
        },
        {
            id: 4,
            title: 'Nubemedia',
            desc: 'nubemedia es un e-comerce de servicios de marketing digital.',
            img: nubemedia,
            skills: [Astro,Bootstrap, JavaScript],
            link: 'https://nubemedia.com',
        },
    ];

    return trabajos

}

export default Object_Trabajos;