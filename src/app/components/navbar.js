"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="translate-x-6 mt-5.5  ml-10">
                <Image src="/images/power100.png" alt="Logo" width={100} height={100} />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                Power100
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="text-foreground hover:text-primary hover:bg-accent px-5 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary hover:bg-accent px-5 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-sm relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary hover:bg-accent px-5 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Button
              asChild
              variant="default"
              className="ml-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 animate-pulse hover:animate-none"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-accent transition-all duration-300 rounded-lg hover:scale-110 hover:bounce"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-accent transition-all duration-300 rounded-lg hover:scale-110 hover:bounce"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping bag</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
            >
              <div className="transition-transform duration-300">
                {isMenuOpen ? <X className="h-6 w-6 rotate-90" /> : <Menu className="h-6 w-6" />}
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden border-t border-border transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-2 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-300 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300"
              style={{ animationDelay: "0.1s" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-300 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300"
              style={{ animationDelay: "0.2s" }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-300 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300"
              style={{ animationDelay: "0.3s" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2 animate-in slide-in-from-left-4 duration-300" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                className="w-full transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/register">Register</Link>
              </Button>
            </div>
            <div
              className="flex items-center justify-center space-x-4 px-3 py-2 border-t border-border mt-4 pt-4 animate-in slide-in-from-left-4 duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Shopping bag</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
