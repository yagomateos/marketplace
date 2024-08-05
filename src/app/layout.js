import { Inter, Figtree } from "next/font/google";
import './global.css';
import { SessionProvider } from "next-auth/react";
import { AppProvider } from './context/AppContext';
// import '../lib/fontawesome'; // Ensure this is imported

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Vendalia",
  description: "Vendalia espain",
};

export default function RootLayout({ session, children }) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <html lang="en">
          <body className={figtree.className}>{children}</body>
        </html>
      </AppProvider>

    </SessionProvider>
  );
}
