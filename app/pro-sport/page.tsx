export default function ProSportPage() {
  return (
    <div className="bg-magazine-cream min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <article className="bg-magazine-white rounded-2xl shadow-sm border border-magazine-border p-6 md:p-10">
          <header className="text-center pb-6 border-b border-magazine-border mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-magazine-green uppercase tracking-wider bg-magazine-green/10 rounded-full mb-3">
              Vodič
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-magazine-slate mb-3 text-balance">
              Sportsko Klađenje u Hrvatskoj
            </h1>
            <p className="text-magazine-gray max-w-2xl mx-auto">
              Detaljan vodič kroz svijet sportskog klađenja - od osnova do naprednih strategija
            </p>
          </header>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Uvod u Sportsko Klađenje
              </h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Sportsko klađenje u Hrvatskoj ima dugu tradiciju koja seže desetljećima unazad. Od prvih kladionica koje
                su otvorene početkom 1990-ih godina, ova industrija je doživjela značajan rast i transformaciju. Danas
                je klađenje na sportske događaje regulirana djelatnost koja privlači stotine tisuća Hrvata koji uživaju
                u praćenju sporta uz dodatnu dozu uzbuđenja.
              </p>
              <p className="text-magazine-text leading-relaxed mb-4">
                Hrvatska ima bogatu sportsku povijest s brojnim uspjesima na međunarodnoj sceni - od srebra na Svjetskom
                prvenstvu u nogometu 2018. godine do olimpijskih medalja u vaterpolu, rukometu i atletici. Ova sportska
                kultura prirodno je potaknula interes za sportsko klađenje među navijačima koji žele još više
                sudjelovati u sportskim događanjima.
              </p>
              <p className="text-magazine-text leading-relaxed">
                U ovom vodiču ćemo vas provesti kroz sve aspekte sportskog klađenja - od razumijevanja kvota i vrsta
                oklada, do strategija upravljanja budžetom i odgovornog klađenja. Bez obzira jeste li početnik ili
                iskusni kladioničar, ovdje ćete pronaći korisne informacije koje će vam pomoći da donosite informirane
                odluke.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Popularni Sportovi za Klađenje
              </h2>
              <p className="text-magazine-text leading-relaxed mb-6">
                Hrvatski kladioničari imaju širok izbor sportova na koje mogu kladiti. Svaki sport ima svoje
                specifičnosti, različite vrste tržišta i mogućnosti za klađenje. Evo pregleda najpopularnijih sportova:
              </p>

              <div className="space-y-6">
                <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
                  <h3 className="font-bold text-magazine-slate text-lg mb-3">Nogomet</h3>
                  <p className="text-magazine-text mb-3">
                    Nogomet je daleko najpopularniji sport za klađenje u Hrvatskoj. Hrvatska nogometna liga (HNL)
                    privlači značajnu pozornost, posebno utakmice velikih klubova poput Dinama, Hajduka, Rijeke i
                    Osijeka.
                  </p>
                  <p className="text-magazine-text mb-3">
                    Međunarodna natjecanja poput Lige prvaka, Europske lige, Premier League, Serie A, La Lige i
                    Bundeslige također su izuzetno popularna. Reprezentativne utakmice Hrvatske uvijek privlače najveći
                    interes.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Popularna tržišta: konačan ishod (1X2), broj golova, oba tima daju gol, hendikep, poluvrijeme/kraj
                  </p>
                </div>

                <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
                  <h3 className="font-bold text-magazine-slate text-lg mb-3">Košarka</h3>
                  <p className="text-magazine-text mb-3">
                    Košarka je drugi najpopularniji sport za klađenje. NBA liga dominira ponudom, a utakmice se igraju
                    noću po srednjoeuropskom vremenu što omogućuje večernje klađenje. Euroliga i ABA liga također su
                    vrlo praćene.
                  </p>
                  <p className="text-magazine-text mb-3">
                    Hrvatski košarkaški klubovi poput Cibone i Cedevite imaju vjernu bazu navijača koji redovito prate i
                    klade se na njihove utakmice u domaćim i europskim natjecanjima.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Popularna tržišta: pobjednik, hendikep, ukupno poena, četvrtine, individualne statistike igrača
                  </p>
                </div>

                <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
                  <h3 className="font-bold text-magazine-slate text-lg mb-3">Tenis</h3>
                  <p className="text-magazine-text mb-3">
                    Tenis je popularan zbog čestih turnira tijekom cijele godine i mogućnosti live klađenja. Grand Slam
                    turniri (Australian Open, Roland Garros, Wimbledon, US Open) privlače najviše pažnje.
                  </p>
                  <p className="text-magazine-text mb-3">
                    ATP i WTA turniri nude svakodnevne mogućnosti za klađenje. Hrvatska ima tradiciju izvrsnih tenisača
                    poput Gorana Ivaniševića, Marije Žuraj, Borne Ćorića i Marine Čilić što dodatno povećava interes.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Popularna tržišta: pobjednik meča, hendikep setova/gemova, ukupno gemova, točan rezultat
                  </p>
                </div>

                <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
                  <h3 className="font-bold text-magazine-slate text-lg mb-3">Rukomet</h3>
                  <p className="text-magazine-text mb-3">
                    Hrvatska je rukometna velesila s brojnim uspjesima na velikim natjecanjima. Svjetsko i Europsko
                    prvenstvo u rukometu uvijek privlače ogroman interes hrvatskih kladioničara.
                  </p>
                  <p className="text-magazine-text mb-3">
                    Liga prvaka u rukometu, kao i domaća Premijer liga, nude redovite mogućnosti za klađenje. Utakmice
                    hrvatske reprezentacije tradicionalno imaju najviše oklada.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Popularna tržišta: konačan ishod, hendikep, ukupno golova, poluvrijeme
                  </p>
                </div>

                <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
                  <h3 className="font-bold text-magazine-slate text-lg mb-3">Ostali Sportovi</h3>
                  <p className="text-magazine-text mb-3">
                    Formula 1 i MotoGP privlače ljubitelje motornih sportova, posebno utrke na poznatim stazama. Hokej
                    na ledu (NHL, KHL), američki nogomet (NFL), boks i MMA također imaju svoju publiku.
                  </p>
                  <p className="text-magazine-text">
                    Vaterpolo je još jedan sport u kojem Hrvatska ima bogatu tradiciju i uspjehe, a utakmice
                    reprezentacije i klubova u Ligi prvaka redovito se nalaze u ponudi kladionica.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Vrste Sportskih Oklada
              </h2>
              <p className="text-magazine-text leading-relaxed mb-6">
                Razumijevanje različitih vrsta oklada ključno je za uspješno klađenje. Svaka vrsta ima svoje prednosti i
                rizike koje treba uzeti u obzir.
              </p>

              <div className="space-y-5">
                <div className="bg-magazine-teal/5 border-l-4 border-magazine-teal p-5 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Pojedinačne oklade (Singlovi)</h3>
                  <p className="text-magazine-text mb-2">
                    Klađenje na ishod jednog događaja je najjednostavniji oblik klađenja. Uložak se množi s kvotom
                    odabranog ishoda, a dobitak ovisi isključivo o tom jednom rezultatu.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Prednosti: manji rizik, lakše praćenje, dobro za početnike. Nedostaci: manji potencijalni dobici u
                    odnosu na ulog.
                  </p>
                </div>

                <div className="bg-magazine-coral/5 border-l-4 border-magazine-coral p-5 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Kombinirane oklade (Tiketi)</h3>
                  <p className="text-magazine-text mb-2">
                    Više oklada na jednom listiću gdje se kvote međusobno množe. Sve oklade moraju biti dobitne da bi
                    tiket bio uspješan. Ovo omogućuje velike dobitke s malim ulogom.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Prednosti: veliki potencijalni dobici, uzbuđenje praćenja više utakmica. Nedostaci: značajno veći
                    rizik, jedna pogrešna oklada poništava cijeli tiket.
                  </p>
                </div>

                <div className="bg-magazine-green/5 border-l-4 border-magazine-green p-5 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Klađenje uživo (Live betting)</h3>
                  <p className="text-magazine-text mb-2">
                    Klađenje tijekom trajanja sportskog događaja s kvotama koje se dinamički mijenjaju ovisno o tijeku
                    utakmice. Omogućuje reagiranje na stvarne događaje na terenu.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Prednosti: mogućnost iskorištavanja trenutnih situacija, veća angažiranost. Nedostaci: brze promjene
                    kvota, potrebna brza reakcija i dobro poznavanje sporta.
                  </p>
                </div>

                <div className="bg-magazine-amber/5 border-l-4 border-magazine-amber p-5 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Sistemske oklade</h3>
                  <p className="text-magazine-text mb-2">
                    Napredni oblik kombiniranih oklada gdje nije potrebno da sve oklade budu dobitne. Sistem automatski
                    generira sve moguće kombinacije odabranih parova.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Prednosti: veća šansa za dobitak nego kod klasičnih kombinacija, fleksibilnost. Nedostaci: veći ulog
                    potreban za pokriće svih kombinacija.
                  </p>
                </div>

                <div className="bg-magazine-slate/5 border-l-4 border-magazine-slate p-5 rounded-r-xl">
                  <h3 className="font-bold text-magazine-slate mb-2">Specijalne oklade</h3>
                  <p className="text-magazine-text mb-2">
                    Oklade na specifične događaje unutar utakmice - tko će zabiti prvi gol, broj kornera, broj žutih
                    kartona, statistike pojedinih igrača i slično.
                  </p>
                  <p className="text-sm text-magazine-gray">
                    Prednosti: raznolikost, mogućnost iskorištavanja specifičnog znanja. Nedostaci: često teže
                    predvidljive, kvote mogu biti manje povoljne.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">Razumijevanje Kvota</h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Kvote predstavljaju vjerojatnost određenog ishoda prema procjeni kladionice, ali i potencijalni dobitak.
                U Hrvatskoj se koriste decimalne kvote koje su jednostavne za razumijevanje.
              </p>
              <p className="text-magazine-text leading-relaxed mb-4">
                Decimalna kvota pokazuje koliko ćete dobiti za svaku uloženu jedinicu. Na primjer, kvota 2.50 znači da
                za ulog od 10 kuna dobivate 25 kuna (ulog x kvota = potencijalni dobitak).
              </p>
              <p className="text-magazine-text leading-relaxed mb-4">
                Niže kvote (npr. 1.20-1.50) ukazuju na favorita - veća vjerojatnost dobitka, ali manji dobitak. Više
                kvote (npr. 3.00+) označavaju autsajdera - manja vjerojatnost, ali veći potencijalni dobitak.
              </p>
              <div className="bg-magazine-cream p-5 rounded-xl border border-magazine-border">
                <h3 className="font-bold text-magazine-slate mb-3">Primjer izračuna</h3>
                <p className="text-magazine-text mb-2">Ulog: 100 HRK na kvotu 2.00</p>
                <p className="text-magazine-text mb-2">Potencijalni dobitak: 100 x 2.00 = 200 HRK</p>
                <p className="text-magazine-text">Čisti profit: 200 - 100 = 100 HRK</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Strategije i Savjeti
              </h2>
              <p className="text-magazine-text leading-relaxed mb-6">
                Uspješno klađenje zahtijeva disciplinu, istraživanje i strateški pristup. Evo ključnih savjeta koji vam
                mogu pomoći da donosite bolje odluke:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-magazine-teal/20 flex items-center justify-center text-magazine-teal font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-magazine-slate mb-1">Istraživanje i analiza</h3>
                    <p className="text-magazine-text text-sm">
                      Prije svakog klađenja proučite statistiku, formu momčadi, ozljede igrača, međusobne susrete i sve
                      relevantne faktore. Informirane odluke su temelj uspješnog klađenja.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-magazine-teal/20 flex items-center justify-center text-magazine-teal font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-magazine-slate mb-1">Upravljanje budžetom</h3>
                    <p className="text-magazine-text text-sm">
                      Odredite mjesečni budžet za klađenje i strogo ga se pridržavajte. Nikada ne ulažite novac koji vam
                      je potreban za osnovne životne troškove. Preporučuje se ulaganje 1-5% bankrolla po okladi.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-magazine-teal/20 flex items-center justify-center text-magazine-teal font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-magazine-slate mb-1">Specijalizacija</h3>
                    <p className="text-magazine-text text-sm">
                      Fokusirajte se na sportove i lige koje dobro poznajete. Bolje je biti stručnjak za jednu ligu nego
                      površno pratiti deset različitih natjecanja.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-magazine-teal/20 flex items-center justify-center text-magazine-teal font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-magazine-slate mb-1">Usporedba kvota</h3>
                    <p className="text-magazine-text text-sm">
                      Različite kladionice nude različite kvote za iste događaje. Usporedba i odabir najbolje kvote s
                      vremenom može značajno povećati vaše ukupne dobitke.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-magazine-teal/20 flex items-center justify-center text-magazine-teal font-bold text-sm">
                    5
                  </span>
                  <div>
                    <h3 className="font-bold text-magazine-slate mb-1">Emocionalna kontrola</h3>
                    <p className="text-magazine-text text-sm">
                      Ne kladite se pod utjecajem emocija, alkohola ili nakon niza gubitaka. Pokušaj brzog vraćanja
                      izgubljenog novca često vodi u još veće gubitke.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-magazine-teal/20 flex items-center justify-center text-magazine-teal font-bold text-sm">
                    6
                  </span>
                  <div>
                    <h3 className="font-bold text-magazine-slate mb-1">Vođenje evidencije</h3>
                    <p className="text-magazine-text text-sm">
                      Zapisujte sve svoje oklade - ulog, kvotu, ishod i profit/gubitak. Analiza vlastitih rezultata
                      pomoći će vam identificirati snage i slabosti vašeg pristupa.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-magazine-slate mb-4">
                Zakonski Okvir u Hrvatskoj
              </h2>
              <p className="text-magazine-text leading-relaxed mb-4">
                Sportsko klađenje u Hrvatskoj je legalno i regulirano Zakonom o igrama na sreću. Sve kladionice moraju
                imati koncesiju Ministarstva financija i pridržavati se strogih pravila o zaštiti igrača.
              </p>
              <p className="text-magazine-text leading-relaxed mb-4">
                Klađenje je dozvoljeno samo osobama starijim od 18 godina. Kladionice su dužne provjeravati dob
                korisnika i omogućiti alate za samoisključenje i postavljanje limita.
              </p>
              <p className="text-magazine-text leading-relaxed">
                Online kladionice koje posluju u Hrvatskoj moraju imati .hr domenu i hrvatsku licencu. Igranje na
                nelicenciranim stranicama nije preporučljivo jer ne nudi zaštitu potrošača.
              </p>
            </section>

            <section className="bg-magazine-slate text-white p-6 rounded-xl">
              <h2 className="text-xl font-serif font-bold mb-4">Odgovorno Klađenje</h2>
              <p className="text-white/90 mb-4">
                Klađenje treba biti zabava, a ne izvor stresa ili financijskih problema. Ako primijetite bilo koji od
                sljedećih znakova, vrijeme je da potražite pomoć:
              </p>
              <ul className="space-y-2 text-white/90 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-magazine-amber mt-1">-</span>
                  <span>Klađenje s novcem koji vam je potreban za račune ili osnovne potrebe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-magazine-amber mt-1">-</span>
                  <span>Osjećaj potrebe da se kladite s sve većim iznosima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-magazine-amber mt-1">-</span>
                  <span>Pokušaji vraćanja izgubljenog novca kroz daljnje klađenje</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-magazine-amber mt-1">-</span>
                  <span>Laganje obitelji ili prijateljima o klađenju</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-magazine-amber mt-1">-</span>
                  <span>Zanemarivanje posla, obitelji ili drugih obaveza zbog klađenja</span>
                </li>
              </ul>
              <p className="text-white/90 text-sm">
                Za pomoć i podršku obratite se organizacijama poput HUPIS-a, GamCare ili Plavog Križa koji nude
                besplatno savjetovanje i programe za osobe s problemima s kockanjem.
              </p>
            </section>

            <div className="pt-6 border-t border-magazine-border text-center">
              <p className="text-sm text-magazine-gray">
                Ovaj vodič ima informativni karakter. Klađenje može biti štetno i izaziva ovisnost. Igrajte odgovorno i
                samo s novcem koji možete priuštiti izgubiti.
              </p>
              <p className="text-sm font-bold text-croatia-red mt-2">Zabranjen pristup osobama mlađim od 18 godina.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
