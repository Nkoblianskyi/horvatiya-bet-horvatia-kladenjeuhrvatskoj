import Image from "next/image"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function SportJournalRatingList({ sites }: RatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const StarRating = ({ rating }: { rating: number }) => {
    const starRating = (rating / 10) * 5

    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fillPercentage = Math.min(Math.max((starRating - star + 1) * 100, 0), 100)

          return (
            <div key={star} className="relative w-4 h-4">
              <svg className="w-4 h-4 text-magazine-silver" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                <svg className="w-4 h-4 text-magazine-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container: "bg-magazine-white border-2 border-magazine-teal shadow-lg shadow-magazine-teal/10",
        badge: "bg-magazine-teal text-white font-bold",
        rankText: "Najbolji Izbor",
      }
    } else if (index === 1) {
      return {
        container: "bg-magazine-white border-2 border-magazine-coral/50 shadow-md",
        badge: "bg-magazine-coral text-white font-semibold",
        rankText: "Preporučeno",
      }
    } else if (index === 2) {
      return {
        container: "bg-magazine-white border-2 border-magazine-green/50 shadow-md",
        badge: "bg-magazine-green text-white font-semibold",
        rankText: "Popularno",
      }
    } else {
      return {
        container: "bg-magazine-white border border-magazine-border shadow-sm hover:shadow-md transition-shadow",
        badge: "bg-magazine-gray text-white",
        rankText: `#${index + 1}`,
      }
    }
  }

  return (
    <section className="py-10 md:py-14 bg-magazine-cream">
      <div className="container mx-auto px-4 md:px-6 max-w-[1100px]">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-magazine-slate mb-2">
            Najbolje Kladionice u Hrvatskoj
          </h2>
          <p className="text-magazine-gray">Ažurirano i provjereno za 2025. godinu</p>
        </div>

        <div className="grid gap-5">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div
                key={site.id}
                className={`relative overflow-visible transition-all ${cardStyle.container} rounded-xl`}
              >
                {showBadge && (
                  <div className="absolute -top-3 left-6 z-10">
                    <div
                      className={`${cardStyle.badge} px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-sm`}
                    >
                      {cardStyle.rankText}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block cursor-pointer group"
                >
                  <div className="grid grid-cols-[180px_1fr_140px_160px] items-center gap-6 p-5">
                    <div className="flex items-center justify-center bg-black rounded-lg p-4 h-20 border border-magazine-border">
                      <div className="relative h-full w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center px-4">
                      <p className="text-[10px] font-sans uppercase tracking-widest text-magazine-gray mb-1.5">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="font-serif font-bold text-magazine-slate leading-tight text-xl">{site.bonus}</h3>
                      {site.dopBonus && (
                        <p className="font-medium mt-1 text-magazine-teal text-base">{site.dopBonus}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 border-l border-magazine-border">
                      <div className="text-3xl font-serif font-bold text-magazine-slate mb-1">
                        {site.rating.toFixed(1)}
                      </div>
                      <StarRating rating={site.rating} />
                      <p className="text-[10px] text-magazine-gray mt-1.5">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="flex flex-col items-stretch gap-2 px-4">
                      <div className="group-hover:bg-magazine-teal/90 transition-colors font-bold py-3 px-5 text-center uppercase tracking-wider text-xs rounded-lg bg-magazine-teal text-white shadow-sm">
                        Preuzmi Bonus
                      </div>
                      <span className="text-magazine-gray text-[10px] text-center uppercase tracking-wide">
                        Posjeti stranicu
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-magazine-border px-6 py-2.5 bg-magazine-cream/50 rounded-b-xl">
                    <p className="text-magazine-gray text-[10px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Tablet Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block lg:hidden cursor-pointer group"
                >
                  <div className="grid grid-cols-[1fr_auto]">
                    <div className="p-5 flex flex-col items-center justify-center border-r border-magazine-border">
                      <div className="relative h-16 w-36 mb-3 bg-black rounded-lg p-3 border border-magazine-border">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="text-2xl font-serif font-bold text-magazine-slate mb-1">
                        {site.rating.toFixed(1)}
                      </div>
                      <StarRating rating={site.rating} />
                      <p className="text-[10px] text-magazine-gray mt-1.5">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="p-5 flex flex-col items-center justify-center min-w-[200px]">
                      <p className="text-[10px] font-sans uppercase tracking-wider text-magazine-gray mb-2">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-magazine-slate text-lg font-serif font-bold text-center mb-1">
                        {site.bonus}
                      </h3>
                      {site.dopBonus && <p className="text-magazine-teal text-sm font-medium mb-4">{site.dopBonus}</p>}
                      <div className="w-full bg-magazine-teal hover:bg-magazine-teal/90 transition-colors text-white font-bold py-3 px-5 text-center uppercase tracking-wider text-xs rounded-lg mb-2 shadow-sm">
                        Preuzmi Bonus
                      </div>
                      <span className="text-magazine-gray text-[10px] uppercase tracking-wide">Posjeti stranicu</span>
                    </div>
                  </div>

                  <div className="bg-magazine-cream/50 px-5 py-2.5 border-t border-magazine-border rounded-b-xl">
                    <p className="text-magazine-gray text-[10px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Mobile Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden block cursor-pointer"
                >
                  <div className="grid grid-cols-[40%_60%] gap-0">
                    <div className="p-4 flex flex-col items-center justify-center border-r border-magazine-border">
                      <div className="relative h-12 w-24 mb-3 bg-black rounded-lg p-2 border border-magazine-border">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="text-xl font-serif font-bold text-magazine-slate mb-0.5">
                        {site.rating.toFixed(1)}
                      </div>
                      <div className="scale-90">
                        <StarRating rating={site.rating} />
                      </div>
                      <p className="text-[9px] text-magazine-gray mt-1">({formatNumber(site.reviews)})</p>
                    </div>

                    <div className="p-4 flex flex-col items-center justify-center">
                      <p className="text-[9px] font-sans uppercase tracking-wider text-magazine-gray mb-2">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-magazine-slate text-sm font-serif font-bold text-center mb-1">
                        {site.bonus}
                      </h3>
                      {site.dopBonus && <p className="text-magazine-teal text-xs font-medium mb-3">{site.dopBonus}</p>}
                      <div className="w-full bg-magazine-teal text-white font-bold py-2.5 px-3 text-center uppercase tracking-wide text-[10px] mb-1.5 rounded-lg shadow-sm">
                        Preuzmi Bonus
                      </div>
                      <span className="text-magazine-gray text-[9px] uppercase tracking-wide">Posjeti stranicu</span>
                    </div>
                  </div>

                  <div className="bg-magazine-cream/50 px-3 py-2 border-t border-magazine-border rounded-b-xl">
                    <p className="text-magazine-gray text-[9px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
