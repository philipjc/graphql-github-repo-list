import React from 'react';
import useGetRepoList from './hooks/useGetRepoList';
import RepoItem from "../RepoItem/Repo|Item";
import { Node } from '../interface/get_repos';

const RepoList = (): JSX.Element => {
  const { repos, error, loading } = useGetRepoList();

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error?.message}`</div>;

  return (
    <div>
      <h2>Repository list</h2>

      <main data-testid="repo-list">
        {repos.map((repo: Node):JSX.Element => {
          return (
            <RepoItem
              id={repo.id}
              name={repo.name}
              url={repo.url}
              primaryLanguage={repo.primaryLanguage}
              stargazerCount={repo.stargazerCount}
              forkCount={repo.forkCount}
              updatedAt={repo.updatedAt}
            />
          );
        })}
      </main>
    </div>
  )
}

export default RepoList;
