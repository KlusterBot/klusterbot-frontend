import { api } from "../api/index";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    action: builder.mutation({
      query: () => "",
    }),
  }),
});

export const { useActionMutation } = dashboardApi;
