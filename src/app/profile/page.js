"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const { data, error } = await supabase.from("users").select("*").limit(1);
      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        setUserData(data[0]);
      }
      setLoading(false);
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <SignedOut>
        <p>You must be signed in to view this page.</p>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {userData ? (
          <div>
            <h2>Profile</h2>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Bio: {userData.bio}</p>
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </SignedIn>
    </div>
  );
}
