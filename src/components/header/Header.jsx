import Link from "next/link";
import ButtonTheme from "./ButtonTheme";

export const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-6xl m-auto py-3 text-xl border-b-2 border-black dark:border-white border-solid dark:bg-n">
      <Link href={"/"}>
        <p className=" hover:underline">Home</p>
      </Link>
      <ul className="flex justify-center items-center gap-x-6">
        <ButtonTheme />
        <Link href={"/projectos"}>
          <li className=" hover:underline">Proyectos</li>
        </Link>
      </ul>
    </header>
  );
};
