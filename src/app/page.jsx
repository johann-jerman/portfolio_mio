import {
  githubIcon,
  fileDownlodaIcon,
  linkedinIcon,
  mailIcon,
} from "./icons/icons.jsx";
import Image from "next/image";
import Link from "next/link";
import { projectLinks } from "./projectos/ProjectLinks";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2  py-4 my-6 max-w-6xl m-auto  bg-bc dark:bg-n">
      <aside className="">
        <Image
          src={"/image/johannImage.jpg"}
          className=" m-auto rounded-full"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          width={300}
          height={200}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
        <div className="flex gap-16 justify-center py-5 mx-5 ">
          <Link
            href={"https://www.linkedin.com/in/johannjerman/"}
            target="_blank"
          >
            {linkedinIcon}
          </Link>
          <Link href={"https://github.com/johann-jerman"} target="_blank">
            {githubIcon}
          </Link>
          <Link href={"johannjerman014@gmail.com"}>{mailIcon}</Link>
          <Link className="hover:text-a-o" href={""} download={"/cv/cv.pdf"}>
            {fileDownlodaIcon}
          </Link>
        </div>
      </aside>
      <article className=" max-w-xl ">
        <h1 className=" text-5xl md:text-6xl py-3 text-a-c mb-2 hover:underline hover:scale-105 transition-all">
          Johann Jerman
        </h1>
        <h3 className="text-3xl my-2 flex gap-4">
          <p>Desarrollador</p>
          <p className="text-a-o">Back End</p>
        </h3>
        <div>
          <p className="my-4 text-xl">
            Soy una persona analítica, me gusta resolver problemas a través de
            razonamiento y pensamiento lógico, eso y el poder crear cosas que
            resuelvan problemas es lo que más me gusta del Desarrollo
            principalmente el Backend, pero de vez en cuando rompo algunas cosas
            en Front también.
          </p>
          <p className="my-4 text-lg">
            Realice el curso de Desarrollador Web Full Stack de Digital House,
            aprendí muchas tecnologías de forma independiente y actualmente
            estoy comenzado la Tecnicatura en Programación de la UTN Regional
            Pacheco.
          </p>
        </div>
      </article>
      <div className="md:col-span-2">
        <h2 className="my-12 mt-20 text-center col-span-2 text-4xl md:text-6xl">
          Ultimos Projectos
        </h2>
      </div>
      <section className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 justify-items-center ">
        {projectLinks?.slice(0, 6)?.map((project, i) => (
          <article
            key={i}
            className=" w-4/5 md:w-3/4 rounded m-6 p-4 bg-bc dark:bg-n hover:scale-105 hover:shadow-lg shadow-neutral-200 backdrop:blur-sm transition-all border border-neutral-200 dark:border-[#16181C]"
          >
            <Link href={project.url}>
              <Image
                src={project.img}
                width={400}
                height={200}
                alt={"Project Image"}
              />
              <p className="text-4xl my-3 text-no dark:text-ver">
                {project.name}
              </p>
              <div className="my-1 flex">
                {project.data.tecnologies?.map((tec, i) => (
                  <div key={i} className="px-2">
                    {tec}
                  </div>
                ))}
              </div>
              <p>{project.data.description}</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
