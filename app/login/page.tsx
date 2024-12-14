import { signIn } from "@/auth";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConfettiButton } from "@/components/ui/confetti";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-startup-tech-business-blue-contemporary-image_627638.jpg')] bg-cover bg-center w-full overflow-hidden">
        {/* Logo section */}
        <div className="px-5 py-3 bg-gray-200 shadow-sm font-work-sans">
          <div className="px-5 py-3 bg-gray-200 shadow-sm">
            <Image
              src="/logo.png"
              alt="logo"
              width={144}
              height={140}
              className="block"
            />
          </div>
        </div>

        {/* Main card section */}
        <div className="flex flex-1 justify-center items-center">
          <Card className="w-full max-w-md bg-primary rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl flex flex-col p-6">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold">Welcome</CardTitle>
              <CardDescription className="text-2xl text-white lin">
                Please log in with GitHub to continue
              </CardDescription>
            </CardHeader>
            <Image
              src="https://i.ytimg.com/vi/22WIj4OpNa8/maxresdefault.jpg"
              alt="github"
              width={150}
              height={50}
              className="mx-auto rounded-lg mb-10"
            />
            <CardFooter className="flex justify-center items-center mt-auto">
              <ConfettiButton
                onClick={async () => {
                  "use server";
                  await signIn("github", { redirectTo: "/" });
                }}
                className="w-60 h-16 text-xl bg-black-200 text-white hover:bg-red-300 hover:text-black transition-all"
              >
                Login
              </ConfettiButton>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;


//https://www.transparenttextures.com/patterns/cubes.png
//#878787
