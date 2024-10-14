import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <nav style={{ display: "flex", gap: "1rem" }}>
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/global-timeline">Global Timeline</Link>
              <Link href="/notifications">Notifications</Link>
            </nav>
          </header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
