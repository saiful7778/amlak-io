import { ThemeToggle } from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@workspace/ui/components/navigation-menu";
import Link from "next/link";
import { SiteLogo } from "./SiteLogo";

export default function Navbar() {
  return (
    <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-4 items-center justify-between">
        <SiteLogo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#home">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#capabilities">Capabilities</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
