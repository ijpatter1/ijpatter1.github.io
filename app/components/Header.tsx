'use client'

import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'

interface ContactLink {
  href: string;
  icon: typeof Mail;
  text: string;
  external?: boolean;
}

export default function Header() {
  const contactLinks: ContactLink[] = [
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
      <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        IAN PATTERSON
      </h1>
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
        Director of Web, Data & Tools
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 text-gray-600">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              {...(link.external ? {
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
            >
              <Icon size={18} />
              {link.text}
            </a>
          );
        })}
        <span className="flex items-center gap-2">
          <MapPin size={18} />
          Windsor, Berkshire
        </span>
      </div>
    </header>
  )
}