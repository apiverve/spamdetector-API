declare module '@apiverve/spamdetector' {
  export interface spamdetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface spamdetectorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class spamdetectorWrapper {
    constructor(options: spamdetectorOptions);

    execute(callback: (error: any, data: spamdetectorResponse | null) => void): Promise<spamdetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spamdetectorResponse | null) => void): Promise<spamdetectorResponse>;
    execute(query?: Record<string, any>): Promise<spamdetectorResponse>;
  }
}
