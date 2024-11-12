import { Card, CardContent } from './ui/Card'
import { Section } from './ui/Section'

export default function Summary() {
  return (
    <Section>
      <Card>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">
            Innovation-focused technology leader with proven success in pushing boundaries of marketing 
            technology in the entertainment industry. Extensive experience developing client-facing web 
            solutions, real-time analytics platforms, and proprietary tools that drive marketing success. 
            Track record of leading cross-functional teams to deliver cutting-edge solutions while ensuring 
            seamless integration with marketing campaigns and strategies. Demonstrated ability to translate 
            complex technical concepts for diverse stakeholders while maintaining focus on bottom-line results.
          </p>
        </CardContent>
      </Card>
    </Section>
  )
}