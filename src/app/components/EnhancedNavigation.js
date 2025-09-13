"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, Calendar, Trophy, MessageCircle, BarChart3, Target } from "lucide-react"

const navigationItems = [
  {
    id: "mens-fixtures",
    label: "India men's fixtures",
    icon: Calendar,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    id: "womens-fixtures",
    label: "India women's fixtures",
    icon: Calendar,
    color: "from-pink-500 to-pink-600",
    hoverColor: "hover:from-pink-600 hover:to-pink-700",
  },
  {
    id: "points-table",
    label: "Points table",
    icon: BarChart3,
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
  },
  {
    id: "top-scorers",
    label: "Top-scorers",
    icon: Target,
    color: "from-orange-500 to-orange-600",
    hoverColor: "hover:from-orange-600 hover:to-orange-700",
  },
  {
    id: "ask-us",
    label: "Ask us",
    icon: MessageCircle,
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700",
  },
  {
    id: "team-rankings",
    label: "Team rankings",
    icon: Trophy,
    color: "from-amber-500 to-amber-600",
    hoverColor: "hover:from-amber-600 hover:to-amber-700",
  },
]

export function EnhancedNavigation() {
  const [activeItem, setActiveItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="w-[100vw]">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <nav className="flex flex-wrap justify-center gap-3 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            const isHovered = hoveredItem === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "group relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ease-out",
                  "border-2 border-transparent",
                  "hover:scale-105 hover:shadow-lg",
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105 border-white/20`
                    : "bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700",
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-all duration-300",
                    isActive
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200",
                    isHovered && "rotate-12",
                  )}
                />
                <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-all duration-300",
                    isActive
                      ? "text-white/80 translate-x-1"
                      : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1",
                  )}
                />

                {/* Animated background gradient */}
                {isHovered && !isActive && (
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full bg-gradient-to-r opacity-10 transition-opacity duration-300",
                      item.color,
                    )}
                  />
                )}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-4">
          <div className="grid grid-cols-2 gap-3">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300",
                    "border-2 border-transparent",
                    isActive
                      ? `bg-gradient-to-br ${item.color} text-white shadow-lg scale-105`
                      : "bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      isActive ? "text-white" : "text-gray-500 dark:text-gray-400",
                    )}
                  />
                  <span className="font-medium text-xs text-center leading-tight">{item.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Active Content Indicator */}
      {activeItem && (
        <div className="mt-6 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          <p className="text-center text-gray-600 dark:text-gray-300">
            <span className="font-semibold">{navigationItems.find((item) => item.id === activeItem)?.label}</span>{" "}
            content would be displayed here
          </p>
        </div>
      )}
    </div>
  )
}
