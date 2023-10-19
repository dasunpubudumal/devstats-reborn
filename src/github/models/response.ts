export interface GitHubUserDetailsResponse {
  user: GitHubUser;
}

export interface GitHubUser {
  name: string;
  login: string;
  id: string;
  isCampusExpert: boolean;
  isHireable: boolean;
  location: string;
  pronouns: string;
  avatarUrl: string;
  followers: CountInterface;
  status: Status;
  gists: CountInterface;
  websiteUrl: string;
  twitterUsername: string;
}

export interface TopRepositories {
  totalCount: number;
  nodes: TopRepositoryNode[];
}

export interface TopRepositoryNode {
  name: string;
  description: string;
  url: string;
  pushedAt: string;
  primaryLanguage: Language;
  homepageUrl: string;
  collaborators: Collaborators;
}

export interface Collaborators {
  totalCount: number;
  nodes: CollaboratorNode[];
}

export interface CollaboratorNode {
  id: string;
  name: string;
  url: string;
  avatarUrl: string;
}

export interface Language {
  id: string;
  name: string;
}

export interface CountInterface {
  totalCount: number;
}

export interface Status {
  emoji: string;
}
