"use client"
import { ThemeProvider } from "next-themes";
import "./global.css"
import ThemeChanger from "@/components/ThemeChanger";

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning> 
      <body>
      
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem >
        <ThemeChanger id="changer"/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
