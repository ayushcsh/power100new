"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function LatestNewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const newsLayouts = [
    {
      featured: {
        bg: "bg-gradient-to-br from-orange-500 to-red-600",
        tag: "Match Report",
        title: "DUBE SMASHES - DOING IT WITH STYLE, DOING IT WITH SUBSTANCE",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        time: "4h ago",
        author: "Nulla Porta",
      },
      cards: [
        {
          bg: "bg-gradient-to-br from-emerald-400 to-teal-600",
          tag: "Latest News",
          title: "Suspendisse ullamcorper, non porta lectus tortor et elit.",
          time: "3h ago",
          author: "Ipsum Amet",
        },
        {
          bg: "bg-gradient-to-br from-violet-500 to-purple-700",
          tag: "Popular",
          title: "LIVE: Openers tee off for India in West",
          time: "5h ago",
          author: "Nulla Quis",
        },
        {
          bg: "bg-gradient-to-br from-blue-600 to-indigo-800",
          tag: "Trending",
          title: "Incididunt ut labore et dolore magna aliqua Ut enim",
          time: "6h ago",
          author: "Lorem Porta",
        },
        {
          bg: "bg-gradient-to-br from-cyan-400 to-blue-500",
          tag: "Weather News",
          title: "Jewell-led beat Bulls despite McDermott heroics",
          time: "7h ago",
          author: "Sed Augue",
        },
      ],
    },
    {
      featured: {
        bg: "bg-gradient-to-br from-pink-500 to-rose-600",
        tag: "Breaking News",
        title: "KOHLI CENTURY - MASTERCLASS IN BATTING EXCELLENCE",
        description:
          "A spectacular display of batting prowess as the master batsman reaches another milestone in his illustrious career.",
        time: "2h ago",
        author: "Cricket Expert",
      },
      cards: [
        {
          bg: "bg-gradient-to-br from-lime-400 to-green-600",
          tag: "Live Score",
          title: "India vs Australia: Thrilling contest unfolds",
          time: "1h ago",
          author: "Live Reporter",
        },
        {
          bg: "bg-gradient-to-br from-amber-400 to-orange-600",
          tag: "Analysis",
          title: "Strategic breakdown of winning formula",
          time: "2h ago",
          author: "Strategy Guru",
        },
        {
          bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
          tag: "Player Focus",
          title: "Rising stars making their mark",
          time: "3h ago",
          author: "Talent Scout",
        },
        {
          bg: "bg-gradient-to-br from-teal-400 to-cyan-600",
          tag: "Stats Corner",
          title: "Record-breaking performances this season",
          time: "4h ago",
          author: "Stats Master",
        },
      ],
    },
    {
      featured: {
        bg: "bg-gradient-to-br from-emerald-600 to-green-700",
        tag: "Tournament Update",
        title: "WORLD CUP FEVER - TEAMS GEAR UP FOR ULTIMATE SHOWDOWN",
        description:
          "As the tournament approaches, teams are finalizing their strategies and squad selections for the biggest cricket event.",
        time: "1h ago",
        author: "Tournament Insider",
      },
      cards: [
        {
          bg: "bg-gradient-to-br from-rose-400 to-pink-600",
          tag: "Team News",
          title: "Squad announcements create buzz",
          time: "30m ago",
          author: "Team Reporter",
        },
        {
          bg: "bg-gradient-to-br from-yellow-400 to-amber-500",
          tag: "Predictions",
          title: "Experts predict tournament favorites",
          time: "1h ago",
          author: "Cricket Analyst",
        },
        {
          bg: "bg-gradient-to-br from-purple-500 to-violet-700",
          tag: "History",
          title: "Memorable moments from past tournaments",
          time: "2h ago",
          author: "Cricket Historian",
        },
        {
          bg: "bg-gradient-to-br from-blue-400 to-indigo-500",
          tag: "Fan Zone",
          title: "Supporters gear up for mega event",
          time: "3h ago",
          author: "Fan Correspondent",
        },
      ],
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsLayouts.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [newsLayouts.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsLayouts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsLayouts.length) % newsLayouts.length)
  }

  const currentLayout = newsLayouts[currentSlide]

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">LATEST NEWS</h2>
        <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 transition-colors">
          MORE NEWS
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {newsLayouts.map((layout, layoutIndex) => (
            <div key={layoutIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                {/* Featured Article - Left Side */}
                <div className="lg:col-span-2">
                  <div
                    className={`${layout.featured.bg} rounded-xl p-8 h-full flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
                      <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-white/10"></div>
                    </div>

                    <div className="relative z-10">
                      <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm mb-4 shadow-lg">
                        {layout.featured.tag}
                      </span>
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                        {layout.featured.title}
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base mb-6 leading-relaxed">
                        {layout.featured.description}
                      </p>
                    </div>

                    <div className="relative z-10">
                      <p className="text-white/80 text-sm">
                        {layout.featured.time} • {layout.featured.author}
                      </p>
                    </div>
                  </div>
                </div>

                {/* News Cards Grid - Right Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {layout.cards.map((card, cardIndex) => (
                    <div key={cardIndex} className="group cursor-pointer">
                      <div
                        className={`${card.bg} rounded-xl p-6 h-40 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                      >
                        {/* Background Elements */}
                        <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-white/10"></div>
                        <div className="absolute bottom-2 left-2 w-12 h-12 rounded-full bg-white/5"></div>

                        <div className="relative z-10">
                          <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-md font-bold text-xs mb-3 shadow-md">
                            {card.tag}
                          </span>
                          <h4 className="text-white font-bold text-sm leading-tight mb-2 line-clamp-2">{card.title}</h4>
                        </div>

                        <div className="relative z-10">
                          <p className="text-white/80 text-xs">
                            {card.time} • {card.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 gap-3">
        {newsLayouts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
