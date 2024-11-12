import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Innovation-focused technology leader with proven success in pushing boundaries of marketing technology 
            in the entertainment industry. Extensive experience developing client-facing web solutions, 
            real-time analytics platforms, and proprietary tools that drive marketing success.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Client Solutions</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Web development leadership</li>
                <li>Marketing campaign integration</li>
                <li>Real-time analytics</li>
              </ul>
            </div>
            {/* Add more competencies here */}
          </div>
        </section>

        {/* We'll add more sections below */}
      </main>
    </div>
  )
}