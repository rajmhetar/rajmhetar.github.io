"use client"

export function Footer() {
  return (
    <footer className="py-8 border-t border-muted/30">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Raj Mhetar • Built with Next.js</p>
      </div>
    </footer>
  )
} 