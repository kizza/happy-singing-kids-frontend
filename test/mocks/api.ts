import * as _api from "../../src/api";

export const mockApi = (mock: (path: string) => any) =>
  jest.spyOn(_api, "api").mockImplementation(mock);
