
interface PrimaryLanguage {
  __typename: string;
  id: string;
  name: string;
  color: string;
}

export interface Node {
  id: string;
  name: string;
  primaryLanguage: PrimaryLanguage;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  url: string
}

interface Repo {
  node: Node,
}

interface Search {
  edges: [Repo];
}

export interface NextParams {
  after: string;
}

interface ErrorMessage {
  message: string;
}

export interface RepoListReturn {
  repos: Node[]|any;
  error: ErrorMessage|undefined;
  loading: boolean;
}

export interface GetRepos {
  search: Search|undefined;
  pageInfo: object;
  edges: [Repo];
  feed: [];
}
