"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <p>Welcome to Collective-Kind! Please sign in to join the community.</p>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <h2>Home</h2>
        <p>Welcome in, I am because we are</p>
        <p>Collective-Kind - Building a kind and supportive community</p>
      </SignedIn>
    </div>
  );
}

// "use client";

// export default function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <p>Welcome to Collective-Kind! Please sign in to join the community</p>
//     </div>
//   );
// }
