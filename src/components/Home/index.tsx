import React from "react";
import { GlowingEffectDemo } from "../GlowingEffect";
import Hero from "../Hero";
import TerminalWithApi from "../TerminalWithApi";
import ImageStack from "../ImageStack";
import ExperienceBox from "../ExperienceBox";
import ScrollMouse from "../ScrollMouse";

const HeroPage = ({
  setRepoData,
}: {
  setRepoData: (
    repos: {
      name: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      totalCount: number;
      description: string;
      hashCommit: string;
      message: string;
      latestCommit: {
        sha: string;
        message: string;
        commitUrl: string;
      };
    }[]
  ) => void;
}) => {
  return (
    <main
      id="home"
      className="min-h-screen home_root relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] xl:grid-cols-4  grid-rows-[0.25fr_1.5fr_0.5fr_1.5fr_1.3fr_0.25fr] lg:grid-rows-[0.5fr_1fr_0.5fr_1fr] xl:grid-rows-[1fr_1fr_0.7fr] gap-4"
    >
      <GlowingEffectDemo />
      <Hero />
      <TerminalWithApi />
      <ImageStack />
      <ExperienceBox setRepoData={setRepoData} />
      <ScrollMouse />
    </main>
  );
};

export default HeroPage;
