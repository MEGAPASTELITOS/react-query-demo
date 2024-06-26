"use client"

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuperHoroesFindOnePage() {
  const params = useParams()
  const [loadingth,setLoadingth] = useState(true)
  const [error,setError] = useState("")
  const [data,setData] = useState<SuperHeroes>()

  useEffect(()=> {
    axios.get(`http://localhost:4000/superheroes/${params?.id}`).then(res => {
      setData(res.data)
    }).catch((e:Error)=> {
      setError(e.message)
      setLoadingth(false)
    }).finally( () => {
      setLoadingth(false)
    })
  },[params?.id])

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
      <h1 className="px-5 text-lg">Super Horoes</h1>
        <section key={data?.id} className="flex place-items-center">
          <article className="p-5">
            <p>{data?.name}</p>
            <p>Alterego:{data?.alterego}</p>
          </article>
        </section>

        <Link href={"/dashboard/super-heroes"} className="mx-5 p-3 border w-3 h-3 border-white rounded-lg flex place-items-center place-content-center"> {`<`} </Link>
    </>
  );
  }
  