"use client"

import { useData } from "../hooks/useData";

export default function SuperRQHoroesPage() {

    const {error,isError,isLoading,data,refetch,isFetching} = useData()
      
    if(isError) {
      return (
        <p className="text-center text-2xl">{error.message as string}</p>
      )
    }

    return (
      <div className="p-5">
      <h1 className="pt-3 pb-3 text-lg">Rq Super Horoes</h1>
      {isLoading || isFetching && (<p className="text-sm">Loading...</p>)}
      {data?.data?.map((data:any) => (
        <section key={data.id} className="flex place-items-center">
          <article className="pb-5">
            <p>{data.name}</p>
            <p>Alterego:{data.alterego}</p>
          </article>
        </section>
      ))}
      <button 
      onClick={refetch} 
      className={`p-2 border border-white rounded-md hover:brightness-75 mb-1 ${isFetching ?  "border-yellow-400":"border-green-700"}`}>
        refetch Heroes
      </button>
      </div>
    );
  }
  