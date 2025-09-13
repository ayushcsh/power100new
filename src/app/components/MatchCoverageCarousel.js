"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MatchCoverageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0); // State to track screen width

  const matchData = [
    {
      id: 1,
      color: "bg-lime-400",
      title: "Jewell-led beat Bulls despite McDermott heroics",
      time: "7h ago",
      author: "Lorem Porta",
    },
    {
      id: 2,
      color: "bg-yellow-200",
      title: "LIVE: Openers tee off for India in West",
      time: "3h ago",
      author: "Nulla Quis",
    },
    {
      id: 3,
      color: "bg-orange-400",
      title: "Incididunt ut labore et dolore magna aliqua Ut enim",
      time: "5h ago",
      author: "Ipsum Amet",
    },
    {
      id: 4,
      color: "bg-pink-300",
      title: "Suspendisse ullamcorper, non porta lectus tortor et elit.",
      time: "6h ago",
      author: "Sed Augue",
    },
  ];

  // Update screen width on window resize
  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === matchData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, matchData.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? matchData.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === matchData.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          MATCH COVERAGE
        </h2>
        <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 transition-colors">
          SEE ALL
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {matchData.map((match, index) => (
                <div key={match.id} className="w-full flex-shrink-0 px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Show all 4 cards on desktop, current card on mobile */}
                    {matchData.map((item, itemIndex) => (
                      <div
                        key={item.id}
                        className={`${
                          screenWidth >= 1024
                            ? "block"
                            : screenWidth >= 768
                            ? itemIndex < 2
                              ? "block"
                              : "hidden"
                            : itemIndex === currentIndex
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        <div className="group cursor-pointer">
                          {/* Card Image */}
                          <div
                            className={`${item.color} rounded-lg aspect-[310/206] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative`}
                          >
                            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                            <span className="relative z-10 text-lg font-medium text-white drop-shadow-lg">
                              310 x 206
                            </span>
                          </div>

                          {/* Card Content */}
                          <div>
                            <h3 className="text-gray-900 dark:text-white font-medium text-sm leading-tight mb-2 group-hover:text-orange-500 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">
                              {item.time} {item.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {matchData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-2">
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"
              }`}
            />
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </div>
        </div>
      </div>
    </div>
  );
}