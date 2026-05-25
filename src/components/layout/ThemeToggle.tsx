import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "../ui/Button";

type Theme = "dark" | "light";

const storageKey = "sudeep-builds-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const requestedTheme = new URLSearchParams(window.location.search).get("theme");
    if (requestedTheme === "light" || requestedTheme === "dark") return requestedTheme;
    return (window.localStorage.getItem(storageKey) as Theme | null) ?? "dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <IconButton
      label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </IconButton>
  );
}
