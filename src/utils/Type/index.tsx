export interface GitHubRepo {
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  hashCommit: string;
  totalCount?: number;
  latestCommit?: CommitInfo;
}

interface CommitInfo {
  sha: string;
  message: string;
  commitUrl: string;
}
