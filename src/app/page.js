import Navbar from "./components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Tv, Award, Target, Star, MapPin, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-green-50 to-green-100">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-pink-400 rounded-full opacity-60"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-8">
              🏏 India&apos;s Premier Cricket League
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-black text-green-800 mb-4 leading-tight">POWER 1001</h1>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">Cricket League</h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              India&apos;s first ever 100-ball cricket league at National Level. Live telecast on National Sports Channel
              with professional coaching and world-class facilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* BEST PRACTICE: Use `asChild` prop to merge Button and Link functionality */}
              <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold" asChild>
                <Link href="/register">
                  <Trophy className="w-5 h-5 mr-2" />
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl animate-bounce-in bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2">
                  <div className="w-full h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image src="/images/logo1.png" alt="Tournament Image" height={400} width={500} style={{ objectFit: "contain" }} />
                  </div>
                </div>

                {/* Right side - Information */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                  {/* Trophy Icon */}
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto md:mx-0 animate-pulse">
                    <Trophy className="w-8 h-8 text-yellow-800" />
                  </div>

                  {/* Coming Soon Text */}
                  <div>
                    <h3 className="text-4xl font-black text-red-500 mb-2 animate-bounce">COMING SOON</h3>
                    <p className="text-lg font-semibold text-green-700">Power 100 Cricket League</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600">
                    Registration starting soon for India&apos;s most exciting 100-ball cricket tournament
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>📧 power100.co.in</p>
                    <p>📱 +91 77307-2222</p>
                  </div>

                  {/* Notify Button */}
                  <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold">
                    Registration Opens 
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "320+", label: "Players", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
              { number: "20", label: "Teams", icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-100" },
              { number: "5", label: "Zones", icon: MapPin, color: "text-green-600", bg: "bg-green-100" },
              { number: "100", label: "Ball Format", icon: Target, color: "text-red-600", bg: "bg-red-100" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-cricket transition-all duration-300 animate-bounce-in hover-lift border-2 border-transparent hover:border-blue-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-glow`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} animate-bounce-in`}>{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-300 animate-pulse-glow">
              Our Vision
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 animate-slide-up">
              Strengthening Cricket Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Power 100 Sports Federation is committed to strengthening India&apos;s sporting ecosystem by promoting
              excellence, integrity, and opportunity in every field of play. We aim to discover and develop young talent
              from the grassroots, providing access to world-class training and mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                desc: "World-class training facilities and professional coaching staff",
                color: "text-blue-600",
                bg: "bg-blue-100",
                border: "border-blue-300",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Building strong sporting communities across all age groups",
                color: "text-green-600",
                bg: "bg-green-100",
                border: "border-green-300",
              },
              {
                icon: Trophy,
                title: "Achievement",
                desc: "Recognizing and rewarding talent with national recognition",
                color: "text-yellow-600",
                bg: "bg-yellow-100",
                border: "border-yellow-300",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-cricket transition-all duration-300 transform hover:-translate-y-4 animate-bounce-in ${item.border} border-2 hover-lift group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div
                    className={`mx-auto w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300 animate-pulse-glow`}
                  >
                    <item.icon className={`w-10 h-10 ${item.color}`} />
                  </div>
                  <CardTitle className={`text-xl ${item.color} font-bold`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* League Highlights */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 via-blue-100 to-yellow-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-orange-100 text-orange-700 border-orange-300 animate-pulse-glow"
            >
              🔥 League Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6 animate-slide-up">
              Tournament Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">
              Experience cricket like never before with professional broadcast and world-class facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: "Live Telecast",
                desc: "Ball-to-ball coverage on National Sports Channel with expert commentary",
                gradient: "from-blue-200 to-blue-300",
                iconColor: "text-blue-700",
              },
              {
                icon: Users,
                title: "320 Elite Players",
                desc: "Carefully selected from nationwide trials across 5 zones",
                gradient: "from-green-200 to-green-300",
                iconColor: "text-green-700",
              },
              {
                icon: Trophy,
                title: "20 Competitive Teams",
                desc: "10 teams each in two age groups (12-30 & 31-50 years)",
                gradient: "from-purple-200 to-purple-300",
                iconColor: "text-purple-700",
              },
              {
                icon: Award,
                title: "Multiple Awards",
                desc: "Player of Match, Orange Cap, Purple Cap & Championship Trophy",
                gradient: "from-yellow-200 to-yellow-300",
                iconColor: "text-yellow-700",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-cricket transition-all duration-300 transform hover:scale-105 animate-slide-up bg-gradient-to-br ${item.gradient} group hover-lift border-2 border-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition-all duration-300 shadow-lg">
                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <CardTitle className={`text-lg ${item.iconColor} font-bold`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-700">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-gold/20 text-gold-foreground border-gold/30">
              🎯 Join The League
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 animate-slide-up">
              Registration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Open to all males aged 12-50 years. Join India&apos;s most exciting cricket league!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="animate-slide-up hover:shadow-cricket transition-all duration-300 border-primary/20 group">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  Group I (12-30 Years)
                </CardTitle>
                <CardDescription className="text-primary/70">Future Stars Division</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>10 Teams with 16 players each</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Professional coaching & mentorship</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>All expenses covered for selected players</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Team jerseys with names & numbers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="animate-slide-up hover:shadow-cricket transition-all duration-300 border-green-200 group"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <CardTitle className="text-2xl text-green-700 flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  Group II (31-50 Years)
                </CardTitle>
                <CardDescription className="text-green-600">Masters Division</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>10 Teams with 16 players each</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Experienced player category</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Team jerseys with names & numbers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Special recognition for veteran players</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Timeline */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Tournament Schedule</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>
                  Registration: <strong className="text-foreground">Dec 2024</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span>
                  League Starts: <strong className="text-foreground">Jan 2025</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Trophy className="w-5 h-5 text-gold" />
                <span>
                  Finals: <strong className="text-foreground">Mar 2025</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-xl px-12 py-6 animate-trophy-shine bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-yellow-900 font-bold shadow-2xl hover-lift"
              asChild
            >
              <Link href="/register">
                <Trophy className="w-6 h-6 mr-3" />
                Start Your Cricket Journey
              </Link>
            </Button>
            <p className="text-sm text-gray-600 mt-4 animate-slide-up">
              Registration fee: ₹2,500 per player • Limited seats available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
     



<footer className="bg-slate-50 py-12 px-4">
  <div className="container mx-auto text-center">

    {/* Logo and Federation Info */}
    <div className="flex flex-col items-center mb-6">
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
        <Trophy className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-green-800">
        Power 100 Sports Federation
      </h3>
      <p className="text-sm text-gray-500">
        Excellence • Integrity • Opportunity
      </p>
    </div>

    {/* Description */}
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      Strengthening India&apos;s sporting ecosystem through world-class cricket leagues and professional development programs.
    </p>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
      <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
        About League
      </a>
      <a href="#registration" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
        Registration
      </a>
      <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
        Contact Us
      </a>
      <a href="#privacy" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
        Privacy Policy
      </a>
      <a href="#terms" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
        Terms & Conditions
      </a>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-200 pt-8">
      <p className="text-sm text-gray-500">
        © 2025 Power 100 Sports Federation. All rights reserved. | Powered by Cricket Excellence
      </p>
    </div>
    
  </div>
</footer>
    </div>
  )
}

export default Index