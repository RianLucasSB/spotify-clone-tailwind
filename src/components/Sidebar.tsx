import { HomeIcon, Library, Search } from 'lucide-react'
import React from 'react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <nav className="space-y-5  mt-10">
            <a href="" className="flex items-center gap-3 tetx-sm font-bold text-zinc-200"><HomeIcon /> Home</a>
            <a href="" className="flex items-center gap-3 tetx-sm font-bold text-zinc-200"><Search /> Search</a>
            <a href="" className="flex items-center gap-3 tetx-sm font-bold text-zinc-200"><Library /> Your library</a>
          </nav>

          <nav className="mt-6 pt-10 border-zinc-800 border-t flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rap gold </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Cremes </a>

          </nav>
        </aside>
  )
}