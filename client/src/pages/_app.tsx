import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

import { useGraphql } from '@client/hooks/use-graphql';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { client } = useGraphql();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
