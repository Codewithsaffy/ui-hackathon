import React from "react";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { User } from "lucide-react";

const AuthenticationButton = () => {
  const { user } = useUser();

  return (
    <ClerkLoaded>
      {user ? (
        <div>
          {/* <p>{user.fullName}</p> */}
          {/* <Image
          src={user.imageUrl}
          alt=""
          height={50}
          width={50}
          className="rounded-full h-10  w-10"
        /> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      ) : (
        <div>
          <SignInButton>
            <div className="hidden sm:flex items-center gap-1 cursor-pointer">
              <p>Login</p>
              <User size={16} />
            </div>
          </SignInButton>
        </div>
      )}
    </ClerkLoaded>
  );
};

export default AuthenticationButton;
