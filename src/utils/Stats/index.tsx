import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const startYear = 2023;
const username = "rhzslya"; // Ganti dengan GitHub username kamu

export default function ExperienceBox() {
  const [totalRepos, setTotalRepos] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setTotalRepos(data.public_repos || 0))
      .catch(() => setTotalRepos(0));
  }, []);

  const stats = [
    { num: new Date().getFullYear() - startYear, text: "Years of Experience" },
    { num: totalRepos, text: "Projects Completed" },
    { num: 8, text: "Technologies Mastered" },
    { num: 500, text: "Code Commits" },
  ];

  return (
    <section className="col-span-2 col-start-2 row-start-3 mb-auto">
      <div className="container mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CountUp
              end={item.num}
              duration={5}
              delay={0.5}
              className="text-4xl xl:text-6xl font-bold"
            />
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
