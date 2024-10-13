import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const { data, error } = await supabase.from("users").select("*").limit(1);
      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        setUserData(data[0]);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.username}</h1>
          <p>{userData.email}</p>
          <p>{userData.bio}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
