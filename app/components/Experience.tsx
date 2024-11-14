import { Card, CardContent } from './ui/Card'
import { Badge } from './ui/Badge'
import { Section } from './ui/Section'
import { theme } from '../config/theme'

interface Achievement {
  title: string;
  points: string[];
}

const AchievementSection = ({ title, points }: Achievement) => (
  <div className="mb-6 last:mb-0">
    <h4 className={`text-lg font-semibold mb-3 ${theme.colors.text.primary}`}>
      {title}
    </h4>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className={`${theme.colors.text.secondary}`}>
          • {point}
        </li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  const achievements: Achievement[] = [
    {
      title: "Technical Leadership",
      points: [
        "Lead metadata management team collaborating with Programming, Operations and Streaming to implement centralized content data system",
        "Hands-on development of multi-platform subscription bundle, coordinating engineering efforts across checkout, streaming, and billing systems",
        "Drive implementation of marketing attribution solutions through integration of Segment, Branch, and Google Tag Manager",
        "Direct technical strategy and implementation of Verizon +play platform integration, establishing framework for future distribution partnerships"
      ]
    },
    {
      title: "Web Development & Platform Integration",
      points: [
        "Develop enhanced checkout website increasing bundle service adoption by 8%",
        "Lead B2B platform integration with Verizon +play, expanding distribution channels and revenue streams",
        "Design and implement custom middleware solutions for multi-service subscription management",
        "Integrate marketing technology stack (Segment, Branch, GTM) to optimize attribution and analytics"
      ]
    },
    {
      title: "Data Architecture & Analytics",
      points: [
        "Architect and maintain mission-critical data pipelines achieving 99% uptime for executive dashboards",
        "Lead metadata management initiative ensuring consistency across 3,000+ video titles",
        "Develop internal multi-touch marketing attribution model achieving 90%+ accuracy in web campaign tracking",
        "Implement privacy-first data collection framework ensuring regulatory compliance across platforms"
      ]
    },
    {
      title: "Tool Development & Innovation",
      points: [
        "Develop ETL pipelines and data transformations for marketing and streaming analytics",
        "Build integrations between subscription management and streaming platforms to enable multi-service bundling",
        "Create automated metadata management and content distribution workflows increasing delivery accuracy to from 30% to 98%+",
        "Design and implement generative AI workflow for video metadata generation"
      ]
    }
  ];

  return (
    <Section title="Professional Experience">
      <Card>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-6">
            <div className="flex flex-col">
              <h3 className={`text-xl font-semibold ${theme.colors.text.primary}`}>
                UP Entertainment
              </h3>
              <p className={`${theme.colors.text.secondary} text-lg`}>
                Data & Analytics Engineering Manager
              </p>
            </div>
            <div className="flex items-center sm:items-start">
            <Badge
              className={`
                text-xs md:text-sm py-1 px-2 bg-white border border-gray-200 text-gray-900 print:text-xs print:py-0.5 print:px-1.5
              `}
              color="agency-violet"
              aria-label="Employment period">
              November 2021 - Present
            </Badge>
            </div>
          </div>

          {achievements.map((achievement, index) => (
            <AchievementSection 
              key={index} 
              title={achievement.title} 
              points={achievement.points}
            />
          ))}
        </CardContent>
      </Card>
    </Section>
  );
}