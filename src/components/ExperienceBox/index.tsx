import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/FramerMotionStyle";
interface GitHubRepo {
  defaultBranchRef?: {
    target?: {
      history?: {
        totalCount?: number;
      };
    };
  };
}
const startYear = 2023;

export default function ExperienceBox() {
  const [totalRepos, setTotalRepos] = useState<number>(0);
  const [totalCommits, setTotalCommits] = useState<number>(0);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Failed to fetch GitHub data");

        const data = await response.json();

        setTotalRepos(data.repositories.totalCount);

        const commitCount = data.repositories.nodes.reduce(
          (sum: number, repo: GitHubRepo) =>
            sum + (repo.defaultBranchRef?.target?.history?.totalCount || 0),
          0
        );
        setTotalCommits(commitCount);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  const stats = [
    { num: new Date().getFullYear() - startYear, text: "Years of Experience" },
    { num: totalRepos, text: "Projects Completed" },
    { num: totalCommits, text: "Code Commits" },
  ];

  return (
    <motion.section
      className="col-span-2 col-start-2 row-start-3 mb-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto">
        <motion.div className="flex flex-wrap justify-center gap-4 mx-auto">
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
                className="text-4xl xl:text-6xl font-bold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[120px]"
                }`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
