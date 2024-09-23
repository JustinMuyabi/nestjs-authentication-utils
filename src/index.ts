export function getTokenFromHeaders(headers: Headers): string | null {
    return headers.get('Authorization')?.replace('Bearer ', '') ?? null;
}