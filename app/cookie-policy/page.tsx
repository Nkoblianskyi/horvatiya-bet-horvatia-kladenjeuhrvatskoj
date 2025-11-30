export default function CookiePolicyPage() {
  return (
    <div className="bg-magazine-cream min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <article className="bg-magazine-white rounded-2xl shadow-sm border border-magazine-border p-6 md:p-10">
          <header className="text-center pb-6 border-b border-magazine-border mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-magazine-blue uppercase tracking-wider bg-magazine-blue/10 rounded-full mb-3">
              Pravila
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-magazine-slate mb-3 text-balance">
              Politika Kolačića
            </h1>
            <p className="text-magazine-gray">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Što su Kolačići?</h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Kolačići (cookies) su male tekstualne datoteke koje web stranice pohranjuju na vaš uređaj. Omogućuju nam
                pamćenje vaših postavki i pružanje personaliziranog iskustva.
              </p>
              <p className="text-magazine-text leading-relaxed">
                Portal kladenjeuhrvatskoj.com koristi kolačiće za poboljšanje funkcionalnosti i pružanje kvalitetne
                korisničke usluge.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Vrste Kolačića</h2>
              <div className="space-y-4">
                <div className="bg-magazine-teal/5 border-l-4 border-magazine-teal p-4 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Nužni Kolačići</h3>
                  <p className="text-sm text-magazine-text">
                    Omogućuju osnovne funkcije stranice. Bez njih portal ne može ispravno funkcionirati.
                  </p>
                </div>
                <div className="bg-magazine-green/5 border-l-4 border-magazine-green p-4 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Analitički Kolačići</h3>
                  <p className="text-sm text-magazine-text">
                    Pomažu nam razumjeti kako koristite portal. Svi podaci su anonimizirani.
                  </p>
                </div>
                <div className="bg-magazine-coral/5 border-l-4 border-magazine-coral p-4 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Funkcionalni Kolačići</h3>
                  <p className="text-sm text-magazine-text">
                    Pamte vaše postavke i preferencije za personalizirano iskustvo.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Kontrola Kolačića</h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima. Možete ih blokirati ili brisati putem postavki vašeg preglednika.
                Napomena: blokiranje kolačića može utjecati na funkcionalnost stranice.
              </p>
            </section>

            <section className="bg-magazine-cream border border-magazine-border p-5 rounded-xl">
              <h2 className="text-lg font-serif font-bold text-magazine-slate mb-3">Kontakt</h2>
              <p className="text-magazine-text mb-2 text-sm">Za pitanja o kolačićima:</p>
              <a href="mailto:info@kladenjeuhrvatskoj.com" className="text-magazine-teal hover:underline font-medium">
                info@kladenjeuhrvatskoj.com
              </a>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
