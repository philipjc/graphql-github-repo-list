import React from 'react';
import RepoList from '../components/RepoList/RepoList';
import styles from './App.styled';

const App = (): JSX.Element => (
  <styles.App data-testid="repos">
    <styles.Header>
      Github Repo List
    </styles.Header>

    <styles.Pagination>
      <button className="pagination-back">⬅️</button>
      <button className="pagination-forward">➡️</button>
    </styles.Pagination>

    <RepoList />
  </styles.App>
);

export default App;
