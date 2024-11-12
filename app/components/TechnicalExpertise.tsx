export default function TechnicalExpertise() {
    const expertise = [
      {
        category: "Required Technologies",
        skills: [
          { title: "Languages", items: ["JavaScript", "Python", "SQL"] },
          { title: "Cloud Platforms", items: ["AWS", "Azure"] },
          { title: "Web Technologies", items: ["Full-stack development", "SEO optimization"] },
          { title: "Data Management", items: ["Data lakes", "ETL/ELT", "Real-time analytics"] }
        ]
      },
      {
        category: "Marketing Technology Stack",
        skills: [
          { title: "Analytics", items: ["Segment.io", "Branch.io", "Google Analytics"] },
          { title: "Campaign Tools", items: ["HubSpot", "Google Tag Manager"] },
          { title: "Visualization", items: ["Looker", "PowerBI"] },
          { title: "Privacy & Security", items: ["OneTrust", "Data governance frameworks"] }
        ]
      },
      {
        category: "Emerging Technologies",
        skills: [
          { title: "AI/ML", items: ["OpenAI", "Anthropic", "Google Gemini"] },
          { title: "Web3", items: ["Smart contract integration", "Blockchain analytics"] },
          { title: "Custom Tools", items: ["Proprietary analytics", "Optimization platforms"] }
        ]
      }
    ];
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Expertise</h2>
        <div className="space-y-8">
          {expertise.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{skill.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {skill.items.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }