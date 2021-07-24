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
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from 'react-timeseries-charts';
import { TimeSeries, TimeRange } from 'pondjs';

var path = require('path');

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

const IndexPage = () => {
  const brainwavesRes = useGetBrainwavesQuery();

  useEffect(() => {
    let unmounted = false;
    const func = async () => {
      const initialData = await getInitialData();
      const brainwavesData = (
        brainwavesRes.data
          ? brainwavesRes.data.getBrainwaves
          : initialData.getBrainwaves
      ) as Brainwave[];
      //TODO: error: cannot get the data. Even in graphql playground, it's not working.
      const dataArray = await getDataArrayFromStorage(
        brainwavesData[0].fileName,
      );
      console.log(dataArray);
    };
    func();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);

  const formedData = {
    name: 'traffic',
    columns: ['time', 'in', 'out'],
    points: [],
  };

  return (
    <>
      {/* <ChartContainer timeRange={series.timerange()} width={800}>
        <ChartRow height="200">
          <YAxis
            id="Amplitude"
            label="AUD"
            min={0.5}
            max={1.5}
            width="60"
            type="linear"
            format="$,.2f"
          />
          <Charts>
            <LineChart axis="axis1" series={series1} />
          </Charts>
        </ChartRow>
      </ChartContainer> */}
      <div>tet</div>
    </>
  );
};

export default IndexPage;
