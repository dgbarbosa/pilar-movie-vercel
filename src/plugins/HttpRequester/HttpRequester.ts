export interface HttpRequester {
  get<T>(route: string, params?: Record<string, unknown>): Promise<T>;
}
