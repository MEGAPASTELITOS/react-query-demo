"use client"

import Link from "next/link";
import pages from "../../mook/nav-link.json"
import { useData } from "../hooks/useData";
import { useQuery } from "@tanstack/react-query";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const {
      isError: isErrorHeroes,
      isLoading: isLoadingHeroes,
      isFetching: isFetchingHeroes,
      isSuccess: isSuccessHeroes
    } = useData()

    const {
      isError: isErrorFriends,
      isLoading: isLoadingFriends,
      isFetching: isFetchingFriends,
      isSuccess: isSuccessFriends
    } = useQuery({queryKey:["friends"]})
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
            <div className={
              `w-4 h-4 rounded-full bg-neutral-100 ${isLoadingHeroes && "bg-yellow-400"} ${isFetchingHeroes && "bg-yellow-400"} ${isErrorHeroes && "bg-red-400"} ${isSuccessHeroes && "bg-green-400"} ${isErrorFriends && "bg-yellow-400"} ${isFetchingFriends && "bg-yellow-400"} ${isErrorFriends && "bg-red-400"} ${isSuccessFriends && "bg-green-400"}`
              }></div>
          </nav>
         <div className="bg-neutral-800 w-full h-[1px]"/>
        </header>
        {children}
      </>
    );
  }