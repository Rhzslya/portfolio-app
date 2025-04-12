"use client";

import Contact from "@/components/Contact";
import HeroPage from "@/components/Home";
import Project from "@/components/Project";
import { useEffect, useState } from "react";

export default function Main() {
  const [repoData, setRepoData] = useState<
    {
      name: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      totalCount: number;
      description: string;
      hashCommit: string;
      latestCommit: {
        sha: string;
        message: string;
        commitUrl: string;
      };
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-[48px] md:my-[52px] lg:my-[56px] px-2 xs:px-6 md:px-10 lg:px-14 pt-14">
      <HeroPage setRepoData={setRepoData} setIsLoading={setIsLoading} />
      <Project repoData={repoData} isLoading={isLoading} />
      <Contact />
    </div>
  );
}
