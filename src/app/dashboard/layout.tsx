"use client"

import Link from "next/link";
import pages from "../../mook/nav-link.json"
import { useData } from "../hooks/useData";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const {isError,isLoading,isFetching,isSuccess} = useData()
    return (
      <>
       <header className="">
          <nav className="bg-black-stand p-4 rounded-b-lg flex place-content-between place-items-center">
            <ul className="flex gap-4 overflow-hidden w-4/5">
              {pages.map(page => (
                <li key={page.id} className="border-b-2 border-b-transparent hover:border-glacier-200 transition-colors">
                  <Link href={page.href}>{page.page}</Link>
               </li>
              ))}
            </ul>
            <div className={`w-4 h-4 rounded-full bg-neutral-100 ${isLoading && "bg-yellow-400"} ${isFetching && "bg-yellow-400"} ${isError && "bg-red-400"} ${isSuccess && "bg-green-400"}`}></div>
          </nav>
         <div className="bg-neutral-800 w-full h-[1px]"/>
        </header>
        {children}
      </>
    );
  }