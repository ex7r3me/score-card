import Link from "next/link";
import MainMenu from "../main-menu/main-menu";

export default function Navigation() {
  return (
    <div>
      <nav role="navigation" className="h-12 bg-primary-gray flex items-center align-middle">
      <MainMenu />
        <Link
          href="/"
          className="text-base font-bold uppercase text-beige inline-block m-auto"
        >
          Scorecard
        </Link>
      </nav>
    </div>
  );
}
