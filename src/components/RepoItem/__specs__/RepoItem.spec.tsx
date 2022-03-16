import React from "react";
import {render, screen} from "@testing-library/react";
import RepoItem, { RepoItemData } from "../Repo|Item";

describe('RepoItem', () => {
  const mock = {
    id: '1',
    name: 'react',
    url: 'react.com',
    primaryLanguage: {
      __typename: '',
      id: '',
      name: '',
      color: '',
    },
    stargazerCount: 5,
    forkCount: 5,
    updatedAt: '',
  }
  it('will render when passed correct props', async () => {
    render(<RepoItem {...mock} />);
    expect(await screen.findByTestId(RepoItemData.testIds.item)).toBeInTheDocument();
    expect(await screen.findByTestId(RepoItemData.testIds.name)).toBeInTheDocument();
    expect(await screen.findByTestId(RepoItemData.testIds.stars)).toBeInTheDocument();
    expect(await screen.findByTestId(RepoItemData.testIds.forks)).toBeInTheDocument();
  });
});
