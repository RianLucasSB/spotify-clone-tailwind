import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"
import { ChevronLeft, ChevronRight, Home as HomeIcon, Laptop2, LayoutList, Library, Maximize2, Mic2, Play, Repeat, Search, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>

            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Evening!</h1>

          <div className="grid grid-cols-3 gap-6 mt-4s">
            <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/20">
              <Image src="/album.png" alt="Image" width={104} height={104} />
              <strong>Vim dos prédios</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/20">
              <Image src="/album.png" alt="Image" width={104} height={104} />
              <strong>Vim dos prédios</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/20">
              <Image src="/album.png" alt="Image" width={104} height={104} />
              <strong>Vim dos prédios</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/20">
              <Image src="/album.png" alt="Image" width={104} height={104} />
              <strong>Vim dos prédios</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/20">
              <Image src="/album.png" alt="Image" width={104} height={104} />
              <strong>Vim dos prédios</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Rian Lucas!</h2>

          <div className="grid grid-cols-8 mt-4 gap-4">
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.png" alt="Image" width={104} height={104} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Teto, Matue, Veigh and more</span>
            </a>

            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.png" alt="Image" width={104} height={104} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Teto, Matue, Veigh and more</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.png" alt="Image" width={104} height={104} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Teto, Matue, Veigh and more</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.png" alt="Image" width={104} height={104} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Teto, Matue, Veigh and more</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.png" alt="Image" width={104} height={104} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Teto, Matue, Veigh and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
