# Ian Patterson - Interactive Resume

A modern, interactive resume built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design, print-optimized layout, and downloadable PDF functionality.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15.0, React 19.0, and TypeScript
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Interactive Elements**: Hover states and animations for engaging user experience
- **Accessibility**: WCAG compliance with semantic HTML and proper ARIA attributes
- **PDF Export**: Client-side PDF generation with html2canvas and jsPDF

## 🛠 Technology Stack

- **Framework**: Next.js 15.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Custom components with shadcn/ui integration
- **Icons**: Lucide React
- **PDF Generation**: html2canvas + jsPDF
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/resume-site.git

# Navigate to project directory
cd resume-site

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗 Project Structure

```
/
├── .github/
│   └── workflows/        # GitHub Actions workflows
├── app/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── ...          # Feature components
│   ├── config/          # Configuration files
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
└── configuration files  # Various config files
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is triggered on push to the main branch.

```bash
# Manual deployment
npm run build
```

## 🖨 Print Optimization

The site includes custom print styles for optimal PDF generation:

- Custom media queries for print layout
- Print-specific typography adjustments
- Badge optimization for PDF export
- Page break considerations

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.