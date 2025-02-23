import { currentUser } from "@clerk/nextjs/server";
import { CircleUserRound } from "lucide-react";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="user avatar"
        className="size-6 rounded-full object-cover"
      />
    );
  }
  return <CircleUserRound size={32} />;
};

export default UserIcon;
