import Link from "next/link";
import { projectLinks } from "./ProjectLinks";

function Projects() {
  return (
    <main className=" max-w-6xl py-4 m-auto">
      {projectLinks?.map((project, i) => (
        <Link className="" href={project.url} key={i}>
          <h3 className="border rounded border-solid my-4 border-black dark:border-white w-32 text-center">
            {project.name}
          </h3>
        </Link>
      ))}
    </main>
  );
}

export default Projects;
