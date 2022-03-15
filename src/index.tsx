import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import reportWebVitals from './reportWebVitals';
import App from './root/App';
import './index.css';


export const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    "Authorization": "Bearer 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",
  },
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your root, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
