"use client";

import * as React from "react";

import { ToggleTheme } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <div className="flex justify-between p-4 md:p-8">
      <div className="flex justify-center items-center flex-1">
        <a href="https://www.guidancehub.org" rel="noopener noreferrer">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Guidance Hub
          </h1>
        </a>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
}
