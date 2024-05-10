"use client"

import Link from "next/link";
import { useData } from "../../hooks/useData";

export default function SuperRQHoroesPage() {

    const {error,isError,isLoading,data,refetch,isFetching} = useData()
      
    if(isError) {
      return (
        <p className="text-center text-2xl">{error?.message}</p>
      )
    }

    return (
      <div className="p-5">
      <h1 className="pt-3 pb-3 text-lg">Rq Super Horoes</h1>
      {isLoading || isFetching && (<p className="text-sm">Loading...</p>)}
      {data?.data?.map((data:any) => (
        <article className="flex place-items-center mb-1" key={data.id}>
          <Link href={`/dashboard/rq-super-heroes/${data?.id}`} className="focus:border border-green-400 rounded-sm p-2 ">
          <p>{data.name}</p>
          </Link>
        </article>
      ))}
      <button 
      onClick={refetch} 
      className={`p-2 border border-white rounded-md hover:brightness-75 mb-1`}>
        refetch Heroes
      </button>
      </div>
    );
  }
  