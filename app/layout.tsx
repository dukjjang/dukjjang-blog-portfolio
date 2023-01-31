import { Providers } from "./Provider";
import "../styles/global.css";
import { ServerThemeProvider } from "next-themes";
import Header from "./shared/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
