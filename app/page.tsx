import Header from './components/Header'
import Summary from './components/Summary'
import CoreCompetencies from './components/CoreCompetencies'
import Experience from './components/Experience'
import TechnicalExpertise from './components/TechnicalExpertise'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6">
      <Header />
      
      <main className="max-w-4xl mx-auto space-y-8">
        <Summary />
        <CoreCompetencies />
        <Experience />
        <TechnicalExpertise />
      </main>
    </div>
  )
}