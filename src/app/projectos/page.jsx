import Link from "next/link";
import { projectLinks } from "./ProjectLinks";
import Image from "next/image";

function Projects() {
  return (
    <main className=" max-w-6xl py-4 m-auto">
      <section className="flex flex-col flex-wrap justify-center md:flex-row max-w-6xl ">
        {projectLinks?.map((project, i) => (
          <Link className="" href={project.url} key={i}>
            <article className="m-4 hover group p-3 flex flex-col md:flex-row bg-white rounded  dark:bg-black">
              <div className="">
                <h3 className="border rounded border-solid mb-4 border-black dark:border-white  text-center text-lg">
                  {project.name}
                </h3>
                <Image
                  src={project.img}
                  width={200}
                  height={200}
                  className=" rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                id="este"
                className="border hidden group-hover:block border-black dark:border-white w-max transform transition-transform duration-1000"
              >
                <p className="p-2 max-w-5xl">{project.data?.description}</p>
                <p></p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Projects;
