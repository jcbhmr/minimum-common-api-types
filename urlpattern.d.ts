// URL Pattern Standard — https://urlpattern.spec.whatwg.org/
// Interfaces: URLPattern

export {};

declare global {
  type URLPatternInput = URLPatternInit | string;

  interface URLPatternInit {
    baseURL?: string;
    username?: string;
    password?: string;
    hostname?: string;
    port?: string;
    pathname?: string;
    search?: string;
    hash?: string;
    protocol?: string;
  }

  interface URLPatternComponentResult {
    input: string;
    groups: Record<string, string | undefined>;
  }

  interface URLPatternResult {
    inputs: [URLPatternInput] | [URLPatternInput, string];
    protocol: URLPatternComponentResult;
    username: URLPatternComponentResult;
    password: URLPatternComponentResult;
    hostname: URLPatternComponentResult;
    port: URLPatternComponentResult;
    pathname: URLPatternComponentResult;
    search: URLPatternComponentResult;
    hash: URLPatternComponentResult;
  }

  interface URLPatternOptions {
    ignoreCase?: boolean;
  }

  interface URLPattern {
    readonly protocol: string;
    readonly username: string;
    readonly password: string;
    readonly hostname: string;
    readonly port: string;
    readonly pathname: string;
    readonly search: string;
    readonly hash: string;
    exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
    test(input?: URLPatternInput, baseURL?: string): boolean;
  }

  var URLPattern: {
    prototype: URLPattern;
    new (input?: URLPatternInput, baseURL?: string, options?: URLPatternOptions): URLPattern;
    new (input?: URLPatternInput, options?: URLPatternOptions): URLPattern;
  };
}
