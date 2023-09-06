import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <ul>
        <Link href={"/"}>
          <li>estas en se actualiza header</li>
        </Link>
        <Link href={"/pokedex"}>
          <li>este es un link</li>
        </Link>
      </ul>
    </header>
  );
};
