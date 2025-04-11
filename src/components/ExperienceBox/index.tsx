import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/FramerMotionStyle";
import { SparklesCore } from "../ui/sparkles";
import { GitHubRepo } from "@/utils/Type";

const startYear = 2023;

export default function ExperienceBox({
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
}) {
  const [totalRepos, setTotalRepos] = useState<number>(0);
  const [totalCommits, setTotalCommits] = useState<number>(0);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Failed to fetch GitHub data");

        const data = await response.json();

        setTotalRepos(data.length);

        const totalCommits = data.reduce(
          (sum: number, repo: GitHubRepo) => sum + (repo.totalCount || 0),
          0
        );
        setTotalCommits(totalCommits);

        // Ambil nama & tanggal repo
        const repositories = data.map((repo: GitHubRepo) => {
          return {
            name: repo.name,
            url: repo.url,
            createdAt: repo.createdAt,
            updatedAt: repo.updatedAt,
            description: repo.description,
            hashCommit: repo.hashCommit ?? null,
            latestCommit: repo.latestCommit
              ? {
                  sha: repo.latestCommit.sha,
                  message: repo.latestCommit.message,
                  commitUrl: `${repo.url}/commit/${repo.latestCommit.sha}`,
                }
              : null,
          };
        });

        setRepoData(repositories);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubStats();
  }, [setRepoData]);

  const stats = [
    { num: new Date().getFullYear() - startYear, text: "Years of Experience" },
    { num: totalRepos, text: "Projects Completed" },
    { num: totalCommits, text: "Code Commits" },
  ];

  return (
    <motion.section
      className="lg:col-span-2 lg:col-start-2 row-start-3 lg:row-start-4 xl:col-start-2 xl:row-start-3 xl:mb-auto max-xl:m-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container">
        <motion.div className="flex xl:flex-nowrap flex-wrap justify-center gap-4 mx-auto">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center gap-4"
              variants={itemVariants}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={0.8}
                className="text-3xl md:text-5xl 2xl:text-6xl font-bold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[120px]"
                } max-[662px]:text-center text-sm lg:text-base`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={190}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </motion.div>
    </motion.section>
  );
}
