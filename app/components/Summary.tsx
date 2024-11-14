import { Card, CardContent } from './ui/Card'
import { Section } from './ui/Section'
import { theme } from '../config/theme'

export default function Summary() {
  return (
    <Section>
      <Card>
        <CardContent>
          <p className={theme.colors.text.primary}>
            Innovation-focused technology leader specializing in enterprise web development and real-time data solutions 
            for the media entertainment industry. Strong track record of architecting and implementing 
            client-facing platforms, with deep expertise in privacy-first data collection, real-time analytics, 
            and marketing technology integration. Proven success leading cross-functional teams to 
            deliver mission-critical web applications, custom backend tools, and data solutions. 
            Demonstrated ability to drive technical strategy while actively contributing to development,
            ensuring solutions meet stringent security, scalability, and performance requirements.
          </p>
        </CardContent>
      </Card>
    </Section>
  )
}