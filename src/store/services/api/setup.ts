import { api } from "../api/index";



const setupApi = api.injectEndpoints({
  endpoints: (builder) => ({
    setupBot: builder.mutation({
      query: (args: setupBotDetails) => ({
        url: "/ai/add",
        method: "POST",
        params: args,
      }),
    }),
  }),
});

export const { useSetupBotMutation } = setupApi;
