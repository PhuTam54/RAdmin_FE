import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page = 1, perPage = 5 }) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
