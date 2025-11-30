export function SportJournalSportsNews() {
  return (
    <section className="py-14 px-4 bg-magazine-cream border-t border-magazine-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-magazine-green uppercase tracking-wider bg-magazine-green/10 rounded-full mb-3">
            Savjeti
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-magazine-slate mb-2">
            Kako Sportske Vijesti Pomažu u Klađenju
          </h2>
          <div className="h-1 w-16 bg-magazine-teal mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-magazine-white p-6 rounded-xl border border-magazine-border">
            <h3 className="text-xl font-serif font-bold text-magazine-slate mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-magazine-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Zašto Pratiti Sport Prije Klađenja?
            </h3>
            <p className="text-magazine-text leading-relaxed mb-4">
              Uspješno sportsko klađenje zahtijeva informiranost. Praćenje sportskih vijesti, forme momčadi, ozljeda
              igrača i taktičkih promjena može značajno utjecati na kvalitetu vaših odluka. Informirani kladitelji
              donose pametnije procjene.
            </p>
            <p className="text-magazine-text leading-relaxed">
              Na portalu Klađenje u Hrvatskoj pratimo sve važne sportske događaje - od HNL-a i Lige prvaka do NBA lige i
              Grand Slam turnira.
            </p>
          </div>

          <div className="bg-magazine-slate text-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-magazine-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Savjet za Početnike
            </h4>
            <p className="leading-relaxed mb-3 text-white/90">
              Uložite vrijeme u istraživanje prije postavljanja uloga. Koristite pouzdane sportske izvore i statistiku,
              a izbjegavajte odluke temeljene samo na osjećaju ili navijačkoj pristranosti.
            </p>
            <p className="text-sm text-white/70">
              Zapamtite: Informirani kladitelj ima veće šanse za uspjeh. Ali uvijek igrajte odgovorno.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
