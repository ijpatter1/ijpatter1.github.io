import { Card, CardContent } from './ui/Card'
import { Section } from './ui/Section'
import { theme } from '../config/theme'

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
    <Section title="Core Competencies">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">  {/* Reduced from gap-4 to gap-3 */}
        {competencies.map((comp, index) => (
          <Card key={index}>
            <CardContent>
              <h3 className={`font-semibold mb-2 ${theme.colors.text.primary}`}>
                {comp.title}
              </h3>
              <ul className="space-y-1">  {/* Keep space-y-1 as is for readability */}
                {comp.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={`${theme.colors.text.secondary} text-sm`}>
                    • {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}