import Link from "next/link";
import { projectLinks } from "./ProjectLinks";
import Image from "next/image";

function Projects() {
  return (
    <main className=" max-w-6xl py-4 m-auto min-h-full">
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
              <div className="my-1 flex ">
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

export default Projects;
