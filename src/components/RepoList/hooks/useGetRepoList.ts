import getRepoQueryApi from '../queries/repo-query';
import { RepoListReturn } from '../../interface/get_repos';

const useGetRepoList = (): RepoListReturn => {
  const { data, error, loading} = getRepoQueryApi.useGetReposQuery();

  const repos = data ? data?.search?.edges.map(dataItem => {
    return { ...dataItem?.node };
  }) : [];

  return {
    repos,
    error,
    loading,
  }
}

export default useGetRepoList;
