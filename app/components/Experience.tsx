export default function Experience() {
    const experiences = [
      {
        title: "Strategic Leadership & Client Success",
        points: [
          "Lead cross-functional teams across Marketing, Creative, and Client Solutions to deliver integrated technology solutions",
          "Drive collaboration between engineering and marketing teams to enhance campaign performance through data-driven insights",
          "Spearhead development of internal multi-touch marketing attribution model achieving 90%+ accuracy in campaign tracking",
          "Establish and maintain client relationships through successful delivery of web and analytics solutions"
        ]
      },
      {
        title: "Web Development & Marketing Integration",
        points: [
          "Architect and deploy client-facing web solutions integrating real-time analytics and personalization",
          "Lead development of Verizon +play platform integration, expanding distribution channels and improving user experience",
          "Design and implement custom middleware solutions achieving 8% upsell rate through enhanced checkout flow",
          "Integrate MarTech stack (Segment, Branch, GTM) improving marketing attribution accuracy and campaign optimization"
        ]
      },
      {
        title: "Data & Analytics Innovation",
        points: [
          "Create real-time marketing dashboards driving 25% improvement in campaign performance",
          "Maintain 99% uptime for mission-critical data pipelines supporting marketing operations",
          "Lead metadata management initiative across 3,000+ titles ensuring consistent user experience",
          "Implement privacy-first data collection framework ensuring compliance while maximizing marketing insights"
        ]
      },
      {
        title: "Proprietary Tools & Emerging Technology",
        points: [
          "Develop custom marketing analytics tools enabling real-time campaign optimization",
          "Design and implement AI-powered content discovery system enhancing user engagement",
          "Lead integration of Web3 technologies for enhanced user experience and engagement tracking",
          "Pioneer implementation of generative AI workflows for content optimization and personalization"
        ]
      }
    ];
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Professional Experience</h2>
        <h3 className="text-xl mb-6 text-gray-600 dark:text-gray-400">
          UP Entertainment | Data & Analytics Engineering Manager (2021 - Present)
        </h3>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{exp.title}</h4>
              <ul className="space-y-3">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700 dark:text-gray-300 text-sm">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }