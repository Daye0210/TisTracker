import { apiSlice } from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: "user/register",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "user/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "user/logout",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        checkUser: builder.query({
            query: () => "user",
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useVerifyEmailMutation,
    useCheckUserQuery,
    useLazyCheckUserQuery,
    useGetGradesQuery,
    useLeaveAcademicPeriodMutation,
} = userApi;
