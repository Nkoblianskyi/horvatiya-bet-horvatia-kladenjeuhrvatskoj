export function SportJournalResponsibleGambling() {
  return (
    <section className="py-14 px-4 bg-magazine-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-magazine-coral uppercase tracking-wider bg-magazine-coral/10 rounded-full mb-3">
            Važno
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-magazine-slate mb-2">
            Sigurno i Odgovorno Klađenje
          </h2>
          <div className="h-1 w-16 bg-magazine-teal mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-magazine-cream p-6 rounded-xl border border-magazine-border">
            <h3 className="text-xl font-serif font-bold text-magazine-slate mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-magazine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Što Znači Odgovorno Klađenje?
            </h3>
            <p className="text-magazine-text leading-relaxed mb-4">
              Odgovorno klađenje podrazumijeva pristup sportskom klađenju kao obliku zabave, a ne kao načinu zarade.
              Ključno je postaviti jasne granice i dosljedno ih se pridržavati. Klađenje nikada ne bi smjelo utjecati na
              vaše obveze, financijsku stabilnost ili međuljudske odnose.
            </p>
            <p className="text-magazine-text leading-relaxed">
              Licencirane kladionice u Hrvatskoj nude razne alate za samokontrolu: limiti uplata, vremenski podsjetnici,
              mogućnost samoisključenja. Koristite ih i budite iskreni prema sebi o svojim navikama.
            </p>
          </div>

          <div className="bg-magazine-teal text-white p-6 rounded-xl text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold">18+</span>
            </div>
            <p className="text-lg font-semibold mb-2">Klađenje je dozvoljeno samo punoljetnim osobama</p>
            <p className="text-sm opacity-90">
              Kockanje može izazvati ovisnost. Ako primijetite problematično ponašanje, potražite stručnu pomoć.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
