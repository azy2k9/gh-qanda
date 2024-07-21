"use client";

import * as React from "react";

import { ToggleTheme } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function Navbar() {
  return (
    <div className="flex justify-between p-4 md:p-8">
      <div className="flex justify-center items-center flex-1">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Guidance Hub Q&A
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <a href="https://www.guidancehub.org" rel="noopener noreferrer">
          <Button
            className="mb-2 md:mb-0 md:mr-2"
            variant="outline"
            size="icon"
          >
            <Home className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </a>
        <ToggleTheme />
      </div>
    </div>
  );
}
