import React, { memo } from 'react';

import { InferGetServerSidePropsType } from 'next';
import { useGraphql } from '@client/hooks/use-graphql';
import {
  GetBrainwavesQuery,
  GetBrainwavesDocument,
  GetBrainwavesQueryVariables,
  useGetBrainwavesQuery,
} from '@client/graphql/generated';

export const getServerSideProps = async () => {
  const { client } = useGraphql();
  const { data } = await client.query<
    GetBrainwavesQuery,
    GetBrainwavesQueryVariables
  >({
    query: GetBrainwavesDocument,
  });
  return { props: { initialData: data } };
};

export default memo<InferGetServerSidePropsType<typeof getServerSideProps>>(
  ({ initialData }) => {
    const { data, refetch } = useGetBrainwavesQuery();
    const brainwavesData = data
      ? data.getBrainwaves
      : initialData.getBrainwaves;

    return (
      <>
        <div>Nest Next TODO Sample</div>
        <div>{brainwavesData} </div>
      </>
    );
  },
);
