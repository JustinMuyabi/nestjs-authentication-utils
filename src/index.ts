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