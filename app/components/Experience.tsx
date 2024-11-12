import { Card, CardContent } from './ui/Card'
import { Badge } from './ui/Badge'
import { Section } from './ui/Section'

interface Achievement {
  title: string;
  points: string[];
}

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
        <CardContent className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-purple-400">UP Entertainment</h3>
              <p className="text-gray-400">Data & Analytics Engineering Manager</p>
            </div>
            <Badge className="bg-purple-600 hover:bg-purple-700">2021 - Present</Badge>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="rounded-lg bg-gray-800/50 p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">
                  {achievement.title}
                </h4>
                <ul className="space-y-2">
                  {achievement.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-gray-300">
                      <span className="mt-2 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}