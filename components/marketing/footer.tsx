import Link from "next/link";
import { Logo } from "../ui/logo";

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { name: "Brand Access", href: "/dashboard" },
        { name: "Pricing", href: "/pricing" },
        { name: "Exclusive Leads", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Unlocking real brand collaborations with decision makers. No middlemen. Just real opportunities.
            </p>
          </div>
          
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} Clutch Momentum. All rights reserved.
          </p>
          <div className="flex gap-8">
            {/* Social Icons Placeholder */}
            <div className="w-5 h-5 bg-foreground/10 rounded-full" />
            <div className="w-5 h-5 bg-foreground/10 rounded-full" />
            <div className="w-5 h-5 bg-foreground/10 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
