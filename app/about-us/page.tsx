export default function AboutUsPage() {
  return (
    <div className="bg-magazine-cream min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <article className="bg-magazine-white rounded-2xl shadow-sm border border-magazine-border p-6 md:p-10">
          <header className="text-center pb-6 border-b border-magazine-border mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-magazine-teal uppercase tracking-wider bg-magazine-teal/10 rounded-full mb-3">
              O Nama
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-magazine-slate mb-3 text-balance">
              Vaš Vodič za Sportsko Klađenje
            </h1>
            <p className="text-magazine-gray">Pouzdane informacije, stručne analize i objektivne recenzije</p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Tko Smo Mi</h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Klađenje u Hrvatskoj (kladenjeuhrvatskoj.com) je nezavisni informativni portal posvećen pružanju
                objektivnih, stručnih analiza i recenzija platformi za sportsko klađenje u Hrvatskoj.
              </p>
              <p className="text-magazine-text leading-relaxed">
                Naš tim čine entuzijasti s višegodišnjim iskustvom u praćenju sportskog klađenja. Cilj nam je educirati
                korisnike i promicati odgovoran pristup klađenju.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Naša Misija</h2>
              <div className="bg-magazine-cream border-l-4 border-magazine-teal p-5 rounded-r-xl">
                <ul className="space-y-3 text-magazine-text">
                  <li className="flex items-start gap-3">
                    <span className="text-magazine-teal mt-1">•</span>
                    <span>Pružanje transparentnih i objektivnih recenzija kladionica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magazine-teal mt-1">•</span>
                    <span>Educiranje o odgovornom klađenju i upravljanju rizicima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magazine-teal mt-1">•</span>
                    <span>Praćenje sportskih vijesti i trendova</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magazine-teal mt-1">•</span>
                    <span>Promicanje licenciranih i sigurnih platformi</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Naše Vrijednosti</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-magazine-teal/5 p-5 rounded-xl border border-magazine-teal/20">
                  <h3 className="font-bold text-lg text-magazine-slate mb-2">Transparentnost</h3>
                  <p className="text-sm text-magazine-text">
                    Jasno objavljujemo naše metode ocjenjivanja i potencijalne komercijalne odnose.
                  </p>
                </div>
                <div className="bg-magazine-green/5 p-5 rounded-xl border border-magazine-green/20">
                  <h3 className="font-bold text-lg text-magazine-slate mb-2">Objektivnost</h3>
                  <p className="text-sm text-magazine-text">
                    Sve recenzije temelje se na detaljnim testiranjima bez utjecaja komercijalnih interesa.
                  </p>
                </div>
                <div className="bg-magazine-coral/5 p-5 rounded-xl border border-magazine-coral/20">
                  <h3 className="font-bold text-lg text-magazine-slate mb-2">Odgovornost</h3>
                  <p className="text-sm text-magazine-text">
                    Aktivno promičemo odgovorno klađenje i upozoravamo na povezane rizike.
                  </p>
                </div>
                <div className="bg-magazine-amber/5 p-5 rounded-xl border border-magazine-amber/20">
                  <h3 className="font-bold text-lg text-magazine-slate mb-2">Stručnost</h3>
                  <p className="text-sm text-magazine-text">
                    Kontinuirano pratimo tržište i educiramo se o novim trendovima u industriji.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-magazine-cream border border-magazine-border p-6 rounded-xl">
              <h2 className="text-xl font-serif font-bold text-magazine-slate mb-3">Kontakt</h2>
              <p className="text-magazine-text mb-3">Imate pitanja ili prijedloge? Javite nam se:</p>
              <p className="text-magazine-slate font-semibold">
                <a href="mailto:info@kladenjeuhrvatskoj.com" className="text-magazine-teal hover:underline">
                  info@kladenjeuhrvatskoj.com
                </a>
              </p>
            </section>

            <div className="pt-6 border-t border-magazine-border text-center">
              <p className="text-sm text-magazine-gray italic">
                Klađenje može biti štetno. Igrajte odgovorno. <span className="font-bold text-croatia-red">18+</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
