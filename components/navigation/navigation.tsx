import Link from "next/link";
import MainMenu from "../main-menu/main-menu";

export default function Navigation() {
  return (
    <div>
      <nav role="navigation" className="flex items-center h-12 align-middle bg-primary-gray">
      <MainMenu />
        <Link
          href="/"
          className="inline-block m-auto text-base font-bold uppercase text-beige"
        >
          Scorecard
        </Link>
      </nav>
    </div>
  );
}
