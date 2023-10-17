import Next from "../icons/Next";
import React from "../icons/React";
import JavaScript from "../icons/JavaScript";
import Css from "../icons/CSS";
import HTML from "../icons/HTML";
import TailwndCss from "../icons/TailwndCss";

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
          {<HTML />}
        </i>,
        <i key={1} className="mx-2">
          {<Css />}
        </i>,
        <i key={1} className="mx-2">
          {<JavaScript />}
        </i>,
        <i key={1} className="mx-2">
          {<React />}
        </i>,
        <i key={1} className="mx-2">
          {<TailwndCss />}
        </i>,
        <i key={1} className="mx-2">
          {<Next />}
        </i>,
      ],
      description:
        "Replica del tipico juego de memoria donde tenemos que conseguir emparejas las parejas de fichas, el objetivo del juego es que la totalidad de las parejas de fichas esten dadas vuelta",
    },
  },
  {
    name: "pokedex",
    url: `${baseUrl}pokedex`,
    img: `${baseImg}pokedex.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {<HTML />}
        </i>,
        <i key={1} className="mx-2">
          {<Css />}
        </i>,
        <i key={1} className="mx-2">
          {<JavaScript />}
        </i>,
        <i key={1} className="mx-2">
          {<React />}
        </i>,
        <i key={1} className="mx-2">
          {<TailwndCss />}
        </i>,
        <i key={1} className="mx-2">
          {<Next />}
        </i>,
      ],
      description:
        "Proyecto de una Pokédex en línea desarrollada con la PokeAPI. Ofrece información detallada, búsqueda avanzada, imágenes, movimientos y más para todos los Pokémon. ¡Explora el mundo Pokémon en un solo lugar!",
    },
  },
  {
    name: "todo",
    url: `${baseUrl}todo`,
    img: `${baseImg}todo2.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {<HTML />}
        </i>,
        <i key={1} className="mx-2">
          {<Css />}
        </i>,
        <i key={1} className="mx-2">
          {<JavaScript />}
        </i>,
        <i key={1} className="mx-2">
          {<React />}
        </i>,
        <i key={1} className="mx-2">
          {<TailwndCss />}
        </i>,
        <i key={1} className="mx-2">
          {<Next />}
        </i>,
      ],
      description:
        "Proyecto basico donde podes anotar tareas que tenes que realizar, con la capacidad de crear barias tareas y eliminarlas una vez que ya las allas finalizado",
    },
  },
];
