"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { setTheme } = useTheme();

  const getTheme = () => {
    if (typeof window !== "undefined") {
      const themeLocalStorage = window.localStorage.getItem("theme");

      if (themeLocalStorage === "light") {
        return "light";
      }
      return "dark";
    }
    return "dark";
  };

  const isDark = getTheme() === "dark";

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
  );
}
