import { Card, CardContent } from './ui/Card'
import { Badge } from './ui/Badge'
import { Section } from './ui/Section'

interface TechCategory {
  title: string;
  color: 'agency-blue' | 'agency-red' | 'agency-yellow' | 'agency-green' | 'agency-pink' | 'agency-violet';
  items: Array<{
    name: string;
    highlight?: boolean;
  }>;
}

export default function TechnicalExpertise() {
  const categories: TechCategory[] = [
    {
      title: "Web Technologies",
      color: "agency-yellow",
      items: [
        { name: "HTML", highlight: true },
        { name: "CSS", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "Python", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "PHP", highlight: true },
        { name: "Django", highlight: true },
        { name: "TypeScript" },
        { name: "Wordpress" },
        { name: "React" },
        { name: "Node.js" },
        { name: "GraphQL" },
        { name: "Flask" },
        { name: "Docker" },
        { name: "CI/CD" }
      ]
    },
    {
      title: "Data & Analytics",
      color: "agency-red",
      items: [
        { name: "SQL", highlight: true },
        { name: "AWS", highlight: true },
        { name: "Azure", highlight: true },
        { name: "GCP", highlight: true},
        { name: "BigQuery", highlight: true },
        { name: "ETL/ELT", highlight: true },
        { name: "Data Modelling", highlight: true },
        { name: "Looker", highlight: true },
        { name: "Redshift" },
        { name: "Cloud Run" },
        { name: "AWS Glue" },
        { name: "PowerBI" },
        { name: "MySQL" },
        { name: "PostgreSQL" }
      ]
    },
    {
      title: "Platforms & Tools",
      color: "agency-pink",
      items: [
        { name: "Segment.io", highlight: true },
        { name: "Branch.io", highlight: true },
        { name: "GTM", highlight: true },
        { name: "GA4", highlight: true},
        { name: "Wrike", highlight: true},
        { name: "Anthropic", highlight: true },
        { name: "OpenAI", highlight: true },
        { name: "GrowthBook" },
        { name: "HubSpot" },
        { name: "OneTrust" },
        { name: "Yoast SEO" },
        { name: "Mouseflow" },
        { name: "LangChain" },
        { name: "Brightcove" },
        { name: "Vimeo OTT" }
      ]
    }
  ];

  return (
    <Section title="Technical Expertise">
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="print:break-inside-avoid">
            <CardContent>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <Badge 
                    key={itemIndex}
                    color={item.highlight ? category.color : 'none'}
                    className="text-sm py-1.5 px-3 print:text-xs print:py-0.5 print:px-1.5"
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