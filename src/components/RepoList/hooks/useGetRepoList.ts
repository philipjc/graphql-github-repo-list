import { useEffect, useState } from 'react';
import getRepoQueryApi from '../queries/repo-query';
import { RepoListReturn } from '../../interface/get_repos';

const useGetRepoList = (): RepoListReturn => {
  const [repos, updateRepoData] = useState<Array<any>>([]);

  const { data, error, loading} = getRepoQueryApi.useGetReposQuery()

  useEffect(() => {
    const repoData = data?.search?.edges.map(dataItem => {
      return { ...dataItem?.node };
    }) || [];

    updateRepoData(repoData);
  }, [data])

  return {
    repos,
    error,
    loading,
  }
}

export default useGetRepoList;
