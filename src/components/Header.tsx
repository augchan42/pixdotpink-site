import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-pink-500/90 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-normal text-pink-500 tracking-wider hover:text-pink-700 transition-colors"
        >
          PIX
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-sm text-gray-800 hover:text-pink-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-800 hover:text-pink-700 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-800 hover:text-pink-700 transition-colors"
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
