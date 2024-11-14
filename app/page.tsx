import Header from './components/Header'
import Summary from './components/Summary'
import CoreCompetencies from './components/CoreCompetencies'
import Experience from './components/Experience'
import TechnicalExpertise from './components/TechnicalExpertise'
import DownloadButton from './components/DownloadButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6">
      <div className="resume-container max-w-[794px] mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-8">
          <Header />
          
          <main className="space-y-8">
            <Summary />
            <CoreCompetencies />
            <Experience />
            <TechnicalExpertise />
          </main>
        </div>
      </div>

      <DownloadButton />
    </div>
  )
}