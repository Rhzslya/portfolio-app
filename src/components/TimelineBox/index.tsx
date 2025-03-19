import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GitHubRepo } from "@/utils/Type";

export function TimelineBox({ data }: { data: GitHubRepo[] }) {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
