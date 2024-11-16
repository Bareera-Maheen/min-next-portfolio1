'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define a type for the link structure
interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "projects",
    path: "/projects"
  },
  {
    name: "contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent translate-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
