import { api } from "../api/index";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => "/ai/stats",
    }),
  }),
});

export const { useGetStatsQuery } = dashboardApi;
