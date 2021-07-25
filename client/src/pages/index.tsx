import React, { useState, useEffect } from 'react';

import { useGraphql } from '@client/hooks/use-graphql';
import {
  GetBrainwavesQuery,
  GetBrainwavesDocument,
  GetBrainwavesQueryVariables,
  useGetBrainwavesQuery,
  GetDataArrayFromStorageDocument,
  GetDataArrayFromStorageQueryVariables,
  GetDataArrayFromStorageQuery,
} from '@client/graphql/generated';
import { LineChart, Line, XAxis } from 'recharts';

type Brainwave = {
  id: number;
  fileName: string;
};

type BrainDataArray = {
  time: number;
  data: number;
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

const getDataArrayFromStorage = async (fileName: string) => {
  const { client } = useGraphql();
  const { data } = await client.query<
    GetDataArrayFromStorageQuery,
    GetDataArrayFromStorageQueryVariables
  >({
    query: GetDataArrayFromStorageDocument,
    variables: { targetFileName: fileName },
  });
  return data;
};

const IndexPage: React.FC = () => {
  const brainwavesRes = useGetBrainwavesQuery();
  const [points, setPoints] = useState<BrainDataArray[]>([]);

  useEffect(() => {
    let unmounted = false;
    const func = async () => {
      const initialData = await getInitialData();
      const brainwavesData = (
        brainwavesRes.data
          ? brainwavesRes.data.getBrainwaves
          : initialData.getBrainwaves
      ) as Brainwave[];
      const dataArray = await getDataArrayFromStorage(
        brainwavesData[0].fileName,
      );
      const formatedPoints = dataArray[
        'getDataArrayFromStorage'
      ] as BrainDataArray[];
      const cutPoints = formatedPoints.slice(0, 100); ///Data has lots of items, so split it to make the chart render smoothly.
      setPoints(cutPoints);
    };
    func();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);

  return (
    <>
      <LineChart width={1000} height={400} data={points}>
        <Line type="monotone" dataKey="data" stroke="#8884d8" dot={false} />
        <XAxis dataKey="time" />
      </LineChart>
    </>
  );
};

export default IndexPage;
