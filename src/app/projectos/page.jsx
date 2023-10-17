import Link from "next/link";
import { projectLinks } from "./ProjectLinks";
import Image from "next/image";

// function Projects() {
//   return (
//     <main className=" max-w-6xl py-4 m-auto">
//       <section className="flex flex-col flex-wrap justify-center md:flex-row max-w-6xl ">
//         {projectLinks?.map((project, i) => (
//           <Link className="" href={project.url} key={i}>
//             <article className="m-4 hover group p-3 flex flex-col md:flex-row bg-white rounded  dark:bg-black">
//               <div className="">
//                 <h3 className="border rounded border-solid mb-4 border-black dark:border-white  text-center text-lg">
//                   {project.name}
//                 </h3>
//                 <Image
//                   src={project.img}
//                   width={200}
//                   height={200}
//                   className=" rounded"
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//               <div
//                 id="este"
//                 className="border hidden group-hover:block border-black dark:border-white w-max transform transition-transform duration-1000"
//               >
//                 <p className="p-2 max-w-5xl">{project.data?.description}</p>
//                 <p></p>
//               </div>
//             </article>
//           </Link>
//         ))}
//       </section>
//     </main>
//   );
// }
function Projects() {
  return (
    <main className=" max-w-6xl py-4 m-auto min-h-full">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {projectLinks.map((link, i) =>
          i % 2 == 0 ? (
            <Link href={link.url} className=" col-span-4" key={i}>
              <article
                className="p-3 pt-0 m-4  rounded grid  md:grid-cols-4 gap-10 place-items-center"
                key={i}
              >
                <div className=" p-3 pt-0 bg-white dark:bg-black rounded">
                  <p className="text-center py-2 text-xl">{link.name}</p>
                  <Image
                    src={link.img}
                    className="rounded"
                    height={200}
                    width={200}
                    alt={link.name}
                  />
                </div>
                <div className="hidden md:block bg-white dark:bg-black p-3 md:col-span-3 rounded">
                  <p>{link.data?.description}</p>
                  <div className=" md:hidenn lg:flex">
                    {link.data?.tecnologies?.map((icon) => icon)}
                  </div>
                </div>
              </article>
            </Link>
          ) : (
            <Link href={link.url} className=" col-span-4" key={i}>
              <article
                className="p-3 pt-0 m-4 rounded grid md:grid-cols-4 gap-10 place-items-center"
                key={i}
              >
                <div className="hidden md:block bg-white dark:bg-black p-3 col-span-3 rounded">
                  <p className=" text-base">{link.data?.description}</p>
                  <div className="my-4">
                    <p className="text-base py-1 md:hidden">Tecnologias:</p>
                    {link.data?.tecnologies?.map((icon) => icon)}
                  </div>
                </div>
                <div className=" p-3 pt-0 bg-white dark:bg-black rounded">
                  <p className="text-center py-2 text-xl">{link.name}</p>
                  <Image
                    src={link.img}
                    className="rounded"
                    height={200}
                    width={200}
                    alt={link.name}
                  />
                </div>
              </article>
            </Link>
          )
        )}
      </section>
    </main>
  );
}

export default Projects;
