import { apiSlice } from "./apiSlice";

const plantasApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPlanta: builder.mutation({
            query: (data) => ({
                url: "plantas/add",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),
        updatePlanta: builder.mutation({
            query: (data) => ({
                url: `plantas/update/${data.id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),
        deletePlanta: builder.mutation({
            query: (id) => ({
                url: `plantas/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        getPlantas: builder.query({
            query: () => "plantas",
        }),
        getPlantaById: builder.query({
            query: (id) => `plantas/${id}`,
        }),
    }),
});

export const {
    useAddPlantaMutation,
    useUpdatePlantaMutation,
    useDeletePlantaMutation,
    useGetPlantasQuery,
    useGetPlantaByIdQuery,
} = plantasApi;