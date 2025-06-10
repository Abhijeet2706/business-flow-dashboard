import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">BusinessFlow</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Powerful analytics dashboard for modern businesses. Make data-driven
            decisions with confidence.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 BusinessFlow. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/abhijeetkumar2706/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/abhijeetkumar_ak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/Abhijeet2706"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/ABHIJEE22121366"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-sky-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            <span className="text-sm text-muted-foreground">
              ❤️ Made with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
