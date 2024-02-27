export const fetchWithErrorHandling = async (url: RequestInfo | URL, config?: RequestInit, ignoreThrow?: boolean): Promise<Response> => {
    try {
        const response = await fetch(url, config);

        if (response.status === 401) {

            window.location.reload();
        }

        if (response.status > 299) {
            //TODO: make something
        }

        return response;
    } catch (error) {
        console.error(error);
        if (!ignoreThrow) {
            throw error;
        }
        return Promise.reject();
    }
};