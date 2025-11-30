"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SportJournalAdvertiserModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SportJournalAdvertiserModal({ isOpen, onClose }: SportJournalAdvertiserModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl bg-magazine-white border-2 border-magazine-border rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif font-bold text-magazine-slate flex items-center gap-2">
            <svg className="w-5 h-5 text-magazine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Kako Ocjenjujemo Kladionice
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-magazine-text">
          <p className="leading-relaxed">
            Klađenje u Hrvatskoj je nezavisni informativni portal posvećen objektivnim recenzijama platformi za sportsko
            klađenje.
          </p>
          <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
            <h3 className="font-bold text-magazine-slate mb-3">Naša Metodologija:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-magazine-teal mt-0.5">✓</span>
                <span>Detaljno testiramo svaku kladionicu prema istim kriterijima</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magazine-teal mt-0.5">✓</span>
                <span>Provjeravamo licence i sigurnosne certifikate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magazine-teal mt-0.5">✓</span>
                <span>Testiramo korisničko iskustvo i brzinu isplata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magazine-teal mt-0.5">✓</span>
                <span>Analiziramo kvalitetu kvota i sportsku ponudu</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-magazine-gray bg-magazine-cream/50 p-3 rounded-lg border border-magazine-border">
            <strong>Napomena:</strong> Možemo primati affiliate naknade za registracije putem naših poveznica. Ovo ne
            utječe na naše ocjene koje se temelje isključivo na objektivnoj analizi.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
