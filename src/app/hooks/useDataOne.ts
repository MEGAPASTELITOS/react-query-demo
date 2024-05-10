import { getDataOne } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"

export const useDataOne = (dataId:string) => {
    const {error,isError,isLoading,data,isFetching,isSuccess} = useQuery({
        queryKey:["super-heroes",dataId ],
        queryFn:() => {
            return getDataOne(dataId)
        },
    })

    return {error,isError,isLoading,data,isFetching,isSuccess}
}