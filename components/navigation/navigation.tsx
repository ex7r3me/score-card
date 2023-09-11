import Link from "next/link";
import MainMenu from "../main-menu/main-menu";

export default function Navigation() {
  return (
    <div>
      <nav role="navigation" className="flex items-center align-middle h-14 bg-primary-gray">
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
