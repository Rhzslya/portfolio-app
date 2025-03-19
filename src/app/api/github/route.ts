import { NextResponse } from "next/server";

interface CommitInfo {
  sha: string;
  message: string;
  commitUrl: string;
}

interface Repo {
  name: string;
  createdAt: string;
  description: string;
  url: string;
  updatedAt: string;
  latestCommit?: CommitInfo;
  defaultBranchRef?: {
    target?: {
      history?: {
        nodes?: { oid?: string; message: string }[];
        totalCount?: number;
      };
    };
  };
}

export async function GET() {
  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
  if (!GITHUB_ACCESS_TOKEN) {
    return NextResponse.json(
      { message: "GitHub token is missing" },
      { status: 500 }
    );
  }

  const query = `
query {
  user(login: "Rhzslya") {
    repositories(first: 100) {
      totalCount
      nodes {
        name
        createdAt
        updatedAt
        description
        url
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 1) {
                nodes {
                  oid
                  message
                }
                  totalCount
              }
            }
          }
        }
      }
    }
  }
}`;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    if (!data.data) throw new Error("GitHub API error");

    const repositories = data.data.user.repositories.nodes.map((repo: Repo) => {
      // Pastikan nodes tidak undefined
      const latestCommit =
        repo.defaultBranchRef?.target?.history?.nodes?.[0] ?? null;

      return {
        name: repo.name,
        url: repo.url,
        createdAt: repo.createdAt,
        updatedAt: repo.updatedAt,
        totalCount: repo.defaultBranchRef?.target?.history?.totalCount,
        description: repo.description,
        hashCommit: latestCommit?.oid ?? null,
        message: latestCommit?.message ?? null,
        latestCommit: latestCommit
          ? {
              sha: latestCommit.oid,
              message: latestCommit.message,
              commitUrl: `${repo.url}/commit/${latestCommit.oid}`,
            }
          : null,
      };
    });

    return NextResponse.json(repositories);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
