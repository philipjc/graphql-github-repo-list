import React from "react";
import { Node } from '../interface/get_repos';
import styles from  './style/RepoItem.styled';

export const RepoItemData = {
  testIds: {
    item: 'repo-item',
    name: 'repo-name',
    stars: 'repo-stars',
    forks: 'repo-forks',
  },
};

const RepoItem = ({ name, url, stargazerCount, forkCount }: Node): JSX.Element => {

  return (
    <styles.RepoItem data-testid={RepoItemData.testIds.item}>
      <styles.ItemDetails>
        <styles.DetailsText data-testid={RepoItemData.testIds.name}>{`${name}`}</styles.DetailsText>
        <styles.DetailsText data-testid={RepoItemData.testIds.stars}>{` ⭐️ ${stargazerCount}`}</styles.DetailsText>
        <styles.DetailsText data-testid={RepoItemData.testIds.forks}>{`🍴️ ${forkCount}`}</styles.DetailsText>
      </styles.ItemDetails>
      <div>
        <a href={url} target="_blank" rel="noreferrer">{url}</a>
      </div>
    </styles.RepoItem>
  )
};

export default RepoItem;
