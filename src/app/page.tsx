import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex place-items-center place-content-center justify-center">
      <div className="flex gap gap-3 h-12 place-items-center">
        <p className="text-lg font-sans">Redirec to dashboard</p>
        <div className="h-full w-[1px] bg-neutral-500"/>
        <Link href={"/dashboard"} className="p-3 border w-4 h-6 border-white rounded-lg flex place-items-center place-content-center"> {`>`} </Link>
      </div>
    </section>
  );
}
