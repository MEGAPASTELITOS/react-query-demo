"use client"

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuperHoroesFindOnePage() {
  const params = useParams()
  const [loadingth,setLoadingth] = useState(true)
  const [error,setError] = useState("")
  const [data,setData] = useState<SuperHeroes>()

  useEffect(()=> {
    axios.get(`http://localhost:4000/superheroes/`).then(res => {
      setData(res.data[Number(params.id) - 1])
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
      <h1 className="px-5 text-lg">Super Horoes</h1>
        <section key={data?.id} className="flex place-items-center">
          <article className="p-5">
            <p>{data?.name}</p>
            <p>Alterego:{data?.alterego}</p>
          </article>
        </section>
    </>
  );
  }
  