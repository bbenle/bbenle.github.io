import "./globals.css";

// define the global layout for the portfolio - nav bars, footers, or any components that should appear on every page

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
