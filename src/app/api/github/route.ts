import { NextResponse } from "next/server";

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
        visibility
        primaryLanguage {
          name
        }
        repositoryTopics(first: 5) {
          nodes {
            topic {
              name
            }
          }
        }
        stargazers {
          totalCount
        }
        forkCount
        issues(states: OPEN) {
          totalCount
        }
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
    });

    const data = await response.json();
    if (!data.data) throw new Error("GitHub API error");

    return NextResponse.json(data.data.user);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
