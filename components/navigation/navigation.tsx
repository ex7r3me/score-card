import Link from "next/link";

export default function Navigation() {
  return (
    <nav role="navigation" className="h-12 bg-primary-gray flex items-center align-middle">
      <Link
        href="/"
        className="text-base font-bold uppercase text-beige inline-block m-auto"
      >
        Scorecard
      </Link>
    </nav>
  );
}
