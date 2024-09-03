

export function getList<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {

    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as TResponse)
        .catch((error) => {
            console.error('Fetch error:', error);
            throw error;
        });
}
