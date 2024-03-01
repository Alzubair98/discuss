"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: user is signed in </div>;
  }

  return <div> from client: user is NOT signed in</div>;
};

export default Profile;
