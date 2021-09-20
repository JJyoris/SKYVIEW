import imgHistoria from "../assets/img-nh.png";
import imgOficina from "../assets/img-oc.png";
import imgGranjas from "../assets/img-ng.png"
import imgPlantas from "../assets/img-pi.png"
import imgProduccion from "../assets/img-pr.png"
import imgComunidad from "../assets/img-co.png"

const cardMapContent = [
  {
    label: "Nuestra Historia",
    body: "Nuestro camino comienza en el año 1955 con la producción de huevos frescos en una pequeña granja de Doñihue, en la region de O`Higgins. Con el paso del tiempo incorporamos la produccion de pollo, cerdo, salmones y mucho más, hasta construir las marcas que hoy todos conocen.",
    image: imgHistoria,
    id:"historia",
    link:"/historia"
  },
  {
    label: "Oficina Central",
    body: "Nuestras oficinas centrales están ubicadas en Doñihue. En este lugar se encuentra la mayoria de nuestros departamentos ejecutivos, desde donde controlamos aspectos de la producción, gestión y comunicación de cada una de las marcas de Agrosuper. En conjunto hoy día contamos con una dotación de más de 13.282 colaboradores. ",
    image: imgOficina,
    id:"oficina",
    link:"/oficina"

  },
  {
    label:"Nuestras Granjas",
    body:"Nuestros planteles de crianza cuentan con la más avanzada tecnología por que stamos 100% comprometidos con el bienestar animal, velando por el cumplimiento de las 5 libertades propuestas por la Organización Mundial de Sanidad Animal (OIE).",
    image: imgGranjas,
    id:"granjas",
    link:"/granja"
  },
  {
    label:"Plantas Industriales",
    body:"En nuestras fabricas ocurren todos los procesos industriales de nuestras diferentes áreas de negocio. Junto a lo lo último de la tecnologia de la mano con altos estandares de calidad nos permiten llevar a las mesas de Chile y el mundo la mejor proteina.",
    image: imgPlantas,
    id:"plantas",
    link:"/planta"
  },
  {
    label:"Producción Responsable",
    body:"Somos concientes que debemos hacernos responsables de los residuos de nuestra producción. Es por ello que contamos con plantas de tratamientos para desechos solidos y líquidos que nos permiten reducir nuestras emisiones y de paso ayudar a la comunidad con el producto útil del tratamiento de estos elementos. ",
    image: imgProduccion,
    id:"produccion",
    link:"/produccion"
  },
  {
    label:"Comunidad",
    body:"Somos orgullosos del entorno al que pertenecemos y como nos relacionamos con nuestras comunidades. A traves de diferentes programas buscamos ayudar y aportar nuestro grano de arena en el desarrollo de la sociedad en su conjunto y sobre todo de aquellos que más lo necesitan.",
   image: imgComunidad,
   id:"comunidad",
   link:"/comunidad"
  },

];
export default cardMapContent;
