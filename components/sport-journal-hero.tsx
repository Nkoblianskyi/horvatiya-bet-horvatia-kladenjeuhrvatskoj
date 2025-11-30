"use client"

import { useState } from "react"
import { SportJournalAdvertiserModal } from "./sport-journal-advertiser-modal"

export function SportJournalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/soccer-team-celebrating-victory-with-trophy-stadiu.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-magazine-slate/90 via-magazine-slate/80 to-magazine-slate/60" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-6 sm:py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Left column - Main content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3 md:mb-5">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-magazine-coral animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold text-white uppercase tracking-wider">
                Ažurirano za 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 md:mb-4 leading-tight text-balance">
              <span className="text-white">Vaš Vodič za</span>{" "}
              <span className="text-magazine-coral">Sportsko Klađenje</span>{" "}
              <span className="text-white">u Hrvatskoj</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-lg text-white/80 leading-relaxed mb-4 md:mb-6 max-w-xl">
              <span className="hidden sm:inline">
                Objektivne recenzije licenciranih kladionica, stručne sportske analize i savjeti za informirano i
                odgovorno klađenje
              </span>
              <span className="sm:hidden">Objektivne recenzije kladionica i stručni savjeti</span>
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-magazine-coral hover:bg-magazine-coral/90 text-white text-sm md:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Pregledaj Kladionice
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right column - Trust indicators */}
          <div className="flex justify-center md:justify-end mt-2 md:mt-0">
            {/* Mobile: Compact inline badges in 1-2 rows */}
            <div className="md:hidden flex flex-wrap gap-2 justify-center">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-3.5 h-3.5 text-magazine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-white text-[11px] font-medium">Licencirane</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-3.5 h-3.5 text-magazine-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white text-[11px] font-medium">Stručne Recenzije</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-croatia-red font-bold text-[11px]">18+</span>
                <span className="text-white text-[11px] font-medium">Odgovorno</span>
              </div>
            </div>

            {/* Desktop: Full card with details */}
            <div className="hidden md:block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-sm w-full">
              <h3 className="text-white font-semibold mb-4 text-center">Zašto nas odabrati?</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-magazine-teal/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-magazine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">Licencirane Kladionice</span>
                    <p className="text-white/60 text-xs">Samo legalni operateri</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-magazine-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-magazine-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">Stručne Recenzije</span>
                    <p className="text-white/60 text-xs">Detaljne i nepristrane</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-croatia-red/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-croatia-red font-bold text-sm">18+</span>
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">Odgovorno Klađenje</span>
                    <p className="text-white/60 text-xs">Sigurnost na prvom mjestu</p>
                  </div>
                </div>
              </div>

              {/* Transparency link */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 w-full text-xs text-white/60 hover:text-white transition-colors underline decoration-dotted underline-offset-2"
              >
                Kako ocjenjujemo kladionice?
              </button>
            </div>
          </div>
        </div>
      </div>

      <SportJournalAdvertiserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
