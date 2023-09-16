import {
  githubIcon,
  fileDownlodaIcon,
  linkedinIcon,
  mailIcon,
} from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-between py-4 my-6 max-w-6xl m-auto  bg-bc dark:bg-n">
      <aside className="">
        <Image
          src={"/image/johannImage.jpg"}
          className=" m-auto rounded-full"
          width={200}
          height={200}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
        <div className="flex justify-between py-3 mx-5 text-xl">
          <Link
            className="hover:text-a-c"
            href={"https://www.linkedin.com/in/johannjerman/"}
            target="_blank"
          >
            {linkedinIcon}
          </Link>
          <Link
            className=""
            href={"https://github.com/johann-jerman"}
            target="_blank"
          >
            {githubIcon}
          </Link>
          <Link
            className="hover:text-red-600"
            href={"johannjerman014@gmail.com"}
          >
            {mailIcon}
          </Link>
          <Link className="hover:text-a-o" href={""} download={"/cv/cv.pdf"}>
            {fileDownlodaIcon}
          </Link>
        </div>
      </aside>
      <article className=" max-w-xl">
        <h1 className=" text-5xl text-a-c my-2 hover:underline">
          Johann Jerman
        </h1>
        <h3 className="text-3xl my-2 flex gap-4">
          <p>Desarrollador</p>
          <p className="text-a-o">Back End</p>
        </h3>
        <div>
          <p className="my-2">
            Soy una persona analítica, me gusta resolver problemas a través de
            razonamiento y pensamiento lógico, eso y el poder crear cosas que
            resuelvan problemas es lo que más me gusta del Desarrollo
            principalmente el Backend, pero de vez en cuando rompo algunas cosas
            en Front también.
          </p>
          <p className="my-2">
            Realice el curso de Desarrollador Web Full Stack de Digital House,
            aprendí muchas tecnologías de forma independiente y actualmente
            estoy comenzado la Tecnicatura en Programación de la UTN Regional
            Pacheco.
          </p>
          {/* <p>
            Comenzando en el mundo del Desarrollo y buscando mi primer empleo
            como desarrollador luego de realizar el curso de Desarrollador Full
            Stack de Digital House.
          </p> */}
          <p></p>
        </div>
      </article>
    </main>
  );
}
