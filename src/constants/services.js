import React from 'react'
import {FaCode, FaSketch,FaUserFriends} from 'react-icons/fa'

export default [
    {
        id: 1,
        icon: <FaSketch className="service-icon"/>,
        title: "Diseño web",
        text: `Te ayudo a crear tu sitio web o tienda online todo pensado en tener resultados en ventas, contactame para darte una solución personalisada y no un plan generico.`,
    },
    {
        id: 2,
        icon: <FaCode className="service-icon"/>,
        title: "Programación",
        text: `Desarrollo de aplicaciones web asi como soporte técnico si ya tienes una app funcionando.`,
    },
    {
        id: 3,
        icon: <FaUserFriends className="service-icon"/> ,
        title: "Consultoria",
        text: `Asesoro emprendedores en temas de marketing digital, negocios online y programación, puede ser via videollamada o presencial para equipos o individual. También doy conferencias para empresas y universidades.`,
    },
]