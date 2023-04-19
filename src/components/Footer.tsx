import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, SkipBack, SkipForward } from 'lucide-react'
import { Volume } from 'lucide-react'
import { Shuffle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export  function Footer() {
  return (
    <footer className="px-6 py-4 bg-zinc-9s00 border-t border-zinc-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album.png" alt="Image" width={56} height={56} />
          <div className="flex flex-col">
            <strong className="font-normal">Vida chique</strong>
            <span className="text-xs text-zinc-400">Veigh</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-500"/>
            <SkipBack size={20} className="text-zinc-500"/>
            <button className="h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-500"/>
            <Repeat size={20} className="text-zinc-500"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs">0:34</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-zinc-500 text-xs">2:34</span>

          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
  )
}
