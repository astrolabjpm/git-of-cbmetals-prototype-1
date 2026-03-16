import { Link } from "react-router-dom";

const menuLinks = [
  { label: "Products", href: "/menu/products" },
  { label: "Gallery", href: "/menu/gallery" },
  { label: "Resources", href: "/menu/resources" },
  { label: "Locations", href: "/menu/locations" },
  { label: "About", href: "/menu/about" },
];

const FooterNav = () => (
  <nav
    aria-label="Footer menu navigation"
    className="border-t border-border bg-surface"
  >
    <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-1 px-6 py-3">
      {menuLinks.map((link, i) => (
        <Link
          key={link.label}
          to={link.href}
          className={`font-meta px-4 py-1.5 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-accent ${
            i > 0 ? "border-l border-border" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </nav>
);

export default FooterNav;
