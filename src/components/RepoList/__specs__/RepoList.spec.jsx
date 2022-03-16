import React from "react";
import {render, screen} from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { QUERY_REPO_LIST } from '../queries/repo-query';
import RepoList from "../RepoList";

const mocks = [
  {
    request: {
      query: QUERY_REPO_LIST,
    },
    result: {
      search: {},
      edges: [
        {
          node: {
            id: "MDEwOlJlcG9zaXRvcnk5OTUwNjY3",
            name: "xorm",
            stargazerCount: 6500,
            forkCount: 793,
            url: "https://github.com/go-xorm/xorm",
            updatedAt: "2022-03-14T03:17:36Z",
            primaryLanguage: {
              id: "MDg6TGFuZ3VhZ2UxOTA=",
              name: "Go",
              color: "#00ADD8",
            }
          }
        }
      ]
    },
  },
];

describe('RepoList', () => {
  it('will render a list of Github repos', async () => {

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RepoList />
      </MockedProvider>
    );

    expect(await screen.findByTestId('repo-list')).toBeInTheDocument();
  });

});
