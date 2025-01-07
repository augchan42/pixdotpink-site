// components/Footer.tsx
import TwitterLogo from "./TwitterLogo";
// import NavigationLink from "./NavigationLink";
// import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

const Footer = () => {
  // const t = useTranslations("Footer");
  return (
    <>
      <footer className="py-4 px-6 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex-1 order-3 md:order-1">
            <a 
              href="https://digitalrain.studio" 
              className="hover:text-gray-300"
            >
              &copy; {new Date().getFullYear()} Digital Rain Studios
            </a>
          </div>
          <div className="flex-none order-1 md:order-2 mb-4 md:mb-0 hidden dark:block">
            <TwitterLogo />
          </div>
          <div className="flex-none order-1 md:order-2 md:mb-0 block dark:hidden">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://x.com/8bitoracle/status/1875594289969033252"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
          {/* <div className="flex-1 order-2 md:order-3">
            <ul className="flex justify-center md:justify-end flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <NavigationLink href="/privacy" className="hover:text-gray-300">
                  {t("privacy")}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink href="/terms" className="hover:text-gray-300">
                  {t("terms")}
                </NavigationLink>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
