import React, { useState, useEffect } from 'react';
import Head from 'next/head';

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
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';

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

const PageById: React.FC = () => {
  const brainwavesRes = useGetBrainwavesQuery();
  const router = useRouter();

  const [points, setPoints] = useState<BrainDataArray[]>([]);
  const [hasData, setHasData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pathId = router.query.id;

  useEffect(() => {
    setIsLoading(true);
    let unmounted = false;
    const func = async () => {
      const initialData = await getInitialData();
      const brainwavesData = (
        brainwavesRes.data
          ? brainwavesRes.data.getBrainwaves
          : initialData.getBrainwaves
      ) as Brainwave[];
      const targetBrainWave = brainwavesData.find(
        (item: Brainwave) => item.id === parseInt(pathId),
      );
      if (!targetBrainWave) {
        setHasData(false);
        setIsLoading(false);
        return;
      }
      const dataArray = await getDataArrayFromStorage(targetBrainWave.fileName);
      const formatedPoints = dataArray[
        'getDataArrayFromStorage'
      ] as BrainDataArray[];
      const cutPoints = formatedPoints.slice(0, 100); ///Data has lots of items, so split it to make the chart render smoothly.
      setPoints(cutPoints);
      setHasData(true);
      setIsLoading(false);
    };
    func();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="container">
        <header>Brain console</header>
        {!isLoading ? (
          <>
            {hasData ? (
              <LineChart width={1000} height={400} data={points}>
                <Line
                  type="monotone"
                  dataKey="data"
                  stroke="#8884d8"
                  dot={false}
                  strokeWidth={5}
                />
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <Tooltip />
              </LineChart>
            ) : (
              <div className="container--no-data">No data</div>
            )}
          </>
        ) : (
          <div className="container--loading">
            <ReactLoading
              className="container--loading-icon"
              type={'balls'}
              color={'#7c71bf'}
              height={'15%'}
              width={'15%'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PageById;
