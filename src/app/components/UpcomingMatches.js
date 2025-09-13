"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Calendar, MapPin, Clock } from "lucide-react"

export function UpcomingMatches() {
  const [currentMatch, setCurrentMatch] = useState(0)

  const matches = [
    {
      id: 1,
      teams: { home: "IND", away: "AUS" },
      homeFlag: "🇮🇳",
      awayFlag: "🇦🇺",
      venue: "Wankhede Stadium, Mumbai",
      date: "Tomorrow",
      time: "2:30 PM IST",
      format: "ODI",
      series: "World Cup Final",
    },
    {
      id: 2,
      teams: { home: "ENG", away: "SA" },
      homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      awayFlag: "🇿🇦",
      venue: "Lord's Cricket Ground, London",
      date: "Dec 15",
      time: "11:00 AM GMT",
      format: "Test",
      series: "Test Championship",
    },
    {
      id: 3,
      teams: { home: "PAK", away: "NZ" },
      homeFlag: "🇵🇰",
      awayFlag: "🇳🇿",
      venue: "National Stadium, Karachi",
      date: "Dec 18",
      time: "6:00 PM PKT",
      format: "T20I",
      series: "Bilateral Series",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMatch((prev) => (prev + 1) % matches.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [matches.length])

  const currentMatchData = matches[currentMatch]

  return (
    <div className="w-[100vw] max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-black drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
          UPCOMING MATCHES
        </h2>
        <button className="text-white hover:text-white font-semibold flex items-center gap-1 transition-all duration-300 bg-[#FF7F50] hover:bg-[#FF6B47] px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform">
          MORE MATCH
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0E6] dark:bg-gray-800 rounded-2xl shadow-inner">
          {/* Home Team */}
          <div className="text-center lg:text-right">
            <div className="inline-block bg-[#87CEEB] rounded-xl p-4 mb-4 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-rotate-2">
              <div className="text-6xl animate-pulse">{currentMatchData.homeFlag}</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 hover:text-[#E4004B] transition-colors duration-300">
              {currentMatchData.teams.home}
            </h3>
            <div className="text-gray-600 font-semibold">Home Team</div>
          </div>

          {/* Match Details */}
          <div className="text-center space-y-4">
            <div className="bg-[#E6E6FA] rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="inline-block bg-[#E4004B] text-white font-bold text-sm px-3 py-1 rounded-full mb-3 animate-pulse shadow-lg">
                {currentMatchData.format}
              </div>
              <div className="text-gray-800 font-bold text-xl mb-4">{currentMatchData.series}</div>

              <div className="space-y-3 text-sm text-gray-800">
                <div className="flex items-center justify-center gap-2 hover:text-[#E4004B] transition-colors duration-300">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{currentMatchData.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 hover:text-[#E4004B] transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{currentMatchData.time}</span>
                </div>
                <div className="flex items-center justify-center gap-2 hover:text-[#E4004B] transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">{currentMatchData.venue}</span>
                </div>
              </div>
            </div>

            <div className="text-5xl font-bold text-gray-800 animate-bounce hover:text-[#E4004B] transition-colors duration-300">
              VS
            </div>
          </div>

          {/* Away Team */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-[#F0A0A0] rounded-xl p-4 mb-4 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:rotate-2">
              <div className="text-6xl animate-pulse">{currentMatchData.awayFlag}</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 hover:text-[#E4004B] transition-colors duration-300">
              {currentMatchData.teams.away}
            </h3>
            <div className="text-gray-600 font-semibold">Away Team</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-4 flex">
          {matches.map((_, index) => (
            <div
              key={index}
              className={`flex-1 transition-all duration-500 transform hover:scale-y-150 ${
                index === 0 ? "bg-[#E4004B]" : index === 1 ? "bg-[#FF7F50]" : "bg-[#87CEEB]"
              } ${index === currentMatch ? "opacity-100 shadow-lg" : "opacity-60"}`}
            />
          ))}
        </div>

        {/* Match Indicators */}
        <div className="absolute top-4 right-4 flex gap-3">
          {matches.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMatch(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 transform ${
                index === currentMatch
                  ? "bg-[#E4004B] w-8 shadow-xl animate-pulse"
                  : "bg-gray-300 hover:bg-[#FF7F50] shadow-md"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="flex justify-center mt-6 gap-3">
        {matches.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMatch(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 transform shadow-lg ${
              index === currentMatch
                ? "bg-[#E4004B] scale-125 animate-pulse shadow-xl"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
