import { getData } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"

export const useData = () => {
    const {error,isError,isLoading,data,refetch,isFetching,isSuccess} = useQuery({
        queryKey:["super-heroes"],
        queryFn:getData,
    })

    return {error,isError,isLoading,data,refetch,isFetching,isSuccess}
}