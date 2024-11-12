import Header from './components/Header'
import Summary from './components/Summary'
import CoreCompetencies from './components/CoreCompetencies'
import Experience from './components/Experience'
import TechnicalExpertise from './components/TechnicalExpertise'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8">
      <Header />
      
      <main className="max-w-4xl mx-auto">
        <Summary />
        <CoreCompetencies />
        <Experience />
        <TechnicalExpertise />
      </main>
    </div>
  )
}