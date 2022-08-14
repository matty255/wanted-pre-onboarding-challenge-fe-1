import React from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const store = window.localStorage.getItem("color-theme");
    if (typeof store === "string") {
      return store;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

export function useDark(): UseDarkModeOutput {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  const [isDarkMode, setDarkMode] = React.useState<boolean>(theme === "dark");

  React.useEffect(() => {
    rawSetTheme(theme);
    setDarkMode(theme === "dark");
  }, [theme]);

  return {
    isDarkMode,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
    enable: () => setTheme("dark"),
    disable: () => setTheme("light"),
  };
}
