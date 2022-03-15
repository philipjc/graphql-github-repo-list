import React from "react";
import { Node } from '../interface/get_repos';
import styles from  './style/RepoItem.styled';

const RepoItemData = {
  testId: 'RepoItem',
};

const RepoItem = ({ name, url, stargazerCount, forkCount }: Node): JSX.Element => {

  return (
    <styles.RepoItem data-testid={RepoItemData.testId}>
      <styles.ItemDetails>
        <styles.DetailsText>{`${name}`}</styles.DetailsText>
        <styles.DetailsText>{` ⭐️ ${stargazerCount}`}</styles.DetailsText>
        <styles.DetailsText>{`🍴️ ${forkCount}`}</styles.DetailsText>
      </styles.ItemDetails>
      <div>
        <a href={url} target="_blank" rel="noreferrer">{url}</a>
      </div>
    </styles.RepoItem>
  )
};

export default RepoItem;
