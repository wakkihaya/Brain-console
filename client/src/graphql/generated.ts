import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BrainDataArray = {
  time?: Maybe<Scalars['Float']>;
  data?: Maybe<Scalars['Float']>;
};

export type Brainwave = {
  id: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
};

export type Query = {
  getBrainwaves?: Maybe<Array<Maybe<Brainwave>>>;
  getBrainwave?: Maybe<Brainwave>;
  getDataArrayFromStorage?: Maybe<Array<Maybe<BrainDataArray>>>;
};

export type QueryGetBrainwaveArgs = {
  id: Scalars['Int'];
};

export type QueryGetDataArrayFromStorageArgs = {
  targetFileName: Scalars['String'];
};

export type GetBrainwavesQueryVariables = Exact<{ [key: string]: never }>;

export type GetBrainwavesQuery = {
  getBrainwaves?: Maybe<Array<Maybe<Pick<Brainwave, 'id' | 'fileName'>>>>;
};

export type GetBrainwaveQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetBrainwaveQuery = {
  getBrainwave?: Maybe<Pick<Brainwave, 'id' | 'fileName'>>;
};

export type GetDataArrayFromStorageQueryVariables = Exact<{
  targetFileName: Scalars['String'];
}>;

export type GetDataArrayFromStorageQuery = {
  getDataArrayFromStorage?: Maybe<
    Array<Maybe<Pick<BrainDataArray, 'time' | 'data'>>>
  >;
};

export const GetBrainwavesDocument = gql`
  query GetBrainwaves {
    getBrainwaves {
      id
      fileName
    }
  }
`;

/**
 * __useGetBrainwavesQuery__
 *
 * To run a query within a React component, call `useGetBrainwavesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrainwavesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrainwavesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBrainwavesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBrainwavesQuery,
    GetBrainwavesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBrainwavesQuery, GetBrainwavesQueryVariables>(
    GetBrainwavesDocument,
    options,
  );
}
export function useGetBrainwavesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBrainwavesQuery,
    GetBrainwavesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBrainwavesQuery, GetBrainwavesQueryVariables>(
    GetBrainwavesDocument,
    options,
  );
}
export type GetBrainwavesQueryHookResult = ReturnType<
  typeof useGetBrainwavesQuery
>;
export type GetBrainwavesLazyQueryHookResult = ReturnType<
  typeof useGetBrainwavesLazyQuery
>;
export type GetBrainwavesQueryResult = Apollo.QueryResult<
  GetBrainwavesQuery,
  GetBrainwavesQueryVariables
>;
export const GetBrainwaveDocument = gql`
  query GetBrainwave($id: Int!) {
    getBrainwave(id: $id) {
      id
      fileName
    }
  }
`;

/**
 * __useGetBrainwaveQuery__
 *
 * To run a query within a React component, call `useGetBrainwaveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrainwaveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrainwaveQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBrainwaveQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBrainwaveQuery,
    GetBrainwaveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBrainwaveQuery, GetBrainwaveQueryVariables>(
    GetBrainwaveDocument,
    options,
  );
}
export function useGetBrainwaveLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBrainwaveQuery,
    GetBrainwaveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBrainwaveQuery, GetBrainwaveQueryVariables>(
    GetBrainwaveDocument,
    options,
  );
}
export type GetBrainwaveQueryHookResult = ReturnType<
  typeof useGetBrainwaveQuery
>;
export type GetBrainwaveLazyQueryHookResult = ReturnType<
  typeof useGetBrainwaveLazyQuery
>;
export type GetBrainwaveQueryResult = Apollo.QueryResult<
  GetBrainwaveQuery,
  GetBrainwaveQueryVariables
>;
export const GetDataArrayFromStorageDocument = gql`
  query GetDataArrayFromStorage($targetFileName: String!) {
    getDataArrayFromStorage(targetFileName: $targetFileName) {
      time
      data
    }
  }
`;

/**
 * __useGetDataArrayFromStorageQuery__
 *
 * To run a query within a React component, call `useGetDataArrayFromStorageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataArrayFromStorageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataArrayFromStorageQuery({
 *   variables: {
 *      targetFileName: // value for 'targetFileName'
 *   },
 * });
 */
export function useGetDataArrayFromStorageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDataArrayFromStorageQuery,
    GetDataArrayFromStorageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDataArrayFromStorageQuery,
    GetDataArrayFromStorageQueryVariables
  >(GetDataArrayFromStorageDocument, options);
}
export function useGetDataArrayFromStorageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDataArrayFromStorageQuery,
    GetDataArrayFromStorageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDataArrayFromStorageQuery,
    GetDataArrayFromStorageQueryVariables
  >(GetDataArrayFromStorageDocument, options);
}
export type GetDataArrayFromStorageQueryHookResult = ReturnType<
  typeof useGetDataArrayFromStorageQuery
>;
export type GetDataArrayFromStorageLazyQueryHookResult = ReturnType<
  typeof useGetDataArrayFromStorageLazyQuery
>;
export type GetDataArrayFromStorageQueryResult = Apollo.QueryResult<
  GetDataArrayFromStorageQuery,
  GetDataArrayFromStorageQueryVariables
>;
