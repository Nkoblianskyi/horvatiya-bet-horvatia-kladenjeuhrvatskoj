import type { BettingSite } from "@/types"
import { SportJournalRatingList } from "@/components/sport-journal-rating-list"

interface OurChoiceProps {
  sites: BettingSite[]
}

export function SportJournalOurChoice({ sites }: OurChoiceProps) {
  const topSite = sites.slice(0, 1)

  return (
    <section className="py-14 px-4 bg-magazine-cream border-t border-magazine-border">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-magazine-coral uppercase tracking-wider bg-magazine-coral/10 rounded-full mb-3 border border-magazine-coral/20">
            Preporuka Uredništva
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-magazine-slate mb-3">Naš Izbor za 2025.</h2>
          <div className="w-20 h-1 bg-magazine-teal mx-auto mb-4 rounded-full"></div>
          <p className="text-base md:text-lg text-magazine-gray max-w-2xl mx-auto leading-relaxed">
            Nakon detaljne analize svih aspekata - od kvota i ponude do brzine isplate i korisničke podrške - ovo je
            naša glavna preporuka za kladionice u Hrvatskoj.
          </p>
        </div>

        <SportJournalRatingList sites={topSite} />

        <div className="text-center mt-6">
          <p className="text-sm text-magazine-gray">
            Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  )
}
