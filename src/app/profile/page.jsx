"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [userId, setUserId] = useState(null);
  const [profileData, setProfileData] = useState({ username: "", bio: "" });

  useEffect(() => {
    async function fetchUserId() {
      const response = await fetch("/api/getUserId");
      const data = await response.json();
      setUserId(data.userId);
    }
    fetchUserId();
  }, []);

  async function handleUpdateProfile(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const bio = formData.get("bio");

    const response = await fetch("/api/updateProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, username, bio }),
    });

    if (response.ok) {
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div>
      <h2>Update Profile Page</h2>
      <form onSubmit={handleUpdateProfile}>
        <input
          name="username"
          placeholder="Username"
          value={profileData.username}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={profileData.bio}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
