"use client"

import { getData, getFriends } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"


export default function ParallelPage () {
    const {
        data:superHeroes,
        isLoading:isLoadingHeroes,
        isFetching:isFetchingHeroes,
        isError:isErrorHeroes,
        error:errorHeroes
    } = useQuery({
        queryKey:["super-heroes"],
        queryFn:getData
    })

    const {
        data:friends,
        isLoading:isLoadingFriends,
        isFetching:isFetchingFriends,
        isError:isErrorFriends,
        error:errorFriends
    } = useQuery({
        queryKey:["friends"],
        queryFn:getFriends
    })

    if(isErrorFriends || isErrorHeroes) {
        return (
          <p className="text-center text-2xl">{errorHeroes?.message} || {errorFriends?.message}</p>
        )
    }

    return (
        <>
            <h1 className="text-lg text-center p-1">Parrallel querys</h1>
            <section className="flex w-full h-80">
                <article className="w-2/4 border border-neutral-400 rounded-md">
                    <h1 className="pt-3 pb-3 text-base ml-2">Super Horoes</h1>
                    {isLoadingHeroes || isFetchingHeroes && (<p className="text-sm">Loading...</p>)}
                    {superHeroes?.data?.map((data:any) => (
                    <article className="flex place-items-center mb-1" key={data.id}>
                        <div className="focus:border border-green-400 rounded-sm p-2 ">
                            <p>{data.name}</p>
                        </div>
                    </article>
                    ))}
                </article>
                <article className="w-2/4 border border-neutral-400 rounded-md">
                <h1 className="pt-3 pb-3 text-base ml-2">Friends</h1>
                    {isLoadingFriends || isFetchingFriends && (<p className="text-sm">Loading...</p>)}
                    {friends?.data?.map((data:any) => (
                    <article className="flex place-items-center mb-1" key={data.id}>
                        <div className="focus:border border-green-400 rounded-sm p-2 ">
                            <p>{data.name}</p>
                        </div>
                    </article>
                    ))}
                </article>
            </section>
        </>
    )
}