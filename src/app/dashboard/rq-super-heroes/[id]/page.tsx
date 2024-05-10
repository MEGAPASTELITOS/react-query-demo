"use client"

import { useDataOne } from "@/app/hooks/useDataOne";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SuperHoroesFindOnePage() {
  const params = useParams()
  const {error,isError,isLoading,data} = useDataOne(params.id as string)

  if(isLoading) {
    return (
      <p className="text-center text-3xl">Loadingth</p>
    )
  }

  if(isError){
    return (
      <p className="text-center text-3xl text-red-400">{error?.message}</p>
    )
  }

  return (
    <>
      <h1 className="px-5 text-lg">Super Horoes</h1>
        <section key={data?.id} className="flex place-items-center">
          <article className="p-5">
            <p>{data?.name}</p>
            <p>Alterego:{data?.alterego}</p>
          </article>
        </section>

        <Link href={"/dashboard/rq-super-heroes"} className="mx-5 p-3 border w-3 h-3 border-white rounded-lg flex place-items-center place-content-center"> {`<`} </Link>
    </>
  );
  }
  