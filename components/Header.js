import React from "react";
import Image from "next/image";

import logo from "../public/images/Reddit_logo_new.png";
import signin from "../public/images/signin.png";

import { ChevronDownIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid";

import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  MenuIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  //session from next-auth
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-10 flex bg-white px-4 py-2 shadow-sm items-center">
      {/* logo */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
      </div>
      {/* home */}
      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* search bar */}
      <form className="flex flex-1 items-center space-x-2 border-gray-200 rounded-sm border bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>
      <div className=" text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      {/* burger icon */}
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* sign in/out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 px-4 py-2 cursor-pointer rounded-lg trans-base hover:bg-gray-200"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src={signin}
              layout="fill"
              alt="signin"
              objectFit="contain"
            />
          </div>
          <div className="flex-1 text-sm">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 px-4 py-2 cursor-pointer rounded-lg trans-base hover:bg-gray-200"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src={signin}
              layout="fill"
              alt="signin"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
};

export default Header;
