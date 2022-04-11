import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="max-w-7xl mx-auto py-8 flex items-center justify-between">
        <div className="bg-gray-200">[Logo]</div>
        <ul className="flex">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a>Favoritos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
