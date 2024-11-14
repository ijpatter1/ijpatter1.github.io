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