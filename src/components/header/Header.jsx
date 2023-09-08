import Link from "next/link";
import ButtonTheme from "./ButtonTheme";

export const Header = () => {
  return (
    <header className="flex justify-between items-center dark:bg-n">
      <Link href={"/"}>
        <p>Home</p>
      </Link>
      <ul className="flex justify-center items-center gap-4 ">
        <ButtonTheme />
        <Link href={"/pokedex"}>
          <li>Projectos</li>
        </Link>
      </ul>
    </header>
  );
};
