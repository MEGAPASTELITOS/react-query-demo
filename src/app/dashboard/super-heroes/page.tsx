"use client"

import axios from "axios";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuperHoroesPage() {
  const [loadingth,setLoadingth] = useState(true)
  const [error,setError] = useState("")
  const [data,setData] = useState([{}])

  useEffect(()=> {
    axios.get("http://localhost:4000/superheroes").then(res => {
      setData(res.data)
    }).catch((e:Error)=> {
      setError(e.message)
      setLoadingth(false)
    }).finally( () => {
      setLoadingth(false)
    })
  },[])

  if(loadingth) {
    return (
      <p className="text-center text-3xl">Loadingth</p>
    )
  }

  if(error){
    return (
      <p className="text-center text-3xl">{error}</p>
    )
  }

  return (
    <>
      <h1 className="px-6 text-lg">Super Horoes</h1>
      {data?.map((data:any) => (
        <article className="flex place-items-center p-3" key={data.id}>
          <Link href={`/dashboard/super-heroes/${data?.id}`} className="focus:border border-green-400 rounded-sm p-3 ">
            <p>{data.name}</p>
          </Link>
        </article>
      ))}
    </>
  );
  }
  