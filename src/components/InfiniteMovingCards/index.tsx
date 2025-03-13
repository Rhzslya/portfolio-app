"use client";

// Cek apakah items terdefinisi
import React from "react";
import { InfiniteMovingCards } from "../ui/scrolling-tech-stack";
export function ScrollingTechStack() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards direction="left" speed="normal" />
    </div>
  );
}
