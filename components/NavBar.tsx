import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-neutral text-primary-content px-10  mb-16">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-primary"
        >
          Put logo here
        </Link>
      </div>
      <div className="flex-none">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-md text-primary"
        >
          Summary
        </Link>
        <Link
          href="/portfolio"
          className="btn btn-ghost normal-case text-md text-primary"
        >
          Portfolio
        </Link>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost normal-case text-md text-primary"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
