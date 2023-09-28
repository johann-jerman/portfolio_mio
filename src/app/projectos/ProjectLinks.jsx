import { cssIcon, htmlIcon, jsIcon, reactIcon } from "@/app/icons/icons";

const baseUrl = "/projectos/";
const baseImg = "/project/";
export const projectLinks = [
  {
    name: "memotest",
    url: `${baseUrl}memotest`,
    img: `${baseImg}memotest.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {htmlIcon}
        </i>,
        <i key={1} className="mx-2">
          {cssIcon}
        </i>,
        <i key={1} className="mx-2">
          {jsIcon}
        </i>,
        <i key={1} className="mx-2">
          {reactIcon}
        </i>,
      ],
      description:
        "Mi proyecto es una replica del tipico juego de memoria donde tenemos que conseguir emparejas las parejas de fichas, el objetivo del juego es que la totalidad de las fichas esten dadas vuelta",
    },
  },
  {
    name: "pokedex",
    url: `${baseUrl}pokedex`,
    img: `${baseImg}pokedex.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {htmlIcon}
        </i>,
        <i key={1} className="mx-2">
          {cssIcon}
        </i>,
        <i key={1} className="mx-2">
          {jsIcon}
        </i>,
        <i key={1} className="mx-2">
          {reactIcon}
        </i>,
      ],
      description:
        "Mi proyecto es una Pokédex en línea desarrollada con la PokeAPI. Ofrece información detallada, búsqueda avanzada, imágenes, movimientos y más para todos los Pokémon. Diseño responsivo y actualizaciones constantes. ¡Explora el mundo Pokémon en un solo lugar!",
    },
  },
  {
    name: "todo",
    url: `${baseUrl}todo`,
    img: `${baseImg}todo2.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {htmlIcon}
        </i>,
        <i key={1} className="mx-2">
          {cssIcon}
        </i>,
        <i key={1} className="mx-2">
          {jsIcon}
        </i>,
        <i key={1} className="mx-2">
          {reactIcon}
        </i>,
      ],
      description:
        "Mi proyecto es una una aplicacion basica donde podes anotar tareas que tenes que realizar, con la capacidad de crear barias tareas y eliminarlas una vez que ya las allas finalizado",
    },
  },
];
