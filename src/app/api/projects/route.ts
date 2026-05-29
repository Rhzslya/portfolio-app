import { NextResponse } from "next/server";

interface TopicNode {
  topic: {
    name: string;
  };
}

interface RepoNode {
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  openGraphImageUrl: string;
  repositoryTopics: {
    nodes: TopicNode[];
  };
}

export async function GET() {
  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

  if (!GITHUB_ACCESS_TOKEN) {
    return NextResponse.json(
      { message: "GitHub token is missing" },
      { status: 500 },
    );
  }

  const query = `
    query {
      user(login: "Rhzslya") {
        repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            name
            description
            url
            homepageUrl
            openGraphImageUrl
            repositoryTopics(first: 15) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      //   next: { revalidate: 3600 },
    });

    const data = await response.json();
    if (!data.data) throw new Error("GitHub API error");

    const allRepos = data.data.user.repositories.nodes;

    const portfolioProjects = allRepos
      .map((repo: RepoNode) => {
        const topics = repo.repositoryTopics.nodes.map((n) => n.topic.name);

        const formattedTitle = repo.name
          .replace(/-/g, " ")
          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

        return {
          title: formattedTitle,
          description: repo.description || "No description provided.",
          link: repo.homepageUrl || repo.url,
          image: repo.openGraphImageUrl,
          stack: topics.filter((t) => t !== "portfolio" && t !== "showcase"),
          isPortfolio:
            topics.includes("portfolio") || topics.includes("showcase"),
        };
      })
      .filter((project: { isPortfolio: boolean }) => project.isPortfolio);

    return NextResponse.json(portfolioProjects);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
