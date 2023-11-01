/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    createInfiniteQuery,
    createMutation,
    createQuery,
    useQueryClient,
    type CreateInfiniteQueryOptions,
    type MutationOptions,
    type QueryOptions,
} from '@tanstack/svelte-query';
import { ModelMeta } from '@zenstackhq/runtime/cross';
import { getContext, setContext } from 'svelte';
import {
    APIContext,
    DEFAULT_QUERY_ENDPOINT,
    FetchFn,
    QUERY_KEY_PREFIX,
    fetcher,
    makeUrl,
    marshal,
    setupInvalidation,
} from './common';

export { APIContext as RequestHandlerContext } from './common';

/**
 * Key for setting and getting the global query context.
 */
export const SvelteQueryContextKey = 'zenstack-svelte-query-context';

/**
 * Set context for the generated TanStack Query hooks.
 */
export function setHooksContext(context: APIContext) {
    setContext(SvelteQueryContextKey, context);
}

/**
 * Hooks context.
 */
export function getHooksContext() {
    const { endpoint, ...rest } = getContext<APIContext>(SvelteQueryContextKey);
    return { endpoint: endpoint ?? DEFAULT_QUERY_ENDPOINT, ...rest };
}

/**
 * Creates a svelte-query query.
 *
 * @param model The name of the model under query.
 * @param url The request URL.
 * @param args The request args object, URL-encoded and appended as "?q=" parameter
 * @param options The svelte-query options object
 * @returns useQuery hook
 */
export function useModelQuery<R>(
    model: string,
    url: string,
    args?: unknown,
    options?: Omit<QueryOptions<R>, 'queryKey'>,
    fetch?: FetchFn
) {
    const reqUrl = makeUrl(url, args);
    return createQuery<R>({
        queryKey: [QUERY_KEY_PREFIX + model, url, args],
        queryFn: () => fetcher<R, false>(reqUrl, undefined, fetch, false),
        ...options,
    });
}

/**
 * Creates a svelte-query infinite query.
 *
 * @param model The name of the model under query.
 * @param url The request URL.
 * @param args The initial request args object, URL-encoded and appended as "?q=" parameter
 * @param options The svelte-query infinite query options object
 * @returns useQuery hook
 */
export function useInfiniteModelQuery<R>(
    model: string,
    url: string,
    args?: unknown,
    options?: Omit<CreateInfiniteQueryOptions<R>, 'queryKey'>,
    fetch?: FetchFn
) {
    return createInfiniteQuery<R>({
        queryKey: [QUERY_KEY_PREFIX + model, url, args],
        queryFn: ({ pageParam }) => fetcher<R, false>(makeUrl(url, pageParam ?? args), undefined, fetch, false),
        ...options,
    });
}

/**
 * Creates a POST mutation with svelte-query.
 *
 * @param model The name of the model under mutation.
 * @param method The HTTP method.
 * @param modelMeta The model metadata.
 * @param url The request URL.
 * @param options The svelte-query options.
 * @param invalidateQueries Whether to invalidate queries after mutation.
 * @returns useMutation hooks
 */
export function useModelMutation<T, R = any, C extends boolean = boolean, Result = C extends true ? R | undefined : R>(
    model: string,
    method: 'POST' | 'PUT' | 'DELETE',
    url: string,
    modelMeta: ModelMeta,
    options?: Omit<MutationOptions<Result, unknown, T>, 'mutationFn'>,
    fetch?: FetchFn,
    invalidateQueries = true,
    checkReadBack?: C
) {
    const queryClient = useQueryClient();
    const mutationFn = (data: any) => {
        const reqUrl = method === 'DELETE' ? makeUrl(url, data) : url;
        const fetchInit: RequestInit = {
            method,
            ...(method !== 'DELETE' && {
                headers: {
                    'content-type': 'application/json',
                },
                body: marshal(data),
            }),
        };
        return fetcher<R, C>(reqUrl, fetchInit, fetch, checkReadBack) as Promise<Result>;
    };

    const finalOptions = { ...options, mutationFn };
    if (invalidateQueries) {
        const { logging } = getContext<APIContext>(SvelteQueryContextKey);
        const operation = url.split('/').pop();
        if (operation) {
            setupInvalidation(
                model,
                operation,
                modelMeta,
                finalOptions,
                (predicate) => queryClient.invalidateQueries({ predicate }),
                logging
            );
        }
    }

    return createMutation(finalOptions);
}
