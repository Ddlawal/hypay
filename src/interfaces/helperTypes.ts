import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition,
    QueryDefinition,
} from '@reduxjs/toolkit/dist/query'
import { LazyQueryTrigger, MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'

type APIType = 'messagesApi' | 'baseApi'

export type LazyQueryType<K, T> = LazyQueryTrigger<
    QueryDefinition<
        K,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
        never,
        T,
        APIType
    >
>

export type MutationType<K, T> = MutationTrigger<
    MutationDefinition<
        K,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
        never,
        T,
        APIType
    >
>
