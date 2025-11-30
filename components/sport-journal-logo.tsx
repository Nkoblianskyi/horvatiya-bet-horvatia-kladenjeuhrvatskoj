"use client"

import Link from "next/link"
import Image from "next/image"

export function SportJournalLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
      <div className="flex items-center gap-2.5">
        {/* Icon - Soccer ball stylized */}
        <Image src="/favicon.ico" alt="Sport Journal Logo" width={32} height={32} />
        <div className="flex flex-col">
          <div className="font-serif font-bold text-lg md:text-xl leading-none tracking-tight">
            <span className="text-croatia-red">Klađenje</span>
            <span className="text-magazine-slate"> u </span>
            <span className="text-blue-800">Hrvatskoj</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
