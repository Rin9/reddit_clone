import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Avatar = ({ seed, large }) => {
  const { data: session } = useSession();

  return (
    <div
      className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-300 bg-white border ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        layout="fill"
        alt="user_avatar"
        src={`https://avatars.dicebear.com/api/croodles/${
          seed || session?.user?.name || "placeholder"
        }.svg`}
        objectFit="contain"
      />
    </div>
  );
};

export default Avatar;
