import { Inter , Figtree } from "next/font/google";
import './global.css';
import { SessionProvider } from "next-auth/react";
// import '../lib/fontawesome'; // Ensure this is imported

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Marketplace",
  description: "Generated by create next app",
};

export default function RootLayout({ session , children }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={figtree.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
