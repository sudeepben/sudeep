import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoMark } from "../ui/LogoMark";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Builds", href: "/projects" },
  { label: "Story", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember-400">
          <LogoMark size="sm" />
          <div>
            <p className="text-sm font-semibold text-white">Sudeep Builds</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Builder's Console</p>
          </div>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember-400 ${
                  isActive ? "text-ember-200" : "text-white/62 hover:bg-white/[0.06] hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
        <button
          className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember-400 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              onClick={() => setOpen(false)}
              to={item.href}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-white/72 hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="px-3 py-3">
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
