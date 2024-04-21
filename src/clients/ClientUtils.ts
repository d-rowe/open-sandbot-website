const BASE_ENDPOINT = 'http://127.0.0.1:3000/api';

function getUrl(endpoint: string): string {
    return `${BASE_ENDPOINT}/${endpoint}`;
}

export async function get<T>(endpoint: string): Promise<T> {
    const response = await fetch(getUrl(endpoint));
    validateResponse(response);
    return response.json();
}

export async function post<T>(endpoint: string, payload?: T): Promise<void> {
    const response = await fetch(getUrl(endpoint), {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: payload && JSON.stringify(payload),
    });

    validateResponse(response);
}

function validateResponse(response: Response) {
    if (response.ok) {
        return;
    }

    throw new Error(`${response.status} ${response.statusText}`);
}