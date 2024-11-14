// CoreCompetencies.tsx
import { Card, CardContent } from './ui/Card'
import { Section } from './ui/Section'
import { theme } from '../config/theme'

interface Competency {
  title: string;
  skills: string[];
  colour: 'agency-blue' | 'agency-violet' | 'agency-green' | 'agency-pink' | 'agency-yellow' | 'agency-red';
}

export default function CoreCompetencies() {
  const competencies: Competency[] = [
    {
      title: "Client Solutions",
      skills: ["Web development leadership", "Marketing campaign integration", "Real-time analytics"],
      colour: 'agency-blue' // Marketing & Digital focus
    },
    {
      title: "Technical Innovation",
      skills: ["Proprietary tool development", "Emerging tech implementation (AI/ML, Web3)"],
      colour: 'agency-violet' // Innovation & Future Tech
    },
    {
      title: "Data Architecture",
      skills: ["Cloud infrastructure", "Data lakes", "ETL/ELT", "Real-time visualization"],
      colour: 'agency-green' // Infrastructure & Systems
    },
    {
      title: "Marketing Technology",
      skills: ["Attribution modeling", "Campaign optimization", "User journey analytics"],
      colour: 'agency-pink' // Creative & Marketing Tech
    },
    {
      title: "Strategic Leadership",
      skills: ["Cross-functional collaboration", "Stakeholder management", "Agile methodologies"],
      colour: 'agency-yellow' // Leadership & Management
    },
    {
      title: "Privacy & Security",
      skills: ["Data governance frameworks", "Regulatory compliance", "Security best practices"],
      colour: 'agency-red' // Security & Compliance
    }
  ];

  return (
    <Section title="Core Competencies">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {competencies.map((comp, index) => (
          <Card key={index} hoverColor={comp.colour}>
            <CardContent>
              <h3 className={`font-semibold mb-2 ${theme.colors.text.primary}`}>
                {comp.title}
              </h3>
              <ul className="space-y-1">
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
  );
}