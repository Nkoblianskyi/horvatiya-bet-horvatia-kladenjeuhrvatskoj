"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function SportJournalCookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-magazine-white border-t-2 border-magazine-teal shadow-2xl">
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex-1">
            <h3 className="text-magazine-slate font-serif font-bold text-lg mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-magazine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Kolačići i Privatnost
            </h3>
            <p className="text-magazine-text text-sm leading-relaxed">
              Koristimo kolačiće za poboljšanje vašeg iskustva. Prihvaćanjem pristajete na našu{" "}
              <Link href="/cookie-policy" className="text-magazine-teal hover:underline font-medium">
                Politiku kolačića
              </Link>{" "}
              i{" "}
              <Link href="/privacy-policy" className="text-magazine-teal hover:underline font-medium">
                Politiku privatnosti
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-5 py-2.5 bg-magazine-cream hover:bg-magazine-border border border-magazine-border text-magazine-slate font-semibold rounded-lg transition-colors text-sm"
            >
              Odbij
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-5 py-2.5 bg-magazine-teal hover:bg-magazine-teal/90 text-white font-semibold rounded-lg transition-colors text-sm shadow-sm"
            >
              Prihvati
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
