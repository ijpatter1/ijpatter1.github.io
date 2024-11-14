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
        title: "Web Development",
        skills: ["Full-stack architecture", "Platform integration", "Performance tuning", "SEO optimization"],
        colour: 'agency-blue'
      },
      {
        title: "Data Architecture",
        skills: ["Cloud infrastructure", "Data lakes & warehouses", "ETL/ELT pipelines", "Real-time visualization"],
        colour: 'agency-violet'
      },
      {
        title: "Marketing Technology",
        skills: ["Attribution modeling", "Campaign optimization", "User journey analytics", "Platform integration"],
        colour: 'agency-pink'
      },
      {
        title: "Technical Innovation",
        skills: ["Custom tool development", "AI/ML implementation", "Emerging tech integration", "POC development"],
        colour: 'agency-green'
      },
      {
        title: "Technical Leadership",
        skills: ["Team mentoring", "Cross-functional collaboration", "Stakeholder management", "Project delivery"],
        colour: 'agency-yellow'
      },
      {
        title: "Privacy & Security",
        skills: ["Data governance", "Compliance frameworks", "Security architecture", "Best practices"],
        colour: 'agency-red'
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