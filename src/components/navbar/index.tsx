import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mx-10 my-5">
      <Link href="/">AxNotes</Link>
      <Link href="/article/teste">Article</Link>
      <Link href="/article/teste-2">Article 2</Link>
    </nav>
  );
};
