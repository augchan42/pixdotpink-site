// components/Footer.tsx
import Link from "next/link";
import TwitterLogo from "./TwitterLogo";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="py-4 px-6 mt-8">
        <div className="text-pink-500 container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="flex-1 order-3 md:order-1 md:min-w-fit">
            <a
              href="https://digitalrain.studio"
              className="hover:text-pink-400 transition-colors whitespace-nowrap"
            >
              &copy; {new Date().getFullYear()} Digital Rain Studios
            </a>
          </div>
          <div className="flex-none order-1 md:order-2 mb-0 hidden dark:block">
            <TwitterLogo />
          </div>
          <div className="flex-none order-1 md:order-2 mb-0 block dark:hidden">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://twitter.com/pixdotpink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow @pixdotpink on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex-1 order-2 md:order-3">
            <ul className="flex justify-center md:justify-end flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <Link href="/about" className="hover:text-pink-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-pink-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-400 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
