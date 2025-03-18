import React from "react";
import { Timeline } from "@/components/ui/timeline";

interface TimelineItem {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  commits: number;
  hashCommits?: string;
  message?: string;
}

interface TimelineEntry {
  title: string;
  items: TimelineItem[];
}

export function TimelineBox({ data }: { data: TimelineEntry[] }) {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
