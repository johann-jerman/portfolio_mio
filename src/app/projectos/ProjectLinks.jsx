import Next from "../icons/Next";
import React from "../icons/React";
import JavaScript from "../icons/JavaScript";
import Css from "../icons/CSS";
import HTML from "../icons/HTML";
import TailwndCss from "../icons/TailwndCss";
import Express from "../icons/Express";
import Node from "../icons/Node";
import SocketIo from "../icons/Socket";
import Postgres from "../icons/Postgres";
import Docker from "../icons/Docker";
import Swagger from "../icons/Swagger";

const baseUrl = "/projectos/";
const baseImg = "/project/";
export const projectLinks = [
  // {
  //   name: "Fake Store Doc.",
  //   url: `${baseUrl}fakestore.doc`,
  //   img: `${baseImg}tateti.png`,
  //   data: {
  //     tecnologies: [
  //       <i key={1} className="mx-2">
  //         {<Node />}
  //       </i>,
  //       <i key={1} className="mx-2">
  //         {<Express />}
  //       </i>,
  //       <i key={1} className="mx-2">
  //         {<Postgres />}
  //       </i>,
  //       <i key={1} className="mx-2">
  //         {<Docker />}
  //       </i>,
  //     ],
  //     description:
  //       "Tateti Challenge es un emocionante juego en línea que te permite poner a prueba tus habilidades en el clásico juego de Tateti contra un amigo en tiempo real. Este juego no solo te permite competir para demostrar quién es el mejor jugador en el tablero de 3x3, sino que también te brinda la oportunidad de interactuar y conversar con tu amigo a través de un chat en vivo mientras juegan",
  //   },
  // },
  {
    name: "Fake Store Doc.",
    url: process.env.API || `https://fakestore-e4ew.onrender.com/api/docs/`,
    img: `${baseImg}fakestore.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {<Node />}
        </i>,
        <i key={1} className="mx-2">
          {<Express />}
        </i>,
        <i key={1} className="mx-2">
          {<Postgres />}
        </i>,
        <i key={1} className="mx-2">
          {<Docker />}
        </i>,
        <i key={1} className="mx-2">
          {<Swagger />}
        </i>,
      ],
      description:
        "Tateti Challenge es un emocionante juego en línea que te permite poner a prueba tus habilidades en el clásico juego de Tateti contra un amigo en tiempo real. Este juego no solo te permite competir para demostrar quién es el mejor jugador en el tablero de 3x3, sino que también te brinda la oportunidad de interactuar y conversar con tu amigo a través de un chat en vivo mientras juegan",
    },
  },
  {
    name: "Tateti Online",
    url: `${baseUrl}tateti`,
    img: `${baseImg}tateti.png`,
    data: {
      tecnologies: [
        <i key={1} className="mx-2">
          {<JavaScript />}
        </i>,
        <i key={1} className="mx-2">
          {<TailwndCss />}
        </i>,
        <i key={1} className="mx-2">
          {<Next />}
        </i>,
        <i key={1} className="mx-2">
          {<Node />}
        </i>,
        <i key={1} className="mx-2">
          {<Express />}
        </i>,
        <i key={1} className="mx-2">
          {<SocketIo />}
        </i>,
      ],
      description:
        "API de productos ofrece un conjunto robusto de endpoints REST para gestionar productos, permitiendo operaciones de creación, lectura, actualización y eliminación de productos. Además, incluye un sistema de autenticación de usuarios basado en tokens, garantizando la seguridad de las interacciones. ",
    },
  },
  {
    name: "Pokedex",
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
    name: "Memotest",
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
    name: "To Do",
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
