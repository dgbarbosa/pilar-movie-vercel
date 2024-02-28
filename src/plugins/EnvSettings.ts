export class EnvSettings {
  static backendUri(): string {
    return import.meta.env.VITE_BACKEND_URI ?? "";
  }

  static token(): string {
    return import.meta.env.VITE_BACKEND_TOKEN ?? "";
  }
}
