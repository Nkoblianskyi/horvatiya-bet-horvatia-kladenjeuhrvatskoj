"use client"
import { SportJournalLogo } from "./sport-journal-logo"
import Link from "next/link"

export function SportJournalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-magazine-white/95 backdrop-blur-sm border-b border-magazine-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-18 items-center justify-between">
          <SportJournalLogo />

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/about-us"
              className="text-sm font-medium text-magazine-slate hover:text-magazine-teal transition-colors"
            >
              O Nama
            </Link>
            <Link
              href="/pro-sport"
              className="text-sm font-medium text-magazine-slate hover:text-magazine-teal transition-colors"
            >
              Sport
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-croatia-red/10 border border-croatia-red/20">
              <span className="text-croatia-red font-bold text-sm">18+</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
