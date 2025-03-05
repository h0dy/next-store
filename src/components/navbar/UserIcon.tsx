import { currentUser } from "@clerk/nextjs/server";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="user avatar"
        className="size-6 rounded-full object-cover"
        width={25}
        height={25}
      />
    );
  }
  return <CircleUserRound size={32} />;
};

export default UserIcon;
