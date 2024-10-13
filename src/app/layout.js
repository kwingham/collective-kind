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
            <nav>
              <ul style={{ display: "flex", gap: "1rem" }}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/global-timeline">Global Timeline</Link>
                </li>
                <li>
                  <Link href="/notifications">Notifications</Link>
                </li>
              </ul>
            </nav>
          </header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <main>{children}</main>
          <footer>
            <p>Collective-Kind - Building a kind and supportive community</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
