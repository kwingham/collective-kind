import { connect } from "@/lib/connect";

export async function handleUpdateProfile({ userId, username, bio }) {
  const db = connect();

  // check whether a profile exists
  const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`,
    [userId]
  );
  if (profiles.rowCount === 0) {
    // insert our profile into the DB
    await db.query(
      `INSERT INTO profiles (clerk_id, username, bio) VALUES ($1, $2, $3)`,
      [userId, username, bio]
    );
  } else {
    // update the existing item
    await db.query(
      `UPDATE profiles SET username=$1, bio=$2 WHERE clerk_id=$3`,
      [username, bio, userId]
    );
  }
}
