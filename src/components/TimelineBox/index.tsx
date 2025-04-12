import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GitHubRepo } from "@/utils/Type";

export function TimelineBox({
  data,
  isLoading,
}: {
  data: GitHubRepo[];
  isLoading: boolean;
}) {
  return (
    <div className="w-full">
      <Timeline data={data} isLoading={isLoading} />
    </div>
  );
}
