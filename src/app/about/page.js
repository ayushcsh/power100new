import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Award, Calendar, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-6 animate-fade-in">
            About Power 100 Sports Federation
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
            Committed to strengthening India&apos;s sporting ecosystem by promoting excellence, integrity, and opportunity
            in every field of play.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-8 h-8" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Excellence &amp; Integrity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Through structured programs and strategic partnerships, we aim to elevate Indian sports to global
                    standards—one community, one milestone at a time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-500 mb-4">Grassroots Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We discover and develop young talent from the grassroots, providing access to world-class training
                    and mentorship for every aspiring player.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Power 100 Cricket League Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 via-white to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-4">
              Power 100 Cricket League
            </h2>
            <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-lg transition-colors duration-300">
              Coming Soon
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Key Features */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Live Telecast
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  First ever 100 ball cricket league at National Level with ball-to-ball telecast on National Sports
                  Channel.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Equal Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  Every registered player gets a chance to play and can secure their position in teams through talent
                  and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Professional Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  All matches supervised by recognized Indian Team Players and International/National coaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Registration */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-12">
            Registration &amp; Eligibility
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-xl border-l-4 border-emerald-500 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Age Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-700">Group I: 12-30 Years</h4>
                    <p className="text-gray-700">10 Teams with 16 players each</p>
                  </div>
                  <div className="p-4 bg-emerald-100 rounded-lg border border-emerald-300">
                    <h4 className="font-semibold text-emerald-800">Group II: 31-50 Years</h4>
                    <p className="text-gray-700">10 Teams with 16 players each</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-l-4 border-emerald-600 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-700 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Selection Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-gray-700">Trials in all 5 Zones</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-gray-700">Professional selection committee</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-gray-700">320 top performers selected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 via-white to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-12">
            Awards &amp; Recognition
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Player of the Match", color: "bg-gradient-to-r from-emerald-600 to-emerald-700", icon: "🏆" },
              { title: "Tournament Player", color: "bg-gradient-to-r from-emerald-500 to-emerald-600", icon: "⭐" },
              {
                title: "Orange Cap - Best Batsman",
                color: "bg-gradient-to-r from-emerald-400 to-emerald-500",
                icon: "🧢",
              },
              {
                title: "Purple Cap - Best Bowler",
                color: "bg-gradient-to-r from-emerald-700 to-emerald-800",
                icon: "🎯",
              },
              { title: "Best Fielder Award", color: "bg-gradient-to-r from-emerald-300 to-emerald-400", icon: "🥇" },
              { title: "Team Championships", color: "bg-gradient-to-r from-emerald-800 to-emerald-900", icon: "🏅" },
            ].map((award, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${award.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}
                  >
                    {award.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{award.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-12">
            Player Benefits
          </h2>

          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Travel &amp; Accommodation",
                    desc: "Sponsored airfare and hospitality",
                    color: "text-emerald-600",
                  },
                  {
                    title: "Professional Training",
                    desc: "Best coaches and physios in India",
                    color: "text-emerald-700",
                  },
                  { title: "Team Jerseys", desc: "Personalized with names and numbers", color: "text-emerald-500" },
                  {
                    title: "Future Opportunities",
                    desc: "Training for National &amp; International tournaments",
                    color: "text-emerald-800",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 hover:shadow-md"
                  >
                    <h4 className={`font-semibold ${benefit.color} mb-2`}>{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
