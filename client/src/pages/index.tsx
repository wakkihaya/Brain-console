import React, { memo, useState, useEffect } from 'react';

import { InferGetServerSidePropsType } from 'next';
import { useGraphql } from '@client/hooks/use-graphql';
import {
  GetBrainwavesQuery,
  GetBrainwavesDocument,
  GetBrainwavesQueryVariables,
  useGetBrainwavesQuery,
} from '@client/graphql/generated';

type Brainwave = {
  id: number;
  fileName: string;
};

const getInitialData = async () => {
  const { client } = useGraphql();
  const { data } = await client.query<
    GetBrainwavesQuery,
    GetBrainwavesQueryVariables
  >({
    query: GetBrainwavesDocument,
  });
  return data;
};

//TODO: Because of cloud-storage, the bugs happen.
// const getFIFFileFromStorage = async (brainwave: Brainwave) => {
//   const targetFileName = brainwave.fileName;
//   const { Storage } = require('@google-cloud/storage');

//   const storage = new Storage({
//     apiEndpoint: 'http://localhost:4443',
//   });
//   const [content] = await storage
//     .bucket('sample-bucket')
//     .file(targetFileName)
//     .download();
//   return content;
// };

const IndexPage = () => {
  const [brainData, setBrainData] = useState<Brainwave[]>();
  const { data, refetch } = useGetBrainwavesQuery();

  useEffect(() => {
    let unmounted = false;
    const func = async () => {
      const initialData = await getInitialData();
      const brainwavesData = (
        data ? data.getBrainwaves : initialData.getBrainwaves
      ) as Brainwave[];
      // const content = await getFIFFileFromStorage(brainwavesData[0]);
      // console.log(content);
    };
    func();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);

  return (
    <>
      <div>test</div>
    </>
  );
};

export default IndexPage;
