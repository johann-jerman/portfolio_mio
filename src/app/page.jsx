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
    <main className="min-h-screen py-4 max-w-6xl m-auto  bg-bc dark:bg-n">
      <aside className="">
        <Image
          src={"/image/johannImage.jpg"}
          className=" rounded-full"
          width={200}
          height={1}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
        <div className="flex gap-6">
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
          {/* <Link href={""} download={"/cv/cv.pdf"}>
          {fileDownlodaIcon}
        </Link> */}
        </div>
      </aside>
    </main>
  );
}
