"use client"

import Link from "next/link"
import Image from "next/image"

export function SportJournalFooter() {
  return (
    <footer className="bg-magazine-slate relative z-20">
      <div className="w-full h-1 bg-gradient-to-r from-magazine-teal via-magazine-coral to-magazine-green" />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2.5 font-serif text-xl font-bold text-croatia-red mb-3">
              <Image src="/favicon.ico" alt="Sport Journal Logo" width={32} height={32} />
              Klađenje<span className="text-white"> u </span>
              <span className="text-blue-800">Hrvatskoj</span>
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Vaš pouzdani vodič za sportsko klađenje u Hrvatskoj. Objektivne recenzije, stručne analize i savjeti za
              informirano i odgovorno klađenje.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-croatia-red/20 rounded-lg border border-croatia-red/30">
              <span className="text-white font-bold text-xl">18+</span>
            </div>
          </div>

          {/* Navigation section */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-white/20 pb-2">Navigacija</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 hover:text-magazine-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-magazine-teal rounded-full" />
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-white/80 hover:text-magazine-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-magazine-teal rounded-full" />O Nama
                </Link>
              </li>
              <li>
                <Link
                  href="/pro-sport"
                  className="text-sm text-white/80 hover:text-magazine-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-magazine-teal rounded-full" />
                  Sport
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/80 hover:text-magazine-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-magazine-teal rounded-full" />
                  Privatnost
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-white/80 hover:text-magazine-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-magazine-teal rounded-full" />
                  Kolačići
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible gambling section */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-white/20 pb-2">
              Odgovorno Klađenje
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Klađenje je zabava za odrasle. Igrajte odgovorno i postavite limite. Ako osjetite da gubite kontrolu,
              potražite pomoć.
            </p>
          </div>
        </div>

        {/* Support organizations */}
        <div className="border-t border-white/20 pt-8 pb-8">
          <h4 className="font-serif text-base font-bold text-white mb-5 text-center">Organizacije za Pomoć</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">

            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[120px] h-[56px] p-2 rounded bg-white shadow-sm">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain p-2" />
              </div>
            </Link>
            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[120px] h-[56px] p-2 rounded bg-white shadow-sm">
                <Image src="/hupis.png" alt="HUPIS" fill className="object-contain p-2" />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[120px] h-[56px] p-2 rounded bg-white shadow-sm">
                <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain p-2" />
              </div>
            </Link>
            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[120px] h-[56px] p-2 rounded bg-white shadow-sm">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain p-2" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[120px] h-[56px] p-2 rounded bg-white shadow-sm">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain p-2" />
              </div>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/20 pt-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-xs text-white/60 leading-relaxed text-center">
              <strong className="text-white/80">Napomena:</strong> kladenjeuhrvatskoj.com pruža informativni sadržaj i
              recenzije platformi za klađenje. Ne pružamo usluge klađenja. Bonusi i uvjeti podliježu promjenama -
              provjerite aktualne uvjete kod operatera.
            </p>
            <p className="text-xs text-white/60 text-center">
              Klađenje može biti štetno. Igrajte odgovorno. <span className="font-bold text-magazine-coral">18+</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 pt-5">
          <p className="text-xs text-white/50 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-magazine-teal">kladenjeuhrvatskoj.com</span> — Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
