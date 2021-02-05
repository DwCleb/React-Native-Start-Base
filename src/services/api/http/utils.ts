export function clearToken(token: string): string {
  return token.replace(/['"]+/g, '');
}
