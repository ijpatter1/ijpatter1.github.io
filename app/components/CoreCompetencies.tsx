export default function CoreCompetencies() {
    const competencies = [
      {
        title: "Client Solutions",
        skills: ["Web development leadership", "Marketing campaign integration", "Real-time analytics"]
      },
      {
        title: "Technical Innovation",
        skills: ["Proprietary tool development", "Emerging tech implementation (AI/ML, Web3)"]
      },
      {
        title: "Data Architecture",
        skills: ["Cloud infrastructure", "Data lakes", "ETL/ELT", "Real-time visualization"]
      },
      {
        title: "Marketing Technology",
        skills: ["Attribution modeling", "Campaign optimization", "User journey analytics"]
      },
      {
        title: "Strategic Leadership",
        skills: ["Cross-functional collaboration", "Stakeholder management", "Agile methodologies"]
      },
      {
        title: "Privacy & Security",
        skills: ["Data governance frameworks", "Regulatory compliance", "Security best practices"]
      }
    ];
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{comp.title}</h3>
              <ul className="space-y-1">
                {comp.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 dark:text-gray-300 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }