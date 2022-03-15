import {gql, useQuery} from '@apollo/client';
import { GetRepos, NextParams } from '../../interface/get_repos';

export const QUERY_REPO_LIST = gql`
  query RepoList($after: String) {
    search(after: $after, query: "is:public", type: REPOSITORY, first: 50) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            id,
            name,
            stargazerCount,
            forkCount,
            url,
            updatedAt,
            primaryLanguage {
              id,
              name,
              color,
            }
          }
        }
      }
    }
  }
`;

const reposAPI = {
  useGetReposQuery: () => {
    return useQuery<GetRepos>(QUERY_REPO_LIST);
  },
  useGetReposNext: ({ after }: NextParams) => {
    return useQuery<GetRepos>(QUERY_REPO_LIST, {
      variables: { after },
    });
  },
}

export default reposAPI;
