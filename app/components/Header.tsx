'use client'

import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'

interface ContactLink {
  href: string;
  icon: typeof Mail;
  text: string;
  external?: boolean;
}

export default function Header() {
  const contactLinks = [
    {
      href: "mailto:ianjamespatterson@gmail.com",
      icon: Mail,
      text: "ianjamespatterson@gmail.com"
    },
    {
      href: "tel:+14406507810",
      icon: Phone,
      text: "+1 440-650-7810"
    },
    {
      href: "https://linkedin.com/in/ianpatterson31/",
      icon: Linkedin,
      text: "LinkedIn",
      external: true
    }
  ];

  return (
    <header className="max-w-4xl mx-auto mb-8 text-center">
      <h1 className="text-4xl font-bold mb-2">IAN PATTERSON</h1>
      <h2 className="text-xl mb-4">Director of Web, Data & Tools</h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2"
              {...(link.external ? {
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
            >
              <Icon size={16} />
              {link.text}
            </a>
          );
        })}
        <span className="flex items-center gap-2">
          <MapPin size={16} />
          Windsor, Berkshire
        </span>
      </div>
    </header>
  );
}