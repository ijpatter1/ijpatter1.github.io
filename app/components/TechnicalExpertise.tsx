import { Card, CardContent } from './ui/Card'
import { Badge } from './ui/Badge'
import { Section } from './ui/Section'
import { theme } from '../config/theme'

interface TechCategory {
  title: string;
  items: Array<{
    name: string;
    highlight?: boolean;
  }>;
}

export default function TechnicalExpertise() {
  const categories: TechCategory[] = [
    {
      title: "Required Technologies",
      items: [
        { name: "JavaScript", highlight: true },
        { name: "Python", highlight: true },
        { name: "SQL", highlight: true },
        { name: "AWS", highlight: true },
        { name: "Azure", highlight: true },
        { name: "Full-stack Development" },
        { name: "SEO Optimization" },
        { name: "Data Lakes" },
        { name: "ETL/ELT" }
      ]
    },
    {
      title: "Marketing Technology Stack",
      items: [
        { name: "Segment.io", highlight: true },
        { name: "Branch.io", highlight: true },
        { name: "Google Analytics" },
        { name: "HubSpot" },
        { name: "Google Tag Manager" },
        { name: "Looker" },
        { name: "PowerBI" },
        { name: "OneTrust" }
      ]
    },
    {
      title: "Emerging Technologies",
      items: [
        { name: "OpenAI", highlight: true },
        { name: "Anthropic", highlight: true },
        { name: "Google Gemini" },
        { name: "Web3" },
        { name: "Blockchain Analytics" },
        { name: "Smart Contracts" }
      ]
    }
  ];

  return (
    <Section title="Technical Expertise">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Card key={index}>
            <CardContent>
              <h3 className={`text-lg font-semibold mb-4 ${theme.colors.text.primary}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <Badge 
                    key={itemIndex}
                    className={item.highlight ? theme.colors.primary.badge : 'bg-gray-50'}
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}