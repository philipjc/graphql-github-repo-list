import React from 'react';
import { render, screen } from '@testing-library/react';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

export const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    "Authorization": "Bearer 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",
  },
  cache: new InMemoryCache()
});

test('renders learn react link', async () => {
  render(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  );

  expect(await screen.findByTestId('repos')).toBeInTheDocument();
});
