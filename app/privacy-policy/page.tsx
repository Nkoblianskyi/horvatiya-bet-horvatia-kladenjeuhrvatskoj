export default function PrivacyPolicyPage() {
  return (
    <div className="bg-magazine-cream min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <article className="bg-magazine-white rounded-2xl shadow-sm border border-magazine-border p-6 md:p-10">
          <header className="text-center pb-6 border-b border-magazine-border mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-magazine-coral uppercase tracking-wider bg-magazine-coral/10 rounded-full mb-3">
              Privatnost
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-magazine-slate mb-3 text-balance">
              Politika Privatnosti
            </h1>
            <p className="text-magazine-gray">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Naša Predanost Privatnosti
              </h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Portal kladenjeuhrvatskoj.com se obvezuje na zaštitu vaše privatnosti. Ova politika objašnjava kako
                prikupljamo, koristimo i štitimo vaše osobne podatke.
              </p>
              <p className="text-magazine-text leading-relaxed">
                Naša praksa je usklađena s Općom uredbom o zaštiti podataka (GDPR) i hrvatskim zakonodavstvom.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Podaci koje Prikupljamo
              </h2>
              <ul className="space-y-3 text-magazine-text">
                <li className="flex items-start gap-3">
                  <span className="text-magazine-teal mt-1 font-bold">•</span>
                  <span>
                    <strong>Tehnički podaci:</strong> IP adresa, tip uređaja, preglednik
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-magazine-teal mt-1 font-bold">•</span>
                  <span>
                    <strong>Podaci o korištenju:</strong> Stranice koje posjećujete, vrijeme na portalu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-magazine-teal mt-1 font-bold">•</span>
                  <span>
                    <strong>Kontakt podaci:</strong> Email ako nas kontaktirate
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-magazine-teal/5 border-l-4 border-magazine-teal p-5 rounded-r-xl">
              <h2 className="text-lg font-serif font-bold text-magazine-slate mb-3">Kako Koristimo Podatke</h2>
              <ul className="space-y-2 text-magazine-text text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-magazine-teal">→</span>
                  <span>Pružanje i održavanje funkcionalnosti portala</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-magazine-teal">→</span>
                  <span>Poboljšanje korisničkog iskustva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-magazine-teal">→</span>
                  <span>Analiza trendova za unapređenje sadržaja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-magazine-teal">→</span>
                  <span>Zaštita sigurnosti platforme</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Vaša Prava (GDPR)</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-magazine-cream p-4 rounded-xl border border-magazine-border">
                  <h4 className="font-bold text-magazine-slate text-sm mb-1">Pristup</h4>
                  <p className="text-xs text-magazine-text">Zatražite kopiju svojih podataka</p>
                </div>
                <div className="bg-magazine-cream p-4 rounded-xl border border-magazine-border">
                  <h4 className="font-bold text-magazine-slate text-sm mb-1">Ispravak</h4>
                  <p className="text-xs text-magazine-text">Ispravite netočne podatke</p>
                </div>
                <div className="bg-magazine-cream p-4 rounded-xl border border-magazine-border">
                  <h4 className="font-bold text-magazine-slate text-sm mb-1">Brisanje</h4>
                  <p className="text-xs text-magazine-text">Zatražite brisanje podataka</p>
                </div>
                <div className="bg-magazine-cream p-4 rounded-xl border border-magazine-border">
                  <h4 className="font-bold text-magazine-slate text-sm mb-1">Prigovor</h4>
                  <p className="text-xs text-magazine-text">Prigovorite obradi podataka</p>
                </div>
              </div>
            </section>

            <section className="bg-magazine-cream border border-magazine-border p-5 rounded-xl">
              <h2 className="text-lg font-serif font-bold text-magazine-slate mb-3">Kontakt</h2>
              <p className="text-magazine-text mb-2 text-sm">Za pitanja o privatnosti ili ostvarivanje prava:</p>
              <a href="mailto:info@kladenjeuhrvatskoj.com" className="text-magazine-teal hover:underline font-medium">
                info@kladenjeuhrvatskoj.com
              </a>
              <p className="text-xs text-magazine-gray mt-3 pt-3 border-t border-magazine-border">
                Imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP).
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
