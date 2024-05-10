import Link from "next/link"

export const DataComponent = (
    {data}:{data:SuperHeroes | SuperHeroes[]}
) => {

    if(!Array.isArray(data)) {
        return (
            <article className="flex place-items-center mb-1" key={data.id}>
                <Link href={`/dashboard/rq-super-heroes/${data?.id}`} className="focus:border border-green-400 rounded-sm p-2 ">
                    <p>{data.name}</p>
                </Link>
            </article>
        )
    }

    
    if(Array.isArray(data)) {
        return (
            <>
            {data?.map((data:any) => (
                <article className="flex place-items-center mb-1" key={data.id}>
                    <Link href={`/dashboard/rq-super-heroes/${data?.id}`} className="focus:border border-green-400 rounded-sm p-2 ">
                        <p>{data.name}</p>
                    </Link>
                </article>
            ))}
        </>
        )
    }
}