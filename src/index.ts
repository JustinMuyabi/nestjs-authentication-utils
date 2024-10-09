/**
 * Extracts a token from the authorization header if it exists.
 *
 * @param {Object} headers - The headers object containing the authorization header.
 * @param {any} headers.authorization - The authorization header containing the token.
 * @return {string|null} The extracted token or null if the authorization header is not present.
 */
export function getTokenFromHeaders(headers: { [key: string]: any }): string | null {
    const authHeader: string | undefined = headers['authorization'];
    return authHeader ? authHeader.replace('Bearer ', '') : null;
}

export function getRandomNumberString(length: number): string {
    let result: string = '';
    const characters = '0123456789';
    const charactersLength: number = characters.length;

    for (let i: number = 0; i < length; i++)
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

export function paginate(page: number = 1, limit: number = 25, totalItems: number): {
    skip: number;
    take: number;
    totalPages: number;
    previousPage: number | null;
    nextPage: number | null;
} {
    const take: number = limit > 0 ? +limit : 10;
    const skip: number = page > 1 ? (page - 1) * take : 0;
    const totalPages: number = Math.ceil(totalItems / take);
    const previousPage: number | null = page > 1 ? page - 1 : null;
    const nextPage: number | null = +page < +totalPages ? +page + 1 : null;

    return { skip, take, previousPage, nextPage, totalPages };
}