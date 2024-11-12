import Header from './components/Header'
import Summary from './components/Summary'
import CoreCompetencies from './components/CoreCompetencies'
import Experience from './components/Experience'
import TechnicalExpertise from './components/TechnicalExpertise'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Summary />
        <CoreCompetencies />
        <Experience />
        <TechnicalExpertise />
      </main>
    </div>
  )
}